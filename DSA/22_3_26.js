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

console.log(minStep('bab','aba'))