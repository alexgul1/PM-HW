const numbersRange = function (n, m) {
  n = parseInt(n, 10);
  m = parseInt(m, 10);
  return m >= n ?
    Array.from({length : m - n + 1}, (_, index) => index + n) : "Введены некорректные данные";
}

const exponentiationExpression = function (a, b = 2) {
  let ans = Math.pow(+a, +b);
  return Number.isFinite(ans) ? ans : "Введены некорректные данные";
}

const exponentiationArrow = (a, b = 2) => {
  let ans = Math.pow(+a, +b);
  return Number.isFinite(ans) ? ans : "Введены некорректные данные";
}

const multiplication = function (a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return [Math.round(a * 0.3), Math.round(b * 0.3)];
}

const getRandomNumber = function (min, max) {
  min = parseFloat(min);
  max = parseFloat(max);
  return isFinite(min) && isFinite(max) && max >= min ?
    Math.floor(min + Math.random() * (max - min + 1)) : "Введены некорректные данные";
}

