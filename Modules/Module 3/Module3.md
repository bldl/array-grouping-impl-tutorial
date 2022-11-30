# **3.0** Writing lines 1 - 5

In this module, the lines 1 - 5 in the specification of _Array Grouping_ will be implemented. 

It will also be discussing a good way to debug the implementation. 

# **3.1** Creating the function

Before the implementation can even start, the hooks into C++ is needed. In [Module 1](/Modules/Module%201/Module1.md), task 2.3 a new function was added. Now the same is needed. We have to create a function which takes the same parameters as in the specification. This can be done by adding the line:

```js
JS_SELF_HOSTED_FN("groupBy", "ArrayGroupBy", 1,0),
```

The parameters for `JS_SELF_HOSTED_FN` are as follows, 
1. Name of the function avalible to the developer
2. Function name defined in Array.js
3. Number of parameters the function is meant to take

Now the function can be created in `Array.js`. Defined in the specification are the parameters the function is meant to take. This can be seen in the title of the specification:

```
Array.prototype.groupBy ( callbackfn [ , thisArg ] )
```

The title defines we need one parameter, namely the parameter callbackfn. This will be the function used to map the elements of the array to their respective keys. 

The function also takes the thisArg as a parameter, however since we are using self-hosted code. This parameter is always available to us, therefore we need not pass it to the function. 

## **Task 3.1** Creating and testing the function

Create the groupBy function, which takes some `callbackfn` as a parameter. Now in order to test this function, let's return the result of the `callbackfn`. 

Insert this line into the `groupBy` function you just created, no need to understand this yet as this is part of a future module. 

```js
  let result = callContentFunction(callbackfn, undefined, 0, 1, ToObject(this));
  return result;
```

To test the function and to check whether or not it actually returns the result of the `callbackfn` passed as a parameter, run the script provided in [Resources](/Modules/Module%203/Testfiles/) named test_task_3_1.js

# **3.2** Implementing the first line

In order to start we have to figure out how to perform the built in EcmaScript function `ToObject`. The fastest way of figuring this out is looking up another function in the specification that utilizes this function, this is done in order to view how they got that same functionality. 

The first place to look is usually inside the same object as the one we are working on. In this case that is `Array.js`

Taking a look at the official specification, a very similar proposal to _Array Grouping_ is the _Array Filter_ proposal. Taking a look at the specification, se exact same line can be seen. 

The line in question:
```js
Let O be ? ToObject(this value).
```
Now that we have found a usage of the `ToOject` function, we can take a look at it's implementation using either [Searchfox](https://searchfox.org), or we can simply find it in `mozilla_unified`. 

The implementation of _Array Filter_ contains the following code corresponding to step 1 in the specification:
```js
  /* Step 1. */
  var O = ToObject(this);
```

This means that the EcmaScript function `ToObject` is already implemented in the SpiderMonkey engine. Therefore we can utilize it in our implementation of `groupBy`. 

Our first implemented line should look like this:
```js
  var O = ToObject(this);
```

# **3.3** Debugging code

As we are working inside SpiderMonkey, a lot of built in functions and objects are not available to us. One such object is the `console` object. Therefore we cannot use the regular "print to console" debugging method. 

The engine does not give very descriptive error messages most of the time, most of the time it just silently failed without even producing output when trying to do `./mach run`. In order to figure out where the error might be when developing, it is smart to create a `test` function. 

This test function can be used to test individual lines of the implementation. This will enable narrowing down on what line is producing the undesired behavior. 

An example of the implementation of a test function:
```js
function Test(number) {
    return number%2;
}
```

## **3.3** Tasks

### **3.3.1** Implementing a test function

Add your own test function to the `Array.prototype` object. This function should return the last element of the array the function was called on. 
If the array contains no elements, the function should return `"Empty list"` instead. 

TIP: Remember to hook your self hosted function in `Array.cpp`

The Test-file for this task can be found in [Testfiles](./Testfiles/) named `test_task_3_3_1.js`


## **3.4** Main task
### **3.2.1** Implementing lines 2-5

Following the same "recipe" as defined in 3.2, try to implement the first 5 lines of the specification. Remember to always look for previous implementations that utilize the built-in EcmaScript functions. 

### **3.2.2** Thought experiment

Take a look at the specification as it is written. Can you find a way to shorten it? Are there lines in this specification that are not needed when writing it in SpiderMonkey?

The idea of this task is to do an evaluation of the proposal, as the implementors are allowed to influence how a proposal is specified. 


## [<--](../Module%202/Module2.md) [-->](../Module%204/Module4.md)       