const brouserSync = require('browser-sync');

brouserSync({
  server: 'src',
  files: ['src/*.html', 'src/style/*.css', 'src/js/*.js'],
});
