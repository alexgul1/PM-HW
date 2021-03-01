document.getElementById('rangeButton').onclick = () => {
  const n = document.getElementById('rangeN').value.trim();
  const m = document.getElementById('rangeM').value.trim();
  const answer = numbersRange(n, m);
  alert(answer);
  console.log(answer);
}

document.getElementById('expExpressionButton').onclick = () => {
  const a = document.getElementById('expA').value.trim();
  const b = document.getElementById('expB').value.trim();
  let answer;
  if (b === '') {
    answer = exponentiationExpression(a);
  } else {
    answer = exponentiationExpression(a, b);
  }
  alert(answer);
  console.log(answer);
}

document.getElementById('expArrowButton').onclick = () => {
  const a = document.getElementById('expA').value.trim();
  const b = document.getElementById('expB').value.trim();
  let answer;
  if (b === '') {
    answer = exponentiationArrow(a);
  } else {
    answer = exponentiationArrow(a, b);
  }
  alert(answer);
  console.log(answer);
}

document.getElementById('multiButton').onclick = () => {
  const a = document.getElementById('multiA').value.trim();
  const b = document.getElementById('multiB').value.trim();
  const answer = multiplication(a, b);
  alert(answer);
  console.log(answer);
}

document.getElementById('randNumberButton').onclick = () => {
  const min = document.getElementById('randMin').value.trim();
  const max = document.getElementById('randMax').value.trim();
  const answer = getRandomNumber(min, max);
  alert(answer);
  console.log(answer);
}

document.getElementById('getIndexButton').onclick = () => {
  const str = document.getElementById('str').value;
  const substr = document.getElementById('substr').value;
  const answer = getIndexEntries(str,substr);
  alert(answer);
  console.log(answer);
}

document.getElementById('getNumbersButton').onclick = () => {
  const str = document.getElementById('readonlyStr').value;
  const answer = getAllNumbers(str);
  alert(answer);
  console.log(answer);
}

document.getElementById('getUpperCaseButton').onclick = () => {
  const str = document.getElementById('readonlyStr').value;
  const answer = getUpperCaseSymbols(str);
  alert(answer);
  console.log(answer);
}