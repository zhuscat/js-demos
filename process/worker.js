const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`handled by child, pid is ${process.pid}\n`);
});

let worker;

process.on('message', (m, tcp) => {
  if (m === 'server') {
    worker = tcp;
    worker.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});

process.on('uncaughtException', () => {
  process.send({ atc: 'suicide' });

  worker.close(() => {
    process.exit(1);
  });

  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
