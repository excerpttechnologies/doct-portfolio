const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(process.cwd(), "src");
const MAP_FILE = path.join(process.cwd(), "asset-map.json");
const CODE_EXT = [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"];

function walk(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, list);
    else if (CODE_EXT.includes(path.extname(entry.name))) list.push(full);
  }
  return list;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function main() {
  const map = JSON.parse(fs.readFileSync(MAP_FILE, "utf8"));
  const files = walk(SRC_DIR);
  let totalChanges = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;

    for (const [oldName, newName] of Object.entries(map)) {
      if (oldName === newName) continue;
      const pattern = new RegExp(escapeRegex(oldName), "gi");
      if (pattern.test(content)) {
        content = content.replace(pattern, newName);
        changed = true;
        totalChanges++;
        console.log(`✏️  ${path.relative(process.cwd(), file)}: "${oldName}" -> "${newName}"`);
      }
    }

    if (changed) fs.writeFileSync(file, content, "utf8");
  }

  console.log(`\n🎉 ${totalChanges} reference(s) updated.`);
}

main();