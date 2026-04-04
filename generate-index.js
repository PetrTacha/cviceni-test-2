const fs = require("fs");
const path = require("path");

const BASE_DIR = ".";
const IGNORE = ["node_modules", ".git", ".vercel"];

function formatName(name) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
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

      const folderName = parts[parts.length - 1] || "Root";

      results.push({
        name: formatName(folderName),
        path: relativePath
      });
    }
  }

  return results;
}

const exercises = findExercises(BASE_DIR);

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

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
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

<div class="grid">
  ${exercises.map(ex => `
    <div class="card" onclick="openExercise('${ex.path}')">
      <div class="title">${ex.name}</div>
      <div class="path">${ex.path}</div>
    </div>
  `).join("")}
</div>

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