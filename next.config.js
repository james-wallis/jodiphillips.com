const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const dev = process.env.NODE_ENV !== 'production';
if (dev) console.log('Development mode, not optimizing images');
if (!dev) console.log('Production mode, optimizing images');

const optimizedImageOpts = {
  // these are the default values so you don't have to provide them if they are good enough for your use-case.
  // but you can overwrite them here with any valid value you want.
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 4,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'picture',
    quality: 70,
  },
  responsive: {
    disable: dev
  }
}

console.log(optimizedImageOpts);

module.exports = withPlugins([
  [optimizedImages, optimizedImageOpts]
]);



