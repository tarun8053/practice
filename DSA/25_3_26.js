// kadane's Algorithm
const maximumSubarraySum = (arr) => {

   let max = -Infinity , sum = 0;
   for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        max = Math.max(sum,max);
        if(sum  < 0) sum = 0
   }
    return max;
}


// Stock Buys and shell

const stockBuysandShell = (arr) => {
    let min = Infinity;
    let max = 0;
    for(let i = 0; i < arr.length;i++){
        min = Math.min(min,arr[i]);
        max = Math.max((arr[i] - min), max)
    }
    return max
}
// Maximum sum subarray of size K
const maximumSumSubarrayofSizeK = (arr, k) => {
    let i = 0, j = 0;
    let sum = 0;
    let max = 0;
    while( j < arr.length){
        sum += arr[j];
        if(j-i+1 === k){
            max = Math.max(sum,max)
            sum -= arr[i];
            i++; 
        }
        j++;
    }
    return max
}
// First negative integer in every window of size K
const firstnegativeEverywindowSizeK = (arr, k) => {
    let queue = []
    let i = 0, j = 0;
    let result = []
    while( j < arr.length){
        
        if(arr[j] < 0){
            queue.push(arr[j])
        }
        

        if(j-i+1 === k){
            if(queue.length > 0){
                result.push(queue[0])
            }else{
                result.push(0);
            }
            if(arr[i] < 0){
                queue.shift();
            }
            i++;
        }
        j++;
    }
    return result;
}

// Count Occurrences of Anagrams
const CountOccurrencesofAnagrams = (str, pat) => {
    let obj = {};
    let k = pat.length;
    for(let item of pat){
        obj[item] = (obj[item] || 0) + 1;
    }
    let helper = ""
    let i = 0, j = 0;
    let ans = 0;
    let count = Object.keys(obj).length;
    while( j < str.length){
        helper += str[j];

        if(obj[str[j]] !== undefined){
            obj[str[j]]--;
            if(obj[str[j]] === 0) count--;
        }

        if(j-i+1 === k){
            if(count === 0) ans++;
            if(obj[str[i]] !== undefined){
                obj[str[i]]++;
                if (obj[str[i]] === 1) count++;
            }
            i++;
        }
        j++
    }
    return ans;
}

// Sliding window maximum
const slidingWindowMaximum = (arr, k) => {
    let i = 0, j = 0, max = -Infinity;
    let result = [];
    while(j < arr.length){
        max = Math.max(arr[j], max);
        if(j-i+1 === k){
            result.push(max);
            if(arr[i] === max){
                max = -Infinity;
                for (let x = i + 1; x <= j; x++) {
                    max = Math.max(max, arr[x]);
                }
            }
            i++;
        }
        j++;
    }
    return result;
}

// Average of all subarrays of size K

const averageAllSubarraysofSizeK = (arr, k) => {
    let i = 0, j = 0, sum = 0, result = [];
    while(j < arr.length){
        sum += arr[j];
        if(j-i+1 === k){
            result.push(Number((sum/k).toFixed(1)));
            sum -= arr[i];
            i++;
        }
        j++;
    }
    return result;
}

// Maximum number of vowels in substring of size K
const maximumNumbervowelsinSubstringsizeK = (str, k) => {
    let i = 0, j = 0, count = 0, max = 0;
    let vowels = new Set(['a','e','i','o','u']);

    while (j < str.length) {

        if (vowels.has(str[j])) {
            count++;
        }

        if (j - i + 1 === k) {
            max = Math.max(max, count);

            if (vowels.has(str[i])) {
                count--;
            }

            i++;
        }

        j++;
    }

    return max;
};
console.log(maximumNumbervowelsinSubstringsizeK("tryhard",4))
// kal k lie 
// Longest substring without repeating characters
// Longest substring with at most K unique characters
// Longest substring with exactly K unique characters
// Minimum size subarray sum (sum ≥ target)
// Longest subarray with sum ≤ K
// Fruit into baskets (at most 2 types)
// Maximum consecutive ones (flip at most K zeros)
// Minimum window substring 🔥
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
