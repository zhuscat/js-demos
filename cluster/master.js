const cluster = require('cluster');
const ncpus = require('os').cpus();

cluster.setupMaster({
  exec: './worker.js',
});

for (let i = 0; i < ncpus.length; i++) {
  cluster.fork();
}
