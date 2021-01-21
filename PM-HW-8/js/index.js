function multiplyBy(multiplier, ...arr) {
  return arr.map((val) => val * multiplier);
}

function flatWhite(arr) {
  return [].concat(...arr);
}

function extendWith(obj1, obj2) {
  return {...obj2, ...obj1};
}

function extendWithEndless(...arr) {
  return arr.reduce((accum, obj) => ({...accum, ...obj}), {});
}

module.exports = {
  multiplyBy,
  flatWhite,
  extendWith,
  extendWithEndless
}