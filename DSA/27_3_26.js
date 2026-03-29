// valid Paranthesis

const validOrNot = (str) => {
    if (str.length % 2 !== 0) return false;

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch === '(') stack.push(')');
        else if (ch === '{') stack.push('}');
        else if (ch === '[') stack.push(']');
        else {
            if (stack.length === 0 || stack.pop() !== ch) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(validOrNot('({})')); // true


const pratice = (str) => {
   
    let set = new Set();
    let i = 0, j = 0;
    let max = 0;
    while( j < str.length){
        if(!set.has(str[j])){
            set.add(str[j])
            max = Math.max(max, set.size);
            j++;
        }else{
            set.delete(str[i]);
            i++;
        }
    }
    return max
    
   
}

