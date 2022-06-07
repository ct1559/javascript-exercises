const findTheOldest = function (arr) {
  let currentOldestIndex = 0;
  let currentOldestAge = 0;
  let date = new Date();
  date = date.getFullYear();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["yearOfDeath"] === undefined) {
      if (date - arr[i]["yearOfBirth"] > currentOldestAge) {
        currentOldestIndex = i;
        currentOldestAge = date - arr[i]["yearOfBirth"];
      }
    } else {
      if (arr[i]["yearOfDeath"] - arr[i]["yearOfBirth"] > currentOldestAge) {
        currentOldestIndex = i;
        currentOldestAge = arr[i]["yearOfDeath"] - arr[i]["yearOfBirth"];
      }
    }
  }

  return arr[currentOldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
