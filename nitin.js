function replaceWithRank(arr) {
  let sorted = arr.sort((a, b) => a - b); // sorting
  let rankMap = {}; // obj
  let rank = 1; // 3
// 1, 2, 2, 2, 3, 4, 4, 5, 6

  for (let i = 0; i < sorted.length; i++) {
    if (!(sorted[i] in rankMap)) {
      rankMap[sorted[i]] = rank; // 3 : 3
      rank++; 
    }
  }

  console.log(rankMap) // { 
//   '1': 1, 
//   '2': 2, 
//   '3': 3, 
//   '4': 4, 
//   '5': 5, 
//   '6': 6 
// }

  let result = [1,4,2,6,2,5,4,3,2];
  for (let i = 0; i < arr.length; i++) {
    result.push(rankMap[arr[i]]);
  }

  return result;
}
console.log(replaceWithRank([1,4,2,6,2,5,4,3,2]))