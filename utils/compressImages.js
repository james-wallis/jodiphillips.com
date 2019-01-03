const compress_images = require('compress-images');
const fs = require('fs-extra');
const path = require('path')
const HOME = process.env.HOME
const tempDir = path.join(HOME, 'Github/jodiphillips.com/imagesTemp');
const imagesDir = path.join(HOME, 'Github/jodiphillips.com/images');
async function compress() {
  try {
    let totalErrors = 0;
  compress_images(`${imagesDir}/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}`, `${tempDir}/`, 
                  {compress_force: false, statistic: true, autoupdate: true}, false,
                  {jpg: {engine: 'mozjpeg', command: ['-quality', '70']}},
                  {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                  {svg: {engine: 'svgo', command: '--multipass'}},
                  {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, async function(error, completed){
    if(error) {
      console.log('EROROROROROROROROROROROROROR');
      totalErrors++;
    }
    if(completed === true){
      if(totalErrors == 0) {
        console.log('completed the compressing of images')
        try {
          await fs.remove(imagesDir);
          await fs.move(tempDir, imagesDir);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log('The compression has encountered errors');
        process.exit(1);
      }
    }                                    
  });
  } catch(err) {
    
  }
}

compress();