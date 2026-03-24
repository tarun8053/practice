// Range Sum Query
const rangeSumQuery = (nums, l, r) => {
    const prefix = [];
    prefix[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        prefix[i] = nums[i] + prefix[i-1]
    }
    if (l === 0) return prefix[r];
    return prefix[r] - prefix[l-1] 
}

// Range Sum Query 2D

const prefixsum = (mat, query) => {
    const prefix = [];
    

    // Step 1: Row-wise
    for (let i = 0; i < mat.length; i++) {
        let sum = [];
        for (let j = 0; j < mat[0].length; j++) {
            sum[j] = mat[i][j] + (j > 0 ? sum[j - 1] : 0);
        }
        prefix.push(sum);
    }

    // Step 2: Column-wise (FIXED)
    for (let j = 0; j < mat[0].length; j++) {
        for (let i = 1; i < mat.length; i++) {
            prefix[i][j] += prefix[i - 1][j];
        }
    }

    let [r1, c1, r2, c2] = query;
    let totalSum = prefix[r2][c2];
    let left = c1 > 0 ? prefix[r2][c1-1] : 0;
    let up = r1 > 0 ? prefix[r1-1][c2] : 0;
    let overlap = (r1 > 0 && c1 > 0) ? prefix[r1-1][c1-1] : 0

    return totalSum - left - up + overlap;
};

// Subarray Sum Equals K

const subarraySumEqualsK = (nums, k) => {
    let map = new Map();
    map.set(0,1);
    let count = 0, sum = 0
    for(let item of nums){
        sum += item;

        if(map.has(sum - k)){
            count += map.get(sum-k)
        }

        map.set(sum,(map.get(sum) || 0) +1 );
    }
    return count;
}

// logest Subarray Sum Equals k

const logestSubarraySumEqualsk = (nums, k) => {
    let map = new Map();
    let len = 0;
    let sum = 0;

    map.set(0, -1); // base case

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            let temlen = i - map.get(sum - k); // FIX
            len = Math.max(len, temlen);
        }

        // store first index only (NOT frequency)
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return len;
};

// Find Pivot Index



