// 3. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s: string): number {
    const map = new Map();
    let left=0,right=0;
    let maxLength = 0;
    while(left< s.length && right< s.length){
        if(!map.get(s[right])){
            map.set(s[right], 1)
            right++;
            maxLength = Math.max(maxLength, map.size);
        } else {
            map.clear();
            left++;
            right=left;
        }
        console.log(map, maxLength, left, right);    
    }  
    return maxLength;
};

const s = 'pwwkew';
const ans = lengthOfLongestSubstring(s);
console.log(ans);