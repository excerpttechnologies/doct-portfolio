const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");
const MAP_FILE = path.join(process.cwd(), "asset-map.json");

function normalizeBase(filename) {
  const ext = path.extname(filename);
  let base = path.basename(filename, ext);
  base = base.replace(/\s*\(\d+\)$/, "");           // strip " (2)" copy suffix
  base = base.replace(/-[A-Za-z0-9_-]{6,12}$/, "");  // strip bundler-style hash suffix
  return base.toLowerCase();
}

function main() {
  const files = fs.readdirSync(ASSETS_DIR).filter(f =>
    fs.statSync(path.join(ASSETS_DIR, f)).isFile()
  );

  const groups = {};
  for (const file of files) {
    const key = normalizeBase(file);
    if (!groups[key]) groups[key] = [];
    groups[key].push(file);
  }

  const map = {}; // originalFileName -> finalFileName (this step)
  let reviewWarnings = [];

  for (const [base, groupFiles] of Object.entries(groups)) {
    if (groupFiles.length === 1) {
      const file = groupFiles[0];
      const ext = path.extname(file).toLowerCase();
      const cleanName = base + ext;
      if (file !== cleanName) {
        fs.renameSync(path.join(ASSETS_DIR, file), path.join(ASSETS_DIR, cleanName));
        console.log(`RENAMED: ${file} -> ${cleanName}`);
      }
      map[file] = cleanName;
      continue;
    }

    // multiple files in this group -> pick survivor
    const withSizes = groupFiles.map(f => ({
      name: f,
      size: fs.statSync(path.join(ASSETS_DIR, f)).size,
    }));
    withSizes.sort((a, b) => b.size - a.size); // largest first

    const maxSize = withSizes[0].size;
    const minSize = withSizes[withSizes.length - 1].size;
    if (minSize > 0 && maxSize / minSize > 3) {
      reviewWarnings.push(
        `⚠️  REVIEW: group "${base}" has very different file sizes (${groupFiles.join(", ")}) — double check these are really the same photo.`
      );
    }

    const survivor = withSizes[0].name;
    const survivorExt = path.extname(survivor).toLowerCase();
    const cleanName = base + survivorExt;
    const survivorPath = path.join(ASSETS_DIR, survivor);
    const cleanPath = path.join(ASSETS_DIR, cleanName);

    // delete the losers
    for (const { name } of withSizes.slice(1)) {
      fs.unlinkSync(path.join(ASSETS_DIR, name));
      console.log(`DELETED duplicate: ${name} (kept ${survivor})`);
      map[name] = cleanName;
    }

    // rename survivor to clean name (if needed)
    if (survivor !== cleanName) {
      fs.renameSync(survivorPath, cleanPath);
      console.log(`RENAMED survivor: ${survivor} -> ${cleanName}`);
    }
    map[survivor] = cleanName;
  }

  fs.writeFileSync(MAP_FILE, JSON.stringify(map, null, 2));
  console.log(`\n✅ Wrote ${MAP_FILE} with ${Object.keys(map).length} entries.`);

  if (reviewWarnings.length) {
    console.log("\n" + reviewWarnings.join("\n"));
  }
}

main();