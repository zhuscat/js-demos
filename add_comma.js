function addComma(num) {
  let str = `${num}`;
  return str.replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
    return `${match},`;
  });
}