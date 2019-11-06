const Memory = require('./memory.js');

let memory = new Memory();

class Array {
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length)
  }
  get(index) {
    return memory.get(this.ptr + index)
  }
  remove(index) {
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length--
  }
  _resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr)
  }
  insert(index, value) {
    this._resize(this.length + 1)
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    memory.set(this.ptr + index, value)
    this.length++
  }
  push(value) {
    this._resize(this.length + 1)
    memory.set(this.length, value)
    this.length++
  }
  pop(){
    const value = memory.get(this.length - 1)
    this.length--
    return value;
  }
}

module.exports = Array;

//5, 10, 15, 20  -> 5,10,15,20,-   ->  5,10,10,15,20  -> 5,3,10,15,20
//0   1   2   3   i
//3   4   5   6   block
//1   2   3   4   length