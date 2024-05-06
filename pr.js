// function maxArea(height: number[]): number {
//   let l = 0;
//   let r = height.length - 1;
//   let max = 0;
//   while (l < r) {
//     let area = (r - l) * Math.min(height[l], height[r]);
//     max = Math.max(max, area);
//     if (height[l] < height[r]) {
//       l += 1;
//     } else {
//       r -= 1;
//     }
//   }

//   return max;
// }

// function lengthOfLongestSubstring(s) {
//   let chatset = new Set();
//   let l = 0;
//   let res = 0;
//   for (let r = 0; r < s.length; r++) {
//     while (chatset.has(s[r])) {
//       chatset.delete(s[l]);
//       l += 1;
//     }
//     chatset.add(s[r]);
//     res = Math.max(res, r - l + 1);
//   }
//   return res;
// }



// export function humanReadable(seconds: number): string {
//   const format = (sec: number) => (sec > 9 ? sec.toString() : `0${sec}`);

//   const h = Math.floor(seconds / 3600);
//   const m = Math.floor(seconds / 60) % 60;
//   const s = Math.floor(seconds) % 60;

//   return [h, m, s].map(format).join(":");
// }

// // Test the function
// console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3
