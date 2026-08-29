import fs from 'fs';
import path from 'path';

// Node script to zip the global-ayurveda project files excluding node_modules & dist
const projectDir = 'C:/Users/ADITYA RAJ/.gemini/antigravity/scratch/global-ayurveda';
const brainZipPath = 'C:/Users/ADITYA RAJ/.gemini/antigravity/brain/1094046f-32b5-4dd0-9f76-e565324a7dbb/global-ayurveda-project.zip';
const scratchZipPath = 'C:/Users/ADITYA RAJ/.gemini/antigravity/scratch/global-ayurveda-project.zip';

console.log('Packaging Global Ayurveda project...');
