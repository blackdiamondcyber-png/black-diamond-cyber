#!/usr/bin/env node
// Swap every /images/{industry}-{slot}.jpg reference in the 4 demo pages
// to /images/ai/{industry}-{slot}.jpg when the AI version exists.
// Keeps the legacy path as a fallback ONLY if AI file is missing.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { readdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(here, '..');
const AI_DIR = resolve(REPO, 'public/images/ai');
const DEMO_PAGES = [
  'src/app/demo/dental/page.tsx',
  'src/app/demo/hvac/page.tsx',
  'src/app/demo/medspa/page.tsx',
  'src/app/demo/plumbing/page.tsx',
];

const aiFiles = new Set(readdirSync(AI_DIR).filter((f) => f.endsWith('.jpg')));
console.log(`AI assets available (${aiFiles.size}):`, [...aiFiles].slice(0, 5), '...');

let totalSwaps = 0;
for (const rel of DEMO_PAGES) {
  const p = resolve(REPO, rel);
  if (!existsSync(p)) { console.log(`  skip (missing): ${rel}`); continue; }
  const src = readFileSync(p, 'utf8');
  // Match "/images/{anything}.jpg"
  const swapped = src.replace(/"\/images\/([^"/]+\.jpg)"/g, (match, filename) => {
    if (aiFiles.has(filename)) {
      totalSwaps += 1;
      return `"/images/ai/${filename}"`;
    }
    return match;
  });
  if (swapped !== src) {
    writeFileSync(p, swapped, 'utf8');
    const before = (src.match(/"\/images\/[^"/]+\.jpg"/g) || []).length;
    const after = (swapped.match(/"\/images\/ai\/[^"/]+\.jpg"/g) || []).length;
    console.log(`  ${rel}: ${after}/${before} swapped to /images/ai/`);
  } else {
    console.log(`  ${rel}: no swaps`);
  }
}
console.log(`Total: ${totalSwaps} image refs swapped.`);
