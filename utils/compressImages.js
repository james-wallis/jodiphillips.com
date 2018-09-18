const compress_images = require('compress-images');
const fs = require('fs-extra');
const path = require('path')
const HOME = process.env.HOME
const tempDir = path.join(HOME, 'Github/jodiphillips.com/imagesTemp');
const imagesDir = path.join(HOME, 'Github/jodiphillips.com/images');
    
async function compress() {
  try {
  compress_images(`${imagesDir}/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}`, `${tempDir}/`, 
                  {compress_force: false, statistic: true, autoupdate: true}, false,
                  {jpg: {engine: 'mozjpeg', command: ['-quality', '70']}},
                  {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                  {svg: {engine: 'svgo', command: '--multipass'}},
                  {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, async function(err, completed){
    if(completed === true){
      console.log('completed the compressing of images')
      try {
        await fs.remove(imagesDir);
        await fs.move(tempDir, imagesDir);
      } catch(err) {
        console.error(err);
      }
      
    }                                    
  });
  } catch(err) {
    
  }
}

compress();