const net = require('net');
const child_process = require('child_process');
const { fork } = child_process;
const cpus = require('os').cpus();

const server = net.createServer();
server.listen(3000);

const workers = {};

const createWorker = () => {
  const worker = fork(`${__dirname}/worker.js`);

  worker.on('message', message => {
    if (message.act === 'suicide') {
      createWorker();
    }
  });

  worker.on('exit', () => {
    console.log(`Worker ${worker.pid} exited.`);
    delete workers[worker.pid];
    createWorker();
  });
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log(`Created worker. pid: ${worker.pid}`);
}

for (let i = 0; i < cpus.length; i++) {
  createWorker();
}

process.on('exit', () => {
  for (const pid in workers) {
    workers[pid].kill();
  }
});
