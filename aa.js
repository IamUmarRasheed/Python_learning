// function twoSum(numbers: number[], target: number): number[] {
//   let neware = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         // neware.push(i)
//         // neware.push(j)
//         console.log("thsi isiisi");
//         return [i + 1, j + 1];
//       }
//     }
//   }
//   // return neware
// }
// let numbers = [2, 7, 11, 15];
// console.log(twoSum(numbers, 9));

// function twoSum(numbers: number[], target: number): number[] {
//   let L = 0;
//   let R = numbers.length - 1;

//   while (numbers[L] + numbers[R] !== target) {
//     if (numbers[L] + numbers[R] > target) {
//       R = R - 1;
//     } else if (numbers[L] + numbers[R] < target) {
//       L = L + 1;
//     }
//   }

//   return [L + 1, R + 1];
// }

const check_duplicate_in_array = (input_array) => {
  const duplicates = input_array.filter(
    (item, index) => input_array.indexOf(item) !== index
  );
  console.log(duplicates)
  return Array.from(new Set(duplicates));
};
const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));
