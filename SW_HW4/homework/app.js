// function reverseNumber(num) {
//     let reverse = 0;
//     let decimal = 10;
//     while (num !== 0) {
//         let lastNumber = num % decimal;
//         num = (num - lastNumber) / decimal;
//         reverse = reverse * decimal + lastNumber;
//     }
//     return reverse;
//  }


// function forEach(arr, func) {
//     for (const item of arr) {
//         func(item);
//     }
//  }

// function map(arr, func) {
//     let processedArray = [];
//     forEach(arr, function (el) { processedArray.push(func(el)); } );
//     return processedArray;
//  }


// function filter(arr, func) {
//     let processedArray = [];
//     forEach(arr, function (el) { if (func(el)) { processedArray.push(el); } });
//     return processedArray;
// }
 
// function getAdultAppleLovers(data) {
//     let result;
//     result = filter(data, function (el) { return el["age"] > 18 && el["favoriteFruit"] === "apple" };);
//     return map(result, function (el) { return el["name"]; });
// }
 

// function getKeys(obj) {
//   let processedArray = [];
//   for (const key in obj) {
//     processedArray.push(key);
//   }
//   return processedArray;
// }

// console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3})) // returns [“keyOne”, “keyTwo”, “keyThree”]

function getValues(obj) {
  let processedArray = [];
  for (const key in obj) {
    processedArray.push(obj[key]);
  }
  return processedArray;
}

console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 })); // returns [1, 2, 3]


