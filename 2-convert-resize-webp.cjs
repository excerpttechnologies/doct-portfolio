const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");
const MAP_FILE = path.join(process.cwd(), "asset-map.json");
const MAX_DIMENSION = 1920;

async function main() {
  const map = JSON.parse(fs.readFileSync(MAP_FILE, "utf8"));
  const files = fs.readdirSync(ASSETS_DIR).filter(f =>
    fs.statSync(path.join(ASSETS_DIR, f)).isFile()
  );

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!/\.(jpg|jpeg|png|webp)$/.test(ext)) continue;

    const fullPath = path.join(ASSETS_DIR, file);
    const baseName = path.basename(file, ext);
    const outputName = baseName + ".webp";
    const outputPath = path.join(ASSETS_DIR, outputName);
    const tempPath = outputPath + ".tmp";

    try {
      await sharp(fullPath)
        .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(tempPath);

      fs.unlinkSync(fullPath);
      fs.renameSync(tempPath, outputPath);
      console.log(`✅ ${file} -> ${outputName}`);

      // update map: any entry currently pointing at `file` now points to outputName
      for (const key of Object.keys(map)) {
        if (map[key] === file) map[key] = outputName;
      }
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err.message);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }

  fs.writeFileSync(MAP_FILE, JSON.stringify(map, null, 2));
  console.log("\n🎉 All images resized + converted to webp.");
}

main();