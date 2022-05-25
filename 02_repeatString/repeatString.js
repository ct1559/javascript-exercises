const repeatString = function (str, num) {
  let repeatStr = "";

  if (num < 0) {
    repeatStr = "ERROR";
  } else {
    for (i = 0; i < num; i++) {
      repeatStr += str;
    }
  }

  return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
