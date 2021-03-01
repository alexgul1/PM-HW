const ARRAY = require('./defaultArr');

const findFirstLastIndex = (array, value) => {
  return [array.indexOf(value), array.lastIndexOf(value)];
};

const findIntersectionArrays = (arr1, arr2) => {
  let tempArr = [...arr2];
  return arr1.filter(x => {
    const i = tempArr.indexOf(x);
    if(i !== -1) {
      tempArr.splice(i, 1);
      return true;
    }
    return false;
  });
};

const insertArrayByIndex = (arr1, arr2, index) => {
  return [
    ...arr1.slice(0, index),
    ...arr2,
    ...arr1.slice(index)
  ];
};

const sortByIndex = (arr) => {
  return arr.sort((a, b) => b.id - a.id);
};

const sortByRegistrationDate = (arr) => {
  return arr.sort((a, b) =>  new Date(b.registrationDate) - new Date(a.registrationDate));
};

console.log("Find first and last indices of value:");
console.log(findFirstLastIndex([5,7,7,8,8,10], 6));
console.log(findFirstLastIndex([5,7,7,8,8,10], 8));
console.log(findFirstLastIndex([5,7,7,8,8,10], 10));

console.log("\nFind intersection of arrays:");
let arr1 = [1,2,2,1];
let arr2 = [3,2,5,2,2];
console.log(findIntersectionArrays(arr1, arr2));
console.log("First array:", arr1);
console.log("Second array:", arr2);

console.log("\nInsert array by index:");
let arr3 = [1,2,3,4,5];
let arr4 = [6,7,8];
console.log(insertArrayByIndex(arr3,arr4,1));
console.log("First array:", arr3);
console.log("Second array", arr4);

console.log("\nSort array by index:");
console.log(sortByIndex(ARRAY));

console.log("\nSort array by registration date");
console.log(sortByRegistrationDate(ARRAY));