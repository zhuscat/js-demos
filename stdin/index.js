process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (typeof chunk === 'string') {
    if (process.platform === 'win32') {
      chunk = chunk.slice(0, -2);
    } else {
      chunk = chunk.slice(0, -1);
    }
    process.stdout.write(`stringLength:${chunk.length}\n`);
  }
  if (chunk === '') {
    process.stdin.emit('end');
    return
  }
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end\n');
});