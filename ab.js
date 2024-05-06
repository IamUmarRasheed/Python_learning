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
//     console.log(currentstr,'kkk')
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
// function cyclemisno(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     let center = arr[i]-1;
//     if (center > 0 && center <= arr.length && arr[i] !== arr[center]) {
//       swape(arr, i, center);
//     } else {
//       i++;
//     }
//   }
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] !== index + 1) {
//       return index + 1;
//     }
//   }
//   return arr.length + 1;
// }

// function swape(arr, first, second) {
//   let temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// } 

// let are = [1,2,3,5];
// console.log(cyclemisno(are));



// function findAllMissingNumbers(arr) {
//   let i = 0;
//   const missingNumbers = [];

//   while (i < arr.length) {
//     let current = arr[i] - 1;
//     if (current >= 0 && current < arr.length && arr[i] !== arr[current]) {
//       swape(arr, i, current);
//     } else {
//       i++;
//     }
//   }

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] !== index + 1) {
//       missingNumbers.push(index + 1);
//       // If you want to handle multiple missing numbers in a single swap, you can increment 'i' here
//       i++;
//     }
//   }

//   return missingNumbers;
// }

// function swape(arr, first, second) {
//   let temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// }

// let areu = [1, 2, 3, 5];
// console.log(findAllMissingNumbers(areu));



// function findMax(arr) {
//   if (arr.length === 0) {
//     // Handle the case when the array is empty
//     return undefined;
//   }

//   let max = arr[0]; // Assume the first element is the maximum

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       // Update max if the current element is greater
//       max = arr[i];
//     }
//   }

//   return max;
// }

// // Example usage:
// let myArray = [7, 3, 9, 5, 2, 8];
// let maxValue = findMax(myArray);
// console.log("Maximum value:", maxValue);



// function selectionsort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let last = arr.length - i - 1;
//     let maxIndex = getmax(arr, 0, last);
//     swap(arr, maxIndex, last);
//   }
// }

// function getmax(arr, start, last) {
//   let max = start;
//   for (let i = start; i <= last; i++) {
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }
//   return max;
// }

// function swap(arr, first, second) {
//   let temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// }

// let arr = [7, 3, 9, 5, 2, 8];
// selectionsort(arr);
// console.log(arr);




// function reverseWords(s) {
//       let newStrArray = s.split(/\s+/);
//       let newstr=''
//       console.log(newStrArray)
//     for (let i=newStrArray.length-1;i>=0;i--){
//         if (newStrArray[i]!=''){
//           newstr+=newStrArray[i]+ " "
//         }
//     }
//     return newstr
// };
// console.log(reverseWords("a good   example"));


// function productExceptSelf(nums){
//   const n = nums.length;

//   // Initialize resultArray with products to the left of each index
//   const resultArray= Array(n).fill(1);
//   console.log('myfillmethod ',resultArray)

//   let product = 1;

//   // Calculate products to the left
//   for (let i = 0; i < n; i++) {
//     resultArray[i] *= product;
//     product *= nums[i];
//     console.log(resultArray,'res')
//     console.log(product,'po');
//   }

//   product = 1;

//   // Calculate products to the right and update resultArray
//   for (let i = n - 1; i >= 0; i--) {
//     resultArray[i] *= product;
//     product *= nums[i];
//      console.log(resultArray, "res2");
//      console.log(product, "po2");
//   }

//   return resultArray;
// }

// // Example usage:
// const nums = [1,2,3,4];
// const result = productExceptSelf(nums);
// console.log(result);
