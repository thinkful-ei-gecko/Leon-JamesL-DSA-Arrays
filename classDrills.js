//#5 URLify a string
function urilfy(urlStr) {
  let newUrl = ''
  for(let i=0; i < urlStr.length; i++){
    if(urlStr[i] === ' ') {
      newUrl += '%20'
    }
    else {
      newUrl += urlStr[i]
    }
  }
  return newUrl
}
// console.log(urilfy("www.thinkful.com /tauh ida parv een"))
//O(n) --> cannot be optimized

//#6 Filtering
//remove all num < 5

function filter(arr) {
  let newArr = []
  for(let i=0; i < arr.length; i++) {
    if(arr[i] >= 5){
      newArr.push(arr[i])
    }
  }
  return newArr
}
// console.log(filter(arr))
//O(n) --> cannot be optimized

//#7 Max sum
function maxSum(arr) {
  let max = 0
  for(let i=0; i < arr.length; i++) {
    let total = 0
    for(let j=i; j < arr.length; j++)
    total += arr[j]
    if(total > max){
      max = total
    }
  }
  return max;
}

// console.log(maxSum(arr))
// O(n^2) --> cannot be optimized

//#8 Merge Arrays
function merge(arr1, arr2) {
  const newArr = arr1.concat(arr2).sort((a, b) => a - b)
  return newArr
}
// let arr1=[1,3,6,8,11]
// let arr2 = [2,3,5,8,9,10]
// console.log(merge(arr1, arr2))
//O(log(n))

//#9 Remove
function remove(str, vowels) {
  let newStr = ''
  let newVowels = []
  for(let j=0; j<vowels.length; j++){
    newVowels.push(vowels[j])
  }
  console.log(newVowels)
  for(let i=0; i<str.length; i++){
    if(!newVowels.includes(str[i])) {
      newStr += str[i]
    }
  }
  return newStr
}
// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
//O(n) --> cannot be opt

//#10 Products
function products(arr) {
  let results = []
  const multiply = arr.reduce((acc, curr) => acc * curr)
  for(let i=0; i<arr.length; i++){
    results.push(multiply / arr[i])
  }
  return results
}
// let arr = [1, 3, 9, 4]
// console.log(products(arr))
//O(n) --> cannot be optimized

//#11 2D Array
function twoDee(arr) {
  let newArr = arr.map(item => item.slice(0))
  for(let y=0; y<arr.length; y++) {
    for(let x=0; x<arr[y].length; x++){
      if(arr[y][x] === 0){
        for(let k=0; k<arr[y].length; k++) {
          newArr[y][k] = 0
        }
        for(let m=0; m<arr.length; m++) {
          newArr[m][x] = 0
        }
      }
    }
  }
  console.log(arr)
  return newArr
}

const arr = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(twoDee(arr))

//#12 String Rotation 
// function strRotate(str1, str2) {

// }


