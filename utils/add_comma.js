/**
 * 传入一个数字，把这个数字改为用千分位分隔的字符串
 * 
 * @param {number} num 
 */
function addComma(num) {
  let str = `${num}`;
  return str.replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
    return `${match},`;
  });
}