const fs = require("fs");
const path = require("path");

const BASE_DIR = "./";

function formatName(name) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function scan(dir, base = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  return items.map(item => {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.join(base, item.name);

    if (item.isDirectory()) {
      return {
        type: "folder",
        name: formatName(item.name),
        rawName: item.name,
        children: scan(fullPath, relativePath)
      };
    } else if (item.name.endsWith(".html")) {
      return {
        type: "file",
        name: formatName(item.name.replace(".html", "")),
        rawName: item.name,
        path: relativePath
      };
    }
  }).filter(Boolean);
}

function renderTree(tree) {
  return tree.map(item => {
    if (item.type === "folder") {
      return `
        <div class="folder">
          <div class="folder-title" onclick="toggle(this)">
            📁 ${item.name}
          </div>
          <div class="folder-content">
            ${renderTree(item.children)}
          </div>
        </div>
      `;
    } else {
      return `
        <div class="file" data-name="${item.name.toLowerCase()}">
          📄 <a href="${item.path}">${item.name}</a>
        </div>
      `;
    }
  }).join("");
}

const tree = scan(BASE_DIR);

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Explorer</title>

<style>
  body {
    font-family: system-ui;
    background: #f5f5f5;
    padding: 20px;
  }

  h1 {
    margin-bottom: 10px;
  }

  #search {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .folder-title {
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }

  .folder-content {
    margin-left: 20px;
    display: none;
  }

  .file {
    margin-left: 20px;
    margin-top: 5px;
  }

  a {
    text-decoration: none;
    color: #0366d6;
  }
</style>

</head>

<body>

<h1>📂 Project Explorer</h1>

<input id="search" placeholder="Search pages..." oninput="search()" />

<div id="tree">
  ${renderTree(tree)}
</div>

<script>
function toggle(el) {
  const content = el.nextElementSibling;
  content.style.display =
    content.style.display === "none" ? "block" : "none";
}

function search() {
  const value = document.getElementById("search").value.toLowerCase();
  const files = document.querySelectorAll(".file");

  files.forEach(f => {
    const name = f.dataset.name;
    f.style.display = name.includes(value) ? "block" : "none";
  });
}

// expand all folders by default
document.querySelectorAll(".folder-content").forEach(el => {
  el.style.display = "block";
});
</script>

</body>
</html>
`;

fs.writeFileSync(path.join(BASE_DIR, "index.html"), html);

console.log("✅ Explorer index generated");