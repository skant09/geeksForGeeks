/**
 * 1143. Longest Common Subsequence
 * 
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. 
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 * 
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 * 
 */


/**
 *  Solution
 * if char at text1[i] === text2[j], then increase the dp by 1
 * else it the max of dp, longest subsequence 
 * @param {*} text1 
 * @param {*} text2 
 * @returns 
 */


var longestCommonSubsequence = function(text1, text2) {
    const dp = [];
    for(let i=0;i<text1.length+1;i++){
        dp[i] = [];
        for(let j=0;j<text2.length+1;j++){
            dp[i][j]=0
        }
    }
    for(let i=0;i<text1.length;i++){
        for(let j=0;j<text2.length;j++){
            console.log({i,j}, text1.substring(0, i+1), text2.substring(0, j+1) ); // substring(first, last but not including)
            dp[i+1][j+1] = text1[i]===text2[j] ? dp[i][j]+1 : Math.max(dp[i][j+1], dp[i+1][j]);
            console.table(dp);
        }
    }
    return dp[text1.length][text2.length];  
};
const ans =longestCommonSubsequence('abcba', 'abcbcba');
console.log(ans)