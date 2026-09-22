import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";
const directory = path.resolve("public/images");
for (const file of await readdir(directory)) {
  if (!file.endsWith(".jpg")) continue;
  await sharp(path.join(directory, file))
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(directory, file.replace(".jpg", ".webp")));
}
console.log("Optimized supplied photographs as WebP; originals preserved.");
