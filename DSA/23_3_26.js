// Longest Substring with Exactly K Unique Characters
const longestSubstringwithExactlyKUniqueCharacters = (str, k) => {

    let map = {}
    let i = 0, j = 0, st = null;
    let max = -1;
    while( j < str.length){
      map[str[j]] = (map[str[j]] || 0) + 1;
      while(Object.keys(map).length > k){
        map[str[i]]--;
        if(map[str[i]] === 0){
            delete map[str[i]];
        }
        i++;
      }

      if(Object.keys(map).length === k){
        max = Math.max(max, j-i+1);
      }
      j++;
    
    }
    return  max
}

// Count Distinct Elements in Every Window (size k)
const DistinctElementsinEveryWindow = (arr, k) => {
    let map = {};
    const result = [];
    let i = 0, j = 0;

    while( j < arr.length){
        map[arr[j]] = (map[arr[j]] || 0) + 1;

        if(j-i+1 === k){
            let len = Object.keys(map).length;
            result.push(len);
            map[arr[i]]--;
            if(map[arr[i]] === 0){
                delete map[arr[i]];
            }
            i++;
        }
        j++;
       
    }
    return result
}

const subarraySumEqualsK = (arr, k) => {
   
}

// Longest Palindromic Substring
// Subarray Sum Equals K
// Permutation in String