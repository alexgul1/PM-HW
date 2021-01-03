const getIndexEntries = function (str, substr) {
  let arrOfIndices = [];
  let index = str.indexOf(substr);
  while (index !== -1) {
    arrOfIndices.push(index);
    index = str.indexOf(substr, index + 1);
  }
  return arrOfIndices;
}

const getAllNumbers = function (str) {
  return str.match(/\d+/g);
}

const getUpperCaseSymbols = function (str) {
  return str.match(/[A-Z]/g);
}