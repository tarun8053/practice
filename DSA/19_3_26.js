const reverseString = (strs) => {
    let str = strs.split("");
    let i = 0;
    let j = str.length-1;
    while(i < j){
        [str[i],str[j]] = [str[j], str[i]];
        i++;
        j--;
    }
    return str.join("");
}

const checkPalindrom = (str) => {
    let i = 0; 
    let j = str.length-1;

    while(i < j){
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
}

const removeDuplicate = (arr) =>{
    return [... new Set(arr)];
}

const firstNonReapeatingChar = (str) => {
    let map ={};

    for(let i = 0; i < str.length; i++){
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
    console.log(map)

    for(let key of str){
        if(map[key] === 1) return key;
    }
    return "no";
}

const logestSubStringWithoutRepetedChar = (str) =>{
    let set = new Set();
    let i = 0;
    let j = 0;
    let max = -Infinity;
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

const countCharcter = (str) => {
    let map = {};

    for(let i = 0; i < str.length; i++){
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
    return map;
}

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    let map = {};

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
};

const longestPalindromicSubstring = (str) =>{
    let result = ""
  for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub = str.slice(i, j + 1);

            if (checkPalindrom(sub) && sub.length > result.length) {
                result = sub;
            }
        }
    }
 return result

}

const stringComparision = (str) => {
    let map = {};
    for(let i = 0; i < str.length; i++){
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
    let result = "";
    for (let key in map) {
        result +=  key+""+map[key] 
    }
    return result
}
// 3. Group Anagrams
// 4. Minimum Window Substring (HARD 🔥)
// 5. Valid Parentheses
// 6. Check if string is rotation of another
// 7. Longest Common Prefix
// 8. Reverse Words in a String
// 9. Implement strStr() (substring search)
// 10. Character Replacement

console.log(stringComparision("aaabbc"));
