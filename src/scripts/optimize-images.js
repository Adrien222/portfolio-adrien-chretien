import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImages() {
  try {
    const files = await imagemin(['public/images/*.{jpg,png}'], {
      destination: 'public/images/webp',
      plugins: [
        imageminWebp({
          quality: 85, // Qualité optimale pour le web
          method: 6    // Compression maximale
        })
      ]
    });

    console.log(`${files.length} images converties en WebP`);
    files.forEach(file => {
      console.log(`✓ ${file.sourcePath} -> ${file.destinationPath}`);
    });
  } catch (error) {
    console.error('Erreur lors de la conversion:', error);
  }
}

optimizeImages();