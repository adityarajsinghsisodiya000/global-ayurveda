import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/ADITYA RAJ/.gemini/antigravity/brain/1094046f-32b5-4dd0-9f76-e565324a7dbb';
const destDir = 'C:/Users/ADITYA RAJ/.gemini/antigravity/scratch/global-ayurveda/public/images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);
const mappings = [
  { prefix: 'hero_ayurveda_bg_', target: 'hero_ayurveda_bg.png' },
  { prefix: 'who_we_are_mortar_', target: 'who_we_are_mortar.png' },
  { prefix: 'card_ayurveda_', target: 'card_ayurveda.png' },
  { prefix: 'card_yoga_', target: 'card_yoga.png' },
  { prefix: 'card_meditation_', target: 'card_meditation.png' },
];

mappings.forEach(({ prefix, target }) => {
  const match = files.find(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (match) {
    const srcPath = path.join(brainDir, match);
    const destPath = path.join(destDir, target);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${match} -> ${target}`);
  } else {
    console.log(`No match for ${prefix}`);
  }
});
