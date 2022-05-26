const removeFromArray = function (...theArgs) {
  let newArr = [];
  let addToNewArr = true;
  for (const item of theArgs[0]) {
    for (let i = 1; i < theArgs.length; i++) {
      if (item !== theArgs[i]) {
        continue;
      } else {
        addToNewArr = false;
        break;
      }
    }
    if (addToNewArr) {
      newArr.push(item);
    }
    addToNewArr = true;
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
