const Memory = require('./memory.js');

let memory = new Memory;

Array.SIZE_RATIO = 3;

class Array {
  constructor(){
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length)
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index)
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length--
  }
  _resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if(this.ptr === null){
      throw new Error('No Memory')
    }
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr);
    this._capacity = size;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    memory.set(this.ptr + index, value)
    this.length++;
  }
  push(value) {
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }
    memory.set(this.ptr + this.length, value)
    this.length++
  }
  pop(){
    const value = memory.get(this.ptr + this.length - 1)
    this.length--
    return value;
  }
}

module.exports = Array;
