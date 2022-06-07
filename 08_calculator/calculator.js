const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
  }
  return tempSum;
};

const multiply = function (arr) {
  let tempProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    tempProduct *= arr[i];
  }
  return tempProduct;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let tempProduct = 1;
  for (let i = num; i > 0; i--) {
    tempProduct *= i;
  }
  if (num === 0) {
    return 1;
  } else {
    return tempProduct;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
