const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
 
const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');
 
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}
 
fs.readdirSync(target)
    .forEach(image => {
      // mengubah ukuran gambar dengan lebar 800px, dengan prefix -dekstop.jpg
      sharp(`${target}/${image}`)
          .resize(800)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-dekstop.jpg`),
          );
 
      // mengubah ukuran gambar dengan lebar 480px, dengan prefix -mobile.jpg
      sharp(`${target}/${image}`)
          .resize(480)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-mobile.jpg`),
          );
    });