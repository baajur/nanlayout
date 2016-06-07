var grid = require('./grid.js');

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('Run default', function() {
  var graph = grid(50, 20).getNativeGraph();
  var layout = require('../')(graph);
  for (var i = 0; i < 20; ++i) {
    layout.step();
  }
}).on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
