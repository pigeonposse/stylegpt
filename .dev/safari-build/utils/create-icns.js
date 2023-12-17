
import { mkdirSync } from 'fs';

export function createIcns(iconsetPath, icnsPath, logoPath) {
    mkdirSync(iconsetPath, { recursive: true });
  
    const sizes = [16, 32, 128, 256, 512];
    sizes.forEach(size => {
      execSync(`sips -z ${size} ${size} ${logoPath} --out ${iconsetPath}/icon_${size}x${size}.png`);
    });
  
    execSync(`iconutil -c icns -o ${icnsPath} ${iconsetPath}`);
  }