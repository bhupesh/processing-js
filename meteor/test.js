'use strict';

Tinytest.add('Processing.is', function (test) {
  var canvas = document.createElement('canvas');
  var processing = new Processing(canvas);
  test.instanceOf(processing, Processing, 'Instantiation OK');
  // test.instanceOf(processing.get('pinch').manager, Hammer.Manager, 'Default pinch recognizer OK');
});
