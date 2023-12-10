// // var bicycles = ["trek", "cannondale", "redline", "specialized"];
// // console.log(bicycles[bicycles.length-1])
// // let myname={
// //     "myname":'umar',
// //     myfname:'rasheed'
// // }
// // console.log(myname.myname)







// function mostFrequent(arr, n) {
//   let maxcount = 0;
//   console.log('max',maxcount)
//   let element_having_max_freq;
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     console.log('count',count)
//     for (let j = 0; j < n; j++) {
//       if (arr[i] == arr[j]) count++;
//     }

//     if (count > maxcount) {
//         console.log('c',count)
//       maxcount = count;
//       console.log([i])
//       element_having_max_freq = arr[i];
//       console.log(element_having_max_freq)
//     }
//   }

//   return element_having_max_freq;
// }

// // Driver Code

// let arr = [40, 50, 30, 40, 50, 30, 30];
// let n = arr.length;
// console.log(mostFrequent(arr, n));
// function mergeAlternately(word1, word2) {
//     let newstr=''
//     for (let i=0;i<word1.length;i++){
//         newstr+=word1[i]
//          newstr+=word2[i]

//     }
//     return newstr

// };
// console.log(mergeAlternately('abcd','mno'))






// function mergeAlternately(word1, word2) {
//   let newstr = "";
//   for (let i = 0; i <word1.length; i++) {
//     newstr += word1[i];
//     newstr += word2[i];
//   }
//   if (word1 > word2) {
    
//     newstr= newstr + word1.slice(word1.length - word2.length);
//   }
//    if (word2 > word1) {
//      newstr = newstr + word2.slice(word2.length - word1.length);
//    }
//   return newstr;
// }

// console.log(mergeAlternately("ab", "mnop"));




// Utility function to check for vowel
function isVowel(c) {
    return (c == 'a' || c == 'A' || c == 'e'
            || c == 'E' || c == 'i' || c == 'I'
            || c == 'o' || c == 'O' || c == 'u'
            || c == 'U');
}

// Function to reverse order of vowels
function reverseVowel(str) {
    // Start two indexes from two corners and move toward each other
    let i = 0;
    let j = str.length - 1;
    let str1 = str.split("");

    while (i < j) {
        if (!isVowel(str1[i])) {
            i++;
              console.log("yyy");
            continue;
        }
        if (!isVowel(str1[j])) {
            j--;
            console.log('hhh')
            continue;
        }

        // swapping
        let t = str1[i];
        str1[i] = str1[j];
        str1[j] = t;

        i++;
        j--;
    }

    let str2 = str1.join("");
    return str2;
}

// Driver function
let str = "hello world";
console.log(reverseVowel(str));
