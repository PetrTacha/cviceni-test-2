const fs = require("fs");
const path = require("path");

const BASE_DIR = ".";
const IGNORE = ["node_modules", ".git", ".vercel"];

function formatName(name) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function toWebPath(parts) {
  return parts.join("/");
}

function normalizeWebPath(input) {
  return input.split("\\").join("/");
}

function extractThumbnail(indexFilePath) {
  try {
    const html = fs.readFileSync(indexFilePath, "utf8");
    const markerIndex = html.indexOf('id="slide-initial"');
    if (markerIndex === -1) return null;

    const localChunk = html.slice(markerIndex, markerIndex + 6000);
    const imageMatch = localChunk.match(/background-image:\s*url\(([^)]+)\)/i);

    if (!imageMatch || !imageMatch[1]) return null;

    return imageMatch[1].trim().replace(/^['"]|['"]$/g, "");
  } catch {
    return null;
  }
}

function resolveThumbnailPath(exerciseFolderPath, thumbnailPath) {
  if (!thumbnailPath) return null;
  if (thumbnailPath.startsWith("http://") || thumbnailPath.startsWith("https://") || thumbnailPath.startsWith("/")) {
    return thumbnailPath;
  }

  const topFolder = exerciseFolderPath.split("/")[0] || "";
  const assetIndex = thumbnailPath.indexOf("assets/");
  if (assetIndex !== -1 && topFolder) {
    return `${topFolder}/${thumbnailPath.slice(assetIndex)}`;
  }

  const merged = path.posix.normalize(`${exerciseFolderPath}/${thumbnailPath}`);
  return normalizeWebPath(merged);
}

function findExercises(dir, base = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let results = [];

  for (const item of items) {
    if (IGNORE.includes(item.name)) continue;

    const fullPath = path.join(dir, item.name);
    const relativePath = path.join(base, item.name);

    if (item.isDirectory()) {
      results = results.concat(findExercises(fullPath, relativePath));
    }

    if (item.isFile() && item.name === "index.html") {
      const parts = relativePath.split(path.sep);

      // remove "index.html"
      parts.pop();

      // Skip the generated root index.html file.
      if (parts.length === 0) continue;

      const folderName = parts[parts.length - 1] || "Root";
      const folderPath = toWebPath(parts);
      const thumbRaw = extractThumbnail(fullPath);
      const thumbnail = resolveThumbnailPath(folderPath, thumbRaw);

      results.push({
        name: formatName(folderName),
        path: folderPath,
        thumbnail
      });
    }
  }

  return results;
}

const exercises = findExercises(BASE_DIR);

function groupByTopFolder(items) {
  const groups = new Map();

  for (const item of items) {
    const topFolder = item.path.split("/")[0] || "root";

    if (!groups.has(topFolder)) {
      groups.set(topFolder, []);
    }

    groups.get(topFolder).push(item);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, entries]) => ({
      name,
      entries: entries.sort((a, b) => a.path.localeCompare(b.path))
    }));
}

const groupedExercises = groupByTopFolder(exercises);

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Exercises</title>

<style>
  body {
    font-family: system-ui;
    background: #f6f8fa;
    padding: 30px;
  }

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin: 28px 0 12px;
    font-size: 18px;
  }

  .group {
    margin-bottom: 24px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .card {
    background: white;
    border-radius: 12px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .card-content {
    padding: 16px;
  }

  .thumb {
    width: 100%;
    height: 130px;
    object-fit: cover;
    display: block;
    background: #e5e7eb;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .path {
    font-size: 12px;
    color: #666;
    word-break: break-all;
  }

</style>
</head>

<body>

<h1>🧪 Exercises</h1>

${groupedExercises.map(group => `
  <section class="group">
    <h2>${group.name}</h2>
    <div class="grid">
      ${group.entries.map(ex => `
        <div class="card" onclick="openExercise('${ex.path}')">
          ${ex.thumbnail ? `<img class="thumb" src="${ex.thumbnail}" alt="${ex.name}" loading="lazy">` : ""}
          <div class="card-content">
            <div class="title">${ex.name}</div>
            <div class="path">${ex.path}</div>
          </div>
        </div>
      `).join("")}
    </div>
  </section>
`).join("")}

<script>
function openExercise(path) {
  window.open(path, "_blank");
}
</script>

</body>
</html>
`;

fs.writeFileSync(path.join(BASE_DIR, "index.html"), html);

console.log(`✅ Generated ${exercises.length} exercise cards`);