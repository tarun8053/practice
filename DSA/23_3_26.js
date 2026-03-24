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

const subarraySum = (nums, k) => {
    let sum = 0;
    let count = 0;
    let map = new Map();

    map.set(0, 1); 

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};

console.log(subarraySum([3,4,7,2,-3,1,4,2],7))

// Longest Palindromic Substring
// Subarray Sum Equals K
// Permutation in String