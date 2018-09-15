var compress_images = require('compress-images');
    
  function MyFun(){
    compress_images('./images.uncompressed/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}', './images/', 
                    {compress_force: false, statistic: true, autoupdate: true}, false,
                    {jpg: {engine: 'mozjpeg', command: ['-quality', '70']}},
                    {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                    {svg: {engine: 'svgo', command: '--multipass'}},
                    {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(err, completed){
      if(completed === true){
          console.log('completed the compressing of images')
      }                                    
    });
  }

MyFun();