import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = {
  primary: "#263238",
  secondary: "#D97706",
  accent: "#84CC16",
  light: "#F1F3F2",
  gray: "#CDD3D5",
  white: "#FFFFFF",
};

function createSvg(width, height, bg, label, sublabel = "", textColor = colors.primary) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="${textColor}" stroke-width="1" opacity="0.15" rx="6"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.06}" font-weight="600">${label}</text>
  ${sublabel ? `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.035}" opacity="0.6">${sublabel}</text>` : ""}
</svg>`;
}

function createLogo() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 48" fill="none" role="img" aria-label="Mellott Enterprises">
  <rect x="0" y="4" width="40" height="40" rx="4" fill="${colors.primary}"/>
  <text x="20" y="30" text-anchor="middle" fill="${colors.white}" font-family="system-ui, sans-serif" font-size="16" font-weight="800" letter-spacing="-0.5">ME</text>
  <text x="52" y="22" fill="${colors.primary}" font-family="system-ui, sans-serif" font-size="15" font-weight="800" letter-spacing="0.5">MELLOTT</text>
  <text x="52" y="38" fill="#69757A" font-family="system-ui, sans-serif" font-size="10" font-weight="600" letter-spacing="2.5">ENTERPRISES</text>
</svg>`;
}

const root = path.join(__dirname, "..", "public");
fs.mkdirSync(path.join(root, "logo"), { recursive: true });
fs.writeFileSync(path.join(root, "logo", "logo.svg"), createLogo());
console.log("Generated Mellott logo placeholders");
