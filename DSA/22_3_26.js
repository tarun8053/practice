// check String are anagram or not

const stringAnagramOrNot = (str, str2) => {
    if(str.length !== str2.length) return false;
    let map = {};

    for(let item of str){
        map[item] = (map[item] || 0) + 1;
    }
    
    for(let item of str2){
        if(map[item] === undefined) return false;

        map[item]--;
    }
    for(let item of str){
        if(map[item] !== 0) return false;
    }

    return true;

}

// Group Anagram
const groupAnagrams = (arr) => {
  
    let map = {};

   for (let item of arr) {
    let sorted = item.split('').sort().join('');
    if(map[sorted] === undefined){
        map[sorted] = [];
    }
    map[sorted].push(item)
}
return Object.values(map)

}

// Find All Anagrams
const findAllAnagrams = (str, k) => {

    let map = {};
    let result = [];
    const window = k.length;
    for(let item of k){
        map[item] = (map[item] || 0) + 1;
    }
    let i = 0, j = 0, count = Object.keys(map).length;
    while( j < str.length){
        if(map[str[j]] !== undefined) {
             map[str[j]]--
             if(map[str[j]] === 0) count--;
        }
        if(j-i+1 === window){
           if(count === 0){
            result.push(i);
           }

           if(map[str[i]] !== undefined){
             if(map[str[i]] === 0) count++;
             map[str[i]]++;
           }
           i++
           
        }

        j++
    }
    return result

}

// minimum step to make anagram

const minStep = (str, t) => {
    let map = {};
    for( let item of str){
        map[item] = (map[item] || 0) + 1;
    }
    let step = 0
    for(let item of t){
        if(map[item] > 0){
            map[item]--
        }else{
            step++
        }
    }
    return step;
}

// Anagram Palindrome Check
const anagramPalindromeCheck = (str) => {

    let map = {};
    for(let item of str){
        map[item] = (obj[item] || 0) + 1
    }
    let count  = 0;
    for(let item of str){
        if(map[item]%2 !== 0){
            count++;
        }
    }
    return count <= 1
}

// Longest Anagram Substring Between Two Strings
// Input:  s = "aabaabaa", p = "aaba" 
// Output: 4

const  longestAnagramSubstring = (str, p) => {
    let map = {};

    for(let item of p){
        map[item] = (map[item] || 0) + 1;
    }
    let count = Object.keys(map).length;

    let i = 0, j = 0, ans = 0;
    while(j < str.length){
        if(map[str[j]] !== undefined){
            map[str[j]]--;
            if(map[str[j]] === 0) count--;
        }

        if(j-i+1 === p.length){
            if(count === 0){
                return p.length
            }
            if(str[i] in map){
                if(map[str[i]] === 0) count++
                map[str[i]]++;
                
            }
            i++;
        }
        j++;
    }
    return 0
}

const minimumWindowSubstring = (str, t) => {
    let map = {};

    for (let ch of t) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let count = Object.keys(map).length;
    let i = 0, j = 0;
    let start = 0;
    let min = Infinity;

    while (j < str.length) {

        // expand window
        if (str[j] in map) {
            map[str[j]]--;
            if (map[str[j]] === 0) count--;
        }
        j++;

        // shrink window
        while (count === 0) {
            let len = j - i;

            if (len < min) {
                min = len;
                start = i;
            }

            if (str[i] in map) {
                if (map[str[i]] === 0) count++;
                map[str[i]]++;
            }
            i++;
        }
    }

    return min === Infinity ? "" : str.slice(start, start + min);
};

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"));





