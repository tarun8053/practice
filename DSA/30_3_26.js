
// Product of Array Except Self
const productofArrayExceptSelf = (arr) => {
    let n = arr.length;
    let ans = new Array(n).fill(1)
    
    let left = 1;
     for(let i = 0; i < arr.length;i++){
         ans[i] = left;
         left *= arr[i];
     }
      let right = 1;
      for(let i = n-1; i >= 0;i--){
         ans[i] *= right;
         right *= arr[i];
     }
   return ans;

}

//console.log(productofArrayExceptSelf([1,2,3,4]))


// 5. Longest Consecutive Sequence

const longestConsecutiveSequence = (arr) => {
   
    let set = new Set(arr);
    let max = 0;
    for(let nums of set){

        if(!set.has(nums-1)){
            let curr = nums;
            let count = 1;
            while(set.has(curr+1)){
                curr++;
                count++;
            }
            max = Math.max(max, count)
        }

    }
    return max
}

//console.log(longestConsecutiveSequence([9,1,4,7,3,-1,0,5,8,-1,6]))


const practice = (arr, k) => {
    let n = arr.length;
    revesre(0, n-k-1, arr);
    revesre(k+1, n-1, arr);
    revesre(0, n-1, arr);

    return arr;
   
}

const revesre = (i,j, arr) => {
    
    while(i < j){
        [arr[i],arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr;
}

console.log(practice([1,2,3,4,5,6,7],3))



// Count Substrings Containing All 3 Characters (a, b, c)
// 👉 (Jo tumne abhi kiya 👌)
// Minimum Size Subarray Sum
// Subarrays with Exactly K Distinct Integers
// Binary Subarrays with Sum
// Sliding Window Maximum (using deque)