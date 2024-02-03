// 1092_Shortest_Common_Supersequence.js

/**
 * Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.
 * 
 * A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.
 */



function shortestCommonSupersequence(str1: string, str2: string): void {
    const dp = [...Array(str1.length + 1).fill(0)].map(v => v = [...Array(str2.length + 1).fill(0)])
    let stringSolution: string = '';
    for (let i = 0; i < str1.length; i++) {
        if (stringSolution.slice(-1) !== str1[i]) {
            stringSolution += str1[i]
        }
        for (let j = 0; j < str2.length; j++) {
            // console.log({i,j}, str1.substring(0, i+1), str2.substring(0, j+1) ); // substring(first, last but not including)
            if (str1[i] !== str2[j]) {
                stringSolution += str2[j]
                dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]) + 1;
            } else {
                dp[i + 1][j + 1] = dp[i][j];
            }
            console.table(dp);
            console.log(stringSolution);
        }
    }
    return dp[str1.length][str2.length];
};
shortestCommonSupersequence('ad', 'abc')
// console.log(ans);
