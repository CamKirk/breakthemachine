const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

function main() {
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs * 2; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {

    http.get('http://localhost:4000', (res) => {
      res.on('data', (chunk) => {
        console.log(chunk.toString())
      })
    })

    console.log(`Worker ${process.pid} started`);
  }
}

module.exports = main;