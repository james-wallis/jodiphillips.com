const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const nextConfig = {
  webpack: (config, {dev}) => {
    const oldEntry = config.entry
    config.entry = async () =>  {
      const entries = await oldEntry();
      if (entries['main.js']) entries['main.js'].push(path.resolve('./utils/offline'));
      return entries
    }
    if(!dev){
      config.plugins.push(new SWPrecacheWebpackPlugin({
        cacheId: 'test-lighthouse',
        filepath: path.resolve('./static/sw.js'),
        staticFileGlobs: [
          'static/**/*'
        ],
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'fastest',
          urlPattern: /[.](png|jpg|jpeg|css)/
        },{
          handler: 'networkFirst',
          urlPattern: /^http.*/
        }]
      }))
    }
    return config
  }
}

module.exports = withPlugins([
  [optimizedImages, {
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
  }],

], nextConfig);



