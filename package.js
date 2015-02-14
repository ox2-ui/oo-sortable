Package.describe({
  name: 'ox2:sortable',
  summary: 'Sortable list components',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.15','mquandalle:jade@0.4.1','rubaxa:sortable@1.1.0'
    ]);
  api.addFiles('lib/oo-sortable.jade', C);
  api.addFiles('lib/oo-sortable.js', C);
  api.addFiles('lib/oo-sortable.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:sortable');
  api.addFiles('tests/oo-sortable-tests.js');
});
