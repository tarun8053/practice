
// Longest substring without repeating characters
const logestSubstring = (str) => {
    let i = 0, j = 0, max = 0
    let set = new Set();
    while(j < str.length){
        if(!set.has(str[j])){
            set.add(str[j]);
            let len = set.size;
            max = Math.max(max, len);
            j++;
        }else{
            set.delete(str[i]);
            i++;
        }
    }
    return max;
}


// Longest substring with at most K unique characters
const longestSubstringwithAtMostKUniquechar = (str, k) => {
    let i = 0, j = 0, map = new Map();
    let ans = 0;
    while(j < str.length){
       map.set(str[j],(map.get(str[j]) || 0) + 1 );
       while(map.size > k){
        map.set(str[i], (map.get(str[i])) - 1);
        if(map.get(str[i]) === 0){
            map.delete(str[i]);
        }
        i++;
       }
       ans = Math.max(ans, j-i+1)
       j++
    }
    return ans;
}

// Minimum size subarray sum (sum ≥ target)
const  minimumSizeSubarraySum = (arr , target) => {
     let i = 0, j = 0, sum = 0, min = Infinity;
     while(j < arr.length){

        sum += arr[j];
         while(sum > target){
            sum -= arr[i];
            i++;
        }
        if (sum === target) {
            let len = j - i + 1;
            max = Math.max(max, len);
        }
        j++;
     }
     return min
} 

// Longest subarray with sum ≤ K
const  logestSizeSubarraySum = (arr , target) => {
     let i = 0, j = 0, sum = 0, max = -Infinity;
     while(j < arr.length){

        sum += arr[j];
         while(sum >= target){
            let len = j - i + 1;
            max = Math.max(len, max)
            sum -= arr[i];
            i++;
        }
        j++;
     }
     return max
} 

// Minimum window substring 
const minimumWindowsubstring = (str, pat) => {
    let i = 0, j = 0, min = Infinity, st = -1;
    let map = new Map();
    for(let i = 0; i < pat.length; i++){
        map.set(pat[i], (map.get(pat[i]) || 0) + 1);
    }
    let count = map.size;
    while( j < str.length){
        if(map.has(str[j])){
            map.set(str[j], map.get(str[j])-1)
            if(map.get(str[j]) === 0) count--;
        }
        while(count === 0){
            let len = j - i + 1;
            if (len < min) {
                min = len;
                st = i;
            }
            if(map.has(str[i])){
                 map.set(str[i], map.get(str[i])+1)
            }
            if(map.get(str[i]) > 0) count++;
            i++
        }
        j++;
    }
    return str.slice(st,st+min)

} 


console.log(minimumWindowsubstring("ADOBECODEBANC","ABC"))
















// Longest substring with exactly K unique characters


// Fruit into baskets (at most 2 types)
// Maximum consecutive ones (flip at most K zeros)

// Substring with concatenation of all words
// Count number of nice subarrays (exactly K odd numbers)
// Binary subarrays with sum
// Longest repeating character replacement
// Permutation in string (check inclusion)
// Minimum window subsequence
// Number of substrings containing all 3 characters
// Longest subarray with equal 0s and 1s
// Subarrays with K different integers
// Maximum points you can obtain from cards
// Longest substring with at most 2 distinct characters
