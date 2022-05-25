const reverseString = function (str) {
  strArr = str.split("");
  reverseArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseArr.push(strArr[i]);
  }
  return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
