const palindromes = function (str) {
  let strArr = str.split("");
  let newArr = [];
  let regex = /(^[a-z])|(^[A-Z])/;

  // Remove spaces and special characters
  for (let i = 0; i < strArr.length; i++) {
    if (regex.test(strArr[i])) {
      newArr.push(strArr[i].toLowerCase());
    }
  }

  let strForwards = newArr.join("");

  // Creat Backwards Arr
  let backwardsArr = [];
  for (let i = newArr.length; i >= 0; i--) {
    backwardsArr.push(newArr[i]);
  }

  let strBackwards = backwardsArr.join("");

  console.log(strForwards);
  console.log(strBackwards);

  return strForwards === strBackwards;
};

// Do not edit below this line
module.exports = palindromes;
