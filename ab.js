// function binary(arr, target) {
//   let s = 0;
//   let e = arr.length - 1;

//   while (s <= e) {
//     let mid = Math.floor(s + (e - s) / 2);

//     if (target < arr[mid]) {
//       e = mid - 1;
//     } else if (target > arr[mid]) {
//       s = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   return -1;
// }

// let ary = [1, 2, 4, 6, 7, 8];
// console.log(binary(ary, 5));

// function binary(arr, target) {
//   let s = 0;
//   let e = arr.length - 1;
//   let isSort = false;

//   if (s <= e) {
//     isSort = true;
//   }

//   while (s <= e) {
//     let mid = Math.floor(s + (e - s) / 2);

//     if (isSort) {
//       if (target < arr[mid]) {
//         e = mid - 1;
//       } else if (target > arr[mid]) {
//         s = mid + 1;
//       } else {
//         return mid;
//       }
//     } else {
//       if (target > arr[mid]) {
//         s = mid + 1;
//       } else if (target < arr[mid]) {
//         e = mid - 1;
//       } else {
//         return mid;
//       }
//     }
//   }

//   return -1;
// }

// let ary = [1, 2, 4, 6, 7, 8];
// console.log(binary(ary, 7));
///bubble sort  
// function bubble(arry){
//     for (let i=0 ;i<arry.length;i++){
//         let swape=false
//         for(let j=0;j<arry.length-1;j++){
//             if(arry[j]<arr[j-1]){
//                 let temp=arry[j]
//                 arry[j]=arry[j-1]
//                 arry[j-1]=temp
//                 swape=true
//             }

//         }
//         if(!swape){
//             break
//         }
//     }

// }
// let arr=[6,4,9,2,1,8]
// console.log(bubble(arr))
// console.log(arr)

// function bubble(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
// }

// let arr = [6, 4, 9, 2, 1, 8];
// bubble(arr);
// console.log(arr);

// function sortint(num){
//     //1st convert the int into array of numbers 
//     //2nd sort the array using buble sort 
//     //3nd convet the array into int using for loop
//     let numare=[]
//     let sornum=0
//     while(num>0){
//         let digit=num%10
//         numare.push(digit)
//         num=Math.floor(num/10)
//     }
//      for (let i = 0; i < numare.length; i++) {
//        let swapped = false;
//        for (let j = 0; j < numare.length - 1; j++) {
//          if (numare[j] > numare[j + 1]) {
//            let temp = numare[j];
//            numare[j] = numare[j + 1];
//            numare[j + 1] = temp;
//            swapped = true;
//          }
//        }
//        if (!swapped) {
//          break;
//        }
//      }
//      for (let i=0;i<numare.length-1;i++){
//         sornum=sornum*10+numare[i]
//      }

//      return sornum

// }
// let sorso=sortint(78642878)
// console.log(sorso)

// function findDivisors(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findDivisors(12));
// function longstr(arr, n) {
//   if (n < 0 || n > arr.length) {
//     return "";
//   }
//   let longstring = "";
//   for (let i = 0; i < arr.length; i++) {
//     const currentstr = arr.slice(i, i + n).join(" ");
//     if (currentstr.length > longstring.length) {
//       longstring = currentstr;
//     }
//   }
//   return longstring;
// }

// let arrstr = ["thiiisis", "thsi", "svdjvsjfdsvf", "sdhdvd"];
// console.log(longstr(arrstr, 3));

// function evenodd(str) {
//   let center = 0;
//   let string = "";

//   if (str.length === 0) {
//     return "";
//   }

//   if (str.length % 2 === 0) {
//     center = str.length / 2;
//     string += str[center - 1] + str[center];
//   } else {
//     center = Math.floor((str.length + 1) / 2);
//     string += str[center - 1];
//   }

//   return string;
// }

// console.log(evenodd("thisi"));

// function cyclesort(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     // if element not at correct index swape
//     let correct = arr[i] - 1;
//     if (arr[i] !== arr[correct]) {
//       swape(arr, i, correct);
//     } else {
//       i++;
//     }
//   }
// }

// function swape(arr, first, second) {
//   let temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// }

// // Initialize the array without empty slots
// let sort = [3, 4, 6, 8, 1, 10, 2];

// // Call cyclesort function
// cyclesort(sort);

// // Filter out undefined values (if any)
// sort = sort.filter((element) => typeof element !== "undefined");

// console.log(sort);
///for first misiing integer
function cyclemisno(arr) {
  let i = 0;
  while (i < arr.length) {
    let current = arr[i];
    if (current > 0 && current <= arr.length && arr[i] !== arr[current - 1]) {
      swape(arr, i, current - 1);
    } else {
      i++;
    }
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== index + 1) {
      return index + 1;
    }
  }
  return arr.length + 1;
}

function swape(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

let are = [1, 2, 5];
console.log(cyclemisno(are));



/// for missing all number 
function findAllMissingNumbers(arr) {
  let i = 0;
  const missingNumbers = [];

  while (i < arr.length) {
    let current = arr[i];
    if (current > 0 && current <= arr.length && arr[i] !== arr[current - 1]) {
      swape(arr, i, current - 1);
    } else {
      i++;
    }
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== index + 1) {
      missingNumbers.push(index + 1);
    }
  }

  return missingNumbers;
}

function swape(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

let areu = [1, 2, 5];
console.log(findAllMissingNumbers(areu));
