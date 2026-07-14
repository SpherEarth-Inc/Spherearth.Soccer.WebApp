import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const WEBP_QUALITY = 82;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImage(sourcePath) {
  const targetPath = sourcePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const sourceStats = await stat(sourcePath);
  let targetStats = null;

  try {
    targetStats = await stat(targetPath);
  } catch {
    targetStats = null;
  }

  if (targetStats && targetStats.mtimeMs >= sourceStats.mtimeMs) {
    console.log(`skip  ${path.relative(PUBLIC_DIR, sourcePath)} (webp up to date)`);
    return { sourcePath, targetPath, skipped: true };
  }

  await sharp(sourcePath)
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(targetPath);

  const outputStats = await stat(targetPath);
  const savedPct = Math.round((1 - outputStats.size / sourceStats.size) * 100);

  console.log(
    `done  ${path.relative(PUBLIC_DIR, sourcePath)} -> ${path.relative(PUBLIC_DIR, targetPath)} (${savedPct}% smaller)`
  );

  await unlink(sourcePath);
  return { sourcePath, targetPath, skipped: false, savedPct };
}

const heroCopyPath = path.join(PUBLIC_DIR, "images", "homepage-hero-banner - Copy.png");
const heroPath = path.join(PUBLIC_DIR, "images", "homepage-hero-banner.png");

try {
  await stat(heroCopyPath);
  await stat(heroPath);
} catch {
  try {
    await stat(heroCopyPath);
    const { rename } = await import("node:fs/promises");
    await rename(heroCopyPath, heroPath);
    console.log("renamed homepage-hero-banner - Copy.png -> homepage-hero-banner.png");
  } catch {
    // no copy file to rename
  }
}

const images = await walk(PUBLIC_DIR);
let converted = 0;

for (const imagePath of images) {
  const result = await convertImage(imagePath);
  if (!result.skipped) converted += 1;
}

console.log(`\nConverted ${converted} image(s) to WebP.`);
