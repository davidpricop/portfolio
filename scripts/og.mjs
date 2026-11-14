// Genera public/og.png (1200×630), la imagen que se ve al compartir la web.
// Uso: node scripts/og.mjs
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F3F4F6"/>
  <circle cx="78" cy="92" r="9" fill="#38D47E"/>
  <circle cx="78" cy="92" r="17" fill="#38D47E" opacity=".25"/>
  <text x="108" y="100" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#0B0B0C">david.pricop.es</text>
  <g font-family="Impact, 'Arial Narrow', sans-serif" font-size="198" letter-spacing="-1">
    <text x="62" y="352" fill="#0B0B0C">DAVID</text>
    <text x="556" y="352" fill="none" stroke="#0B0B0C" stroke-width="4">PRICOP</text>
  </g>
  <rect x="64" y="404" width="1072" height="3" fill="#0B0B0C"/>
  <text x="64" y="470" font-family="'Segoe UI', Arial, sans-serif" font-size="38" font-weight="600" fill="#0B0B0C">Desarrollo aplicaciones y automatizaciones</text>
  <text x="64" y="520" font-family="'Segoe UI', Arial, sans-serif" font-size="38" font-weight="600" fill="#5D6068">con IA, y las llevo hasta producción.</text>
  <text x="1136" y="586" text-anchor="end" font-family="Consolas, 'Courier New', monospace" font-size="22" fill="#5D6068">Sistemas · Claude · Codex · Madrid</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
console.log('public/og.png generado');
