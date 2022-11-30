let array = ['test'];
Object.defineProperty(Object.prototype, 'test', {
  set(v) {
    throw new Error('Your implementation is suspectable to Monkey-Patching of the Object.prototype.set() property');
  }
});



Object.defineProperty(Array.prototype, '0', {
  set(v) {
    throw new Error('Your implementation is suspectable to Monkey-Patching of the Array.prototype.set() property');
  }
});

//Add more tests for get, and more possible properties. 

console.log(array.groupBy(key => key));

//Rewrite these