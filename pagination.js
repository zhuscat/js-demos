const getPages = (curr, total) => {
  if (total <= 10) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  let roundPages = [];
  if (curr === 1) {
    roundPages = [2, 3, -1];
  } else if (curr === 2) {
    roundPages = [2, 3, 4, -1];
  } else if (curr === 3) {
    roundPages = [2, 3, 4, 5, -1];
  } else if (curr === total -2) {
    roundPages = [-1, curr - 2, curr -1, curr, curr + 1];
  } else if (curr === total - 1) {
    roundPages = [-1, curr - 2, curr - 1, curr];
  } else if (curr === total) {
    roundPages = [-1, curr -2, curr - 1];
  } else {
    roundPages = [-1, curr - 2, curr - 1, curr, curr + 1, curr + 2, -1];
  }
  roundPages.unshift(1);
  roundPages.push(total);
  return roundPages;
}