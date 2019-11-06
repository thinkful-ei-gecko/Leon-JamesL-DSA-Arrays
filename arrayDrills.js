const Array = require('./arrayClass');

let array = new Array;

// console.log('empty');
// console.log(array);

// console.log('insert');
// array.insert(0, 4);
// console.log(array);

// console.log('get');
// console.log(array.get(0));

// console.log('remove');
// console.log(array.remove(0));
// console.log(array);

// console.log('resize');
// array.insert(0,6);
// array.insert(1,7);
// array.insert(2,8);
// console.log(array);
// console.log(array.get(0));
// console.log(array.get(1));
// console.log(array.get(2));

// console.log('push');
// array.push(12);
// array.push(13);
// array.push(14);
// console.log(array);

// console.log('pop');
// console.log(array.pop());
// console.log(array);



function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
}