// package metadata file for Meteor.js
'use strict';

var packageName = 'hammer:hammer';  // https://atmospherejs.com/hammer/hammer
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'Processing.js (official) - a port of the Processing Visualization Language',
  version: packageJson.version,
  git: 'https://github.com/processing-js/processing-js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0','1.1.0.2']);
  api.export('Processing');
  api.addFiles([
    'processing.js',
    'meteor/export.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
