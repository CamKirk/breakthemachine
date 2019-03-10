let datagen = require('./lib/datagen');
let server = require('./lib/server');

datagen();
server();

let clientCluster = require('./lib/client')();