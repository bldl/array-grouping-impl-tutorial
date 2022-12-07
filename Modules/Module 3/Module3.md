# **3.0** Writing lines 1 - 5

In this module, the lines 1 - 5 in [_Array Grouping_](../../Specification/Specification_Array_Grouping.md) will be implemented. 

We will also discuss how to debug the implementation. 

# **3.1** Creating the function

The first step is to define the `groupBy` function and then hook it into the C++ `Array` class. The function signature should comply with the Ecma-262 specification.

```
Array.prototype.groupBy ( callbackfn [ , thisArg ] )
``` 

The second parameter `thisArg` in the signature represents the array on which `groupBy` was invoked. Since we use self-hosted code, this parameter is always available via `this` keyword, and therefore, should not be passed. 

By now, the implementation of `groupBy` in `Array.js` should look as follows.
```js
function ArrayGroupBy(callbackfn) {}
```
Note that the name of the function is `ArrayGroupBy` rather than `groupBy`: the convention in the SpiderMonkey engine dictates naming object methods by including the name of the encapsulating object in the name of the method (note also the PascalCase naming convention used here).

To make this function available on `Array`, it has to be hooked into the C++ definition in `Array.cpp`:

```js
JS_SELF_HOSTED_FN("groupBy", "ArrayGroupBy", 1,0),
```

The parameters for [`JS_SELF_HOSTED_FN`](https://searchfox.org/mozilla-central/rev/2fc2ccf960c2f7c419262ac7215715c5235948db/js/public/PropertySpec.h#438) are as follows: 

| argument | description |
| ---- | ----- |
| `name` | name of the function available to the developer |
| `selfHostedName` | function name defined in `Array.js` |
| `nargs` | number of parameters the function is meant to take |
| `flags` | flags | 

At this point, both `Array.groupBy` and `ArrayGroupBy` represent the same function. 

## **Task 3.1** Creating and testing the function

In order to test the function `Array.groupBy`, have it return the result of the `callbackfn`.

Insert this line into the `ArrayGroupBy` function:

```js
  let result = callContentFunction(callbackfn, undefined, 0, 1, ToObject(this));
  return result;
```
The exact meaning of this line will be explained in [Module 5](../Module%205/Module5.md); for now we do not focus on this. 

To test the function and to check whether or not it actually returns the result of the `callbackfn` passed as a parameter, run the script provided in [test_task_3_1.js](./Testfiles/test_task_3_1.js).

# **3.2** Implementing the first line

We now focus on [line 1](../../Specification/Specification_Array_Grouping.md#21-arrayprototypegroupby--callbackfn---thisarg), which is as follows:
```js
Let O be ? ToObject(this value).
```

In order to start implementing this line, we need to understand the semantics of the built-in Ecma-262 function `ToObject`. Built-in functions are defined in the specification in prose, and the question is whether or not there is already an implementation of such functions in the engine, and whether they are available to the developer in the current context.

The fastest way to check whether a built-in function is implemented and available is to try to find another Ecma-262 function which utilizes this built-in function.
The first place to look is usually inside the same object as the one we are working on. In our case, the object is `Array` defined in `Array.js`. There, we see the implementation of [`ArrayFilter`](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter), which implements the proposal _Array Filter_. The function `ArrayFilter` utilizes the built-in function `ToObject`: this means that we can look at the implementation of `ArrayFilter` (either by using [Searchfox](https://searchfox.org) or by simply finding it in `Array.js`), which contains the following code corresponding to line 1 in the specification:

```js
  /* Step 1. */
  var O = ToObject(this);
```

From this implementation, we see that the function `ToObject` is already implemented in the SpiderMonkey engine and is available to us. Therefore, we can utilize it in our own implementation of `ArrayGroupBy`. 

Now, our implementation of line 1 of the _Array Grouping_ proposal should look like this:
```js
  var O = ToObject(this);
```

Note that the proposal _Array Filter_ is very similar to the proposal _Array Grouping_. Indeed, the specifications of both proposals are quite similar: lines 1 - 5 in both cases are _exactly_ the same. We will use this fact later to implement lines 2 - 5 of the specification ([Task 3.4.1](#341-implementing-lines-2-5)).

# **3.3** Debugging code

As we are working inside SpiderMonkey, a lot of built-in functions and objects are not available to us. One such object is the `console` object. Therefore, we cannot use the regular "print to console" debugging method. 

The engine does not give very descriptive error messages, most of the time it just silently fails without producing output when one tries to run:
```sh
./mach run
```
In order to figure out where the error might be, it is useful to create a _test_ function. 

This test function can be used to run individual lines of the implementation. This will allow narrowing down the "pool" of lines that might produce undesired behavior. 

An example of the implementation of a test function is as follows:
```js
function Test(number) {
    return number%2;
}
```

As was explained in this module, in order to run your own functions, you should hook them using `JS_SELF_HOSTED_FN`.


## **Task 3.3.1** Implementing a test function

Add your own test function to the `Array` object. This function should return the last element of the array the function was called on. 
If the array contains no elements, the function should return `"Empty list"` instead. 

```js
["a", "b", "c"].test() // "c"
[].test() // "Empty list"
```

The test-file for this task can be found in [Testfiles](./Testfiles/test_task_3_3_1.js).

## **Task 3.3.2** Implementing lines 2-5

 Your task is to implement the first 5 lines of the _Array Grouping_ proposal specification. Remember to always look at previous implementations that utilize the same built-in Ecma-262 functions.  


## [<--](../Module%202/Module2.md) [-->](../Module%204/Module4.md)       