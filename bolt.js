var bolt = require('bolt');

var mesh = new bolt.Node();

mesh.start();

mesh.emit('hello');

mesh.on('hello', function(){
  console.log('world');
});
