const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    num1 < 0 ||
    typeof num2 !== "number" ||
    num2 < 0
  ) {
    return "ERROR";
  } else {
    let total = 0;
    let max;
    let min;
    if (num1 > num2) {
      max = num1;
      min = num2;
    } else {
      max = num2;
      min = num1;
    }

    for (let i = min; i <= max; i++) {
      total += i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
