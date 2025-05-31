const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Ensure output directory exists
const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Optimize and convert AnamVR-IconNoB.webp
sharp("./AnamVR-IconNoBg.webp")
  .resize({ width: 96, height: 96 }) // Match actual display size
  .webp({ quality: 75 })
  .toFile("output/AnamVR-IconNoBg.webp")
  .then(() =>
    console.log("Optimized: AnamVR-IconNoBg.webp -> AnamVR-IconNoBg.webp")
  )
  .catch((err) => console.error("Error:", err));
