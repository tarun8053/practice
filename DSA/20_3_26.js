const twoSum = (arr, target) => {
   let map = {};
   let result = [];
   for(let i = 0; i < arr.length; i++){
        let key = target - arr[i];
        if(map[key] !== undefined){
            result.push(map[key]);
            result.push(i);
            
            return result
        }
       

        map[arr[i]] = i;
   }
   return result;
}
const moveZero = (arr) => {
    const result = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i]);
        }else{
            count++;
        }
    }

    for(let i = 0; i < count; i++){
        result.push(0);
    }
    return result;
}

const productofArrayExceptSelf = (arr) => {
    let product = 1;
    const result = [];
    for(let i of arr){
        if(i !== 0) product *= i;
        
    }
    for(let i of arr){
        result.push(product/i)
    }
   return result
}

const findMissingNumber = (arr) => {
    let n = arr.length;
    
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
};

const stringAnagramOrNot = (str1, str2) => {
    if(str1.length !== str2.length) return false
    let map = {}
    for(let i of str1){
        map[i] = (map[i] || 0) + 1
    }
    for(let i of str2){
        if(map[i] === undefined) return false;
        map[i]--;
    }

    for(let i of str1){
       if(map[i] !== 0) return false
    }

    return true
}
console.log(stringAnagramOrNot("hello","lllohe"))





