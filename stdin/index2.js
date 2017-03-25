process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  process.stdout.write(data);
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});