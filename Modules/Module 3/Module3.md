# 3.0 Testing and writing 1 - 5

In this module, the lines 1 - 5 in the specification of _Array Grouping_ will be implemented, and then tested.

# 3.1 Creating the function

Before the implementation can even start, the hooks into C++ is needed. In [Module 1](/Modules/Module%201/Module1.md), task 2.3 a new function was added. Now the same is needed. We have to create a function which takes the same parameters as in the specification. This can be done by adding the line:

```js
JS_SELF_HOSTED_FN("groupBy", "GroupBy", 1,0),

```

The parameters for `JS_SELF_HOSTED_FN` are as follows, 
1. Name of the function avalible to the developer
2. Function name defined in Array.js
3. Number of parameters the function is meant to take

Now the function can be created in `Array.js`. Defined in the specification are the parameters the function is meant to take. This can be seen in the title of the specificaton:

```
Array.prototype.groupBy ( callbackfn [ , thisArg ] )
```

The title defines we need one parameter, namely the parameter callbackfn. This will be the function used to map the elements of the array to their respective keys. 

The function also takes the thisArg as a parameter, however since we are using self-hosted code. This parameter is always avalible to us, therefore we need not pass it to the function. 

## **Task 3.1** Creating and testing the function

Create the groupBy function, which takes some `callbackfn` as a parameter. Now in order to test this function, let's return the result of the `callbackfn`. 

Insert this line into the `groupBy` function you just created, no need to understand this yet as this is part of a future module. 

```js
  let result = callContentFunction(callbackfn, undefined, 0, 1, ToObject(this));
  return result;
```

To test this function and to check whether or not it actually returns the result of the `callbackfn` passed as a parameter, run the script provided in [Resources](/Modules/Module%203/Resources/) named task_3_1.js

# 


Do some task

