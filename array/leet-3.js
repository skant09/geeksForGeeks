// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = arr => {
    let left = 0, ans = 0, curr = '';

    for (let right = 0; right < arr.length; right++) {
        // do logic here to add arr[right] to curr
        curr += arr[right]
        while (curr.indexOf(arr[right]) < curr.length-1 ) {
            // remove arr[left] from curr
            let i = 0;
            while()
            left++;
        }

        // update ans
        ans = curr;
    }

    return ans;
}

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

const ans = lengthOfLongestSubstring("abcabcbb");
console.log(ans);