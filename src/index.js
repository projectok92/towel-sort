
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let toSort = [];
  matrix.map((el, idx) => idx % 2 === 0 ? toSort.push(el.sort((a, b) => a - b)) : toSort.push(el.sort((a, b) => a - b).reverse()));
  let sorted = toSort.reduce((fin, el) => [...fin, ...el], []);
  return sorted;
}
