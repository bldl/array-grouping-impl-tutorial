//Hook for the Array.cpp file:

//JS_SELF_HOSTED_FN("test", "Test", 0, 0),


function Test() {
    if (this.length > 1){
        return this[this.length-1];
    }

    return "Empty list";
}
  