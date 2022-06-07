const fibonacci = function (num) {
  let fibArr = [1, 1];

  if (num < 0) {
    return "OOPS";
  }

  for (let i = 2; i < num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
