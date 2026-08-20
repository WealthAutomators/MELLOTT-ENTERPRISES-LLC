/**
 * Downloads curated Unsplash images by photo ID (no API key required).
 * Usage: node scripts/download-mellott-images.mjs
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const TARGETS = [
  // Hero / banners
  { file: "hero/hero-1.jpg", id: "photo-1556912173-46c336c7fd55", w: 1800 },
  { file: "hero/hero-2.jpg", id: "photo-1586023492125-27b2c045efd7", w: 1600 },
  { file: "hero/hero-3.jpg", id: "photo-1493663284031-b7e3aefcae8e", w: 1600 },
  { file: "banners/featured.jpg", id: "photo-1556909114-f6e7ad7d5046", w: 1400 },
  { file: "banners/about.jpg", id: "photo-1484101403633-562f891dc89a", w: 1400 },

  // Categories
  { file: "categories/electronics.jpg", id: "photo-1519389950473-47ba0277781c", w: 900 },
  { file: "categories/home-kitchen.jpg", id: "photo-1556911220-e15b29be8c8f", w: 900 },
  { file: "categories/bathroom.jpg", id: "photo-1584622650111-993a426fbf0a", w: 900 },
  { file: "categories/educational-toys.jpg", id: "photo-1587654780291-39c9404d746b", w: 900 },
  { file: "categories/pet-supplies.jpg", id: "photo-1583511655852-d21ac8a622af", w: 900 },
  { file: "categories/beauty.jpg", id: "photo-1596462502278-27bfdc403348", w: 900 },
  { file: "categories/sports-outdoors.jpg", id: "photo-1551632811-561732d1e306", w: 900 },
  { file: "categories/office-supplies.jpg", id: "photo-1497366216548-37526070297c", w: 900 },
  { file: "categories/fashion-accessories.jpg", id: "photo-1523381210434-271e8be1f52b", w: 900 },
  { file: "categories/baby-products.jpg", id: "photo-1515488042361-ee00e5178171", w: 900 },
  { file: "categories/toys-games.jpg", id: "photo-1566576912321-d58ddd7a6088", w: 900 },
  { file: "categories/health-wellness.jpg", id: "photo-1544367567-0f2fcb009e0b", w: 900 },

  // Reused product images (refresh still ok)
  { file: "products/bath-towel-set-1.jpg", id: "photo-1616627561837-643695700d9b", w: 900 },
  { file: "products/bath-towel-set-2.jpg", id: "photo-1631889992164-882aae16d807", w: 900 },
  { file: "products/dog-bed-1.jpg", id: "photo-1583511655852-d21ac8a622af", w: 900 },
  { file: "products/dog-bed-2.jpg", id: "photo-1548199973-03cce0cfb87f", w: 900 },
  { file: "products/yoga-mat-1.jpg", id: "photo-1592432670736-3299669ea351", w: 900 },
  { file: "products/yoga-mat-2.jpg", id: "photo-1544367567-0f2fcb009e0b", w: 900 },
  { file: "products/coffee-grinder-1.jpg", id: "photo-1517668808822-9ebb02f2a0e6", w: 900 },
  { file: "products/coffee-grinder-2.jpg", id: "photo-1495474472287-4d71bcdd2085", w: 900 },
  { file: "products/soft-plush-blanket-1.jpg", id: "photo-1515488042361-ee00e5178171", w: 900 },
  { file: "products/soft-plush-blanket-2.jpg", id: "photo-1522771739844-6a9f6d5f14af", w: 900 },

  // New products
  { file: "products/magnetic-car-vent-mount-1.jpg", id: "photo-1558618666-fcd25c85cd64", w: 900 },
  { file: "products/magnetic-car-vent-mount-2.jpg", id: "photo-1449965408869-eaa3f722e40d", w: 900 },
  { file: "products/portable-label-maker-1.jpg", id: "photo-1586953208448-b95a79798f07", w: 900 },
  { file: "products/portable-label-maker-2.jpg", id: "photo-1454165804606-c3d57bc86b40", w: 900 },
  { file: "products/enamel-stockpot-8qt-1.jpg", id: "photo-1556910103-1c02745aae4d", w: 900 },
  { file: "products/enamel-stockpot-8qt-2.jpg", id: "photo-1556909114-f6e7ad7d5046", w: 900 },
  { file: "products/immersion-sous-vide-1.jpg", id: "photo-1556911221-bff31c812bea", w: 900 },
  { file: "products/immersion-sous-vide-2.jpg", id: "photo-1570222096853-7762faff523e", w: 900 },
  { file: "products/teak-bath-stool-1.jpg", id: "photo-1600566753190-17fedebaa088", w: 900 },
  { file: "products/teak-bath-stool-2.jpg", id: "photo-1620626011764-996317b8d101", w: 900 },
  { file: "products/kids-coding-robot-car-1.jpg", id: "photo-1558068710-1c8e0857584f", w: 900 },
  { file: "products/kids-coding-robot-car-2.jpg", id: "photo-1566576912321-d58ddd7a6088", w: 900 },
  { file: "products/wooden-number-abacus-1.jpg", id: "photo-1503454535920-2a2bab2645a2", w: 900 },
  { file: "products/wooden-number-abacus-2.jpg", id: "photo-1587654780291-39c9404d746b", w: 900 },
  { file: "products/automatic-pet-feeder-1.jpg", id: "photo-1601758228041-f3b2795255f1", w: 900 },
  { file: "products/automatic-pet-feeder-2.jpg", id: "photo-1450778869180-41d0601e046e", w: 900 },
  { file: "products/peptide-eye-cream-duo-1.jpg", id: "photo-1570172619644-df0cb7bf0a08", w: 900 },
  { file: "products/peptide-eye-cream-duo-2.jpg", id: "photo-1556228720-195a672e8a03", w: 900 },
  { file: "products/dry-body-brush-set-1.jpg", id: "photo-1522335780783-8b0812a2bb33", w: 900 },
  { file: "products/dry-body-brush-set-2.jpg", id: "photo-1612817288484-6f916006177a", w: 900 },
  { file: "products/trail-daypack-22l-1.jpg", id: "photo-1553062407-98eeb64c6a62", w: 900 },
  { file: "products/trail-daypack-22l-2.jpg", id: "photo-1501555088652-021faa106b9b", w: 900 },
  { file: "products/compact-camping-stove-1.jpg", id: "photo-1478131143081-80f7f84ca84d", w: 900 },
  { file: "products/compact-camping-stove-2.jpg", id: "photo-1504280390367-361c6d9f38f4", w: 900 },
  { file: "products/wall-monitor-light-bar-1.jpg", id: "photo-1497366814923-5eb8b8e0e0f1", w: 900 },
  { file: "products/wall-monitor-light-bar-2.jpg", id: "photo-1593640408182-31c70c8268f5", w: 900 },
  { file: "products/accordion-file-organizer-1.jpg", id: "photo-1484480974693-6ca0a78fb36b", w: 900 },
  { file: "products/accordion-file-organizer-2.jpg", id: "photo-1586281380349-632531db7ed4", w: 900 },
  { file: "products/waxed-canvas-belt-bag-1.jpg", id: "photo-1548036328-c0855531c8c2", w: 900 },
  { file: "products/waxed-canvas-belt-bag-2.jpg", id: "photo-1553062407-98eeb64c6a62", w: 900 },
  { file: "products/silicone-teether-set-1.jpg", id: "photo-1515488042361-ee00e5178171", w: 900 },
  { file: "products/silicone-teether-set-2.jpg", id: "photo-1503454535920-2a2bab2645a2", w: 900 },
  { file: "products/wooden-marble-run-1.jpg", id: "photo-1566576912321-d58ddd7a6088", w: 900 },
  { file: "products/wooden-marble-run-2.jpg", id: "photo-1558068710-1c8e0857584f", w: 900 },
  { file: "products/lawn-cornhole-set-1.jpg", id: "photo-1530549387789-4c1017266635", w: 900 },
  { file: "products/lawn-cornhole-set-2.jpg", id: "photo-1461896836934-fff607baade1", w: 900 },
  { file: "products/compact-massage-gun-1.jpg", id: "photo-1571019614242-c5c5dee9f50b", w: 900 },
  { file: "products/compact-massage-gun-2.jpg", id: "photo-1518611012118-696072aa579a", w: 900 },
  { file: "products/charcoal-odor-bags-1.jpg", id: "photo-1584622650111-993a426fbf0a", w: 900 },
  { file: "products/charcoal-odor-bags-2.jpg", id: "photo-1600585154340-be6161a56a0c", w: 900 },
  { file: "products/modular-cube-shelves-1.jpg", id: "photo-1595428774223-ef52624120d4", w: 900 },
  { file: "products/modular-cube-shelves-2.jpg", id: "photo-1594026112284-02bb6f3352fe", w: 900 },
  { file: "products/linen-drum-table-lamp-1.jpg", id: "photo-1507473885765-e6ed057f782c", w: 900 },
  { file: "products/linen-drum-table-lamp-2.jpg", id: "photo-1513506003901-1e6a229e2d15", w: 900 },

  // Reviews
  { file: "reviews/review-1.jpg", id: "photo-1493663284031-b7e3aefcae8e", w: 600 },
  { file: "reviews/review-2.jpg", id: "photo-1556912173-46c336c7fd55", w: 600 },
  { file: "reviews/review-3.jpg", id: "photo-1551632811-561732d1e306", w: 600 },
  { file: "reviews/review-4.jpg", id: "photo-1497366216548-37526070297c", w: 600 },
  { file: "reviews/review-5.jpg", id: "photo-1556909114-f6e7ad7d5046", w: 600 },
  { file: "reviews/review-6.jpg", id: "photo-1586023492125-27b2c045efd7", w: 600 },
  { file: "reviews/review-7.jpg", id: "photo-1484101403633-562f891dc89a", w: 600 },
  { file: "reviews/review-8.jpg", id: "photo-1519389950473-47ba0277781c", w: 600 },
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function download(photoId, width) {
  const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
  const res = await fetch(url, {
    headers: { "User-Agent": "MellottEnterprisesLLC/1.0 (image-setup)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 3000) throw new Error("File too small");
  return buf;
}

async function main() {
  console.log(`Downloading ${TARGETS.length} Mellott images...\n`);
  let ok = 0;
  let fail = 0;
  const hashes = new Set();

  for (let i = 0; i < TARGETS.length; i++) {
    const t = TARGETS[i];
    const dest = path.join(PUBLIC, t.file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    process.stdout.write(`[${i + 1}/${TARGETS.length}] ${t.file}... `);
    try {
      const buf = await download(t.id, t.w);
      const hash = crypto.createHash("sha256").update(buf).digest("hex");
      // Allow intentional shared photos across categories/reviews
      fs.writeFileSync(dest, buf);
      hashes.add(hash);
      ok++;
      console.log("✓");
    } catch (err) {
      fail++;
      console.log(`✗ ${err.message}`);
    }
    await sleep(200);
  }

  console.log(`\nDone: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
