function longestUniqueSubstring(s){
   let set = new Set();
   let left = 0;
   let max = 0;

   for(let i = 0; i < s.length; i++){

    while(set.has(s[i])){
        set.delete(s[i]);
        left++;
    }
    set.add(s[i]);
    max = Math.max(max , i - left + 1)

   }

   return max
}

console.log(longestUniqueSubstring("abcabcabb")); 