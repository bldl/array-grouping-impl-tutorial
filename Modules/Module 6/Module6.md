# **7.0** Implementing _Array Grouping_

In this module, we will be writing the bulk of the implementation. The module consists of a short explanation about how the implementor is allowed to optimize their implementation based on their environment. 


# **7.1** The specification is not the "end all be all"

The specification is created to ensure all the implementations of JavaScript function the same. It lays out the limitations and functionality of everything in JavaScript. This means it is the implementors job to ensure the feature they implement is consistent with the specification. As long as the implementation is consistent with the specification, the implementor is allowed to write it how they want.

This means we can make changes, at "optimize" the implementation to the SpiderMonkey environment. 

## **Task 7.1.1** What can be improved?

Have a look at the specification for `Array.prototype.groupBy`, what do you imagine could be optimized in our environment? 


# **7.2** Optimizing the implementation

The implementor of a proposal is allowed to optimize the implementation. Doing this can both increase performance and readability of the implementation. There is some risk associated with adhering to the specification. Therefore, when changing the implementation we have to ensure the implementation still adheres to the EcmaScript specification.

In the following section we will refer to each "step" of the spec by the number and letter alloted, example step 5.i is:
```js
a. Let Pk be ! ToString(𝔽(k)).
```

In order to not create the data structure ounce in a List, then populate it into a JavaScript Object, we can apply it directly to a JavaScript Object. We can de this because we are using self hosted code where the JavaScript Objects are easily accessible. This would essentially change step 5 to become the following:
```js
5. Let obj be ! OrdinaryObjectCreate(null).
```
Then we have to change `Array.prototype.AddValueToKeyedGroup` to function with an Object, and insert lists containing the values corresponding to each Key created by the `callbackfn`

To create a `OrdinaryObject` we can just use the `{}` for now, as in 7.2 we will be discussing how to access standard objects, and why we need standard objects. For now just use `{}`


## **Task 7.2.1** Optimize the implementation

Change your implementation to use the new step 5, and populate the new JavaScript object directly instead of using a list. 


# **7.3** Adding properties to Objects

Since we are working withing "Engine space", we have to ensure we do not use any of the methods found on objects visible in "User space"

# **Main Task** Implementing

It is now time to start implementing _Array Grouping_. 

Start writing your implementation of the function `Array.prototype.groupBy`. There is not need to start on `groupByToMap`as this can be implemented by just modifying the `groupBy` function. 

Try to adhere to the specification as much as possible, in order to ensure the spec is upheld. 

Good luck! If you are stuck remember all you have learnt: 
- Look at other implementations of previous features with similar specification. 
- Use searchfox to search the codebase.
- Create tests to test the functionality implemented. 
- Test parts of the implementation in a test function



