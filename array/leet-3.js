// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
// let lengthOfLongestSubstring = arr => {
//     let left = 0, ans = 0, curr = '';

//     for (let right = 0; right < arr.length; right++) {
//         // do logic here to add arr[right] to curr
//         curr += arr[right]
//         while (curr.indexOf(arr[right]) < curr.length-1 ) {
//             // remove arr[left] from curr
//             let i = 0;
//             while()
//             left++;
//         }

//         // update ans
//         ans = curr;
//     }

//     return ans;
// }

// var lengthOfLongestSubstring = function(s) {
//     let left = 0, right = 0, store={}, ans='';
    
//     for (let left = 0; left < s.length; left++) {
//         // do logic here to add arr[right] to curr
//         let currentSubstring = '';
//         let right = left;
//         let currentRightLetter = s[right];
//         while (!store[currentRightLetter]) {
//             // remove arr[left] from curr
//             store[currentRightLetter]=1
//             currentSubstring += currentRightLetter;
//             if(right < s.length-1) right++;
//             currentRightLetter = s[right];
//         }
//         store = {};
//         if(currentSubstring.length > ans.length) ans= currentSubstring
//         // update ans
//     }

//     return ans.length;
    
// };

var lengthOfLongestSubstring = function(s) {
    const dict = [];
    let maxLen = 0, start = -1;
    for (let i = 0; i != s.length; i++) {
        if (dict[s[i]] > start)
            start = dict[s[i]];
        dict[s[i]] = i;
        maxLen = Math.max(maxLen, i - start);
        console.log(s.substring(start, i), i, dict, s[i], {start, i});
    }
    return maxLen;
}
const ans = lengthOfLongestSubstring("abcabcbb");
console.log(ans);