# 7.0 Headline

This module will focus on moving away from the original specification while still upholding the limitations. We will be optimizing our implementation for SpiderMonkey, and avoiding SpiderMonkey specific issues.


# **7.1** Optimizing the implementation

The implementor of a proposal is allowed to optimize the implementation. Doing this can both increase performance and readability of the implementation. There is some risk associated with adhering to the specification. Therefore, when changing the implementation we have to ensure the implementation still adheres to the EcmaScript specification.

In [Task 5.1.1](../Module%205/Module5.md) it was discussed how we could improve the implementation for our environment. 

In the following section we will refer to each "step" of the spec by the number and letter alloted, example step 6.i is:
```
a. Let Pk be ! ToString(𝔽(k)).
```

In order to not create the data structure ounce in a List, then populate it into a JavaScript Object, we can apply it directly to a JavaScript Object. We can de this because we are using self hosted code where the JavaScript Objectsa are easily accessible. This would essentially change step 5 to become the following:
```js
5. Let obj be ! OrdinaryObjectCreate(null).
```
Then we have to change `Array.prototype.AddValueToKeyedGroup` to function with an Object, and insert lists containing the values corresponding to each Key created by the `callbackfn`

To create a `OrdinaryObject` we can just use the `{}` for now, as in 7.2 we will be discussing how to access `engine space` objects, and why we need to do that. For now just use `{}`



## **Task 7.1.1** Optimize the implementation

Change your implementation to use the new step 5, and populate the new JavaScript object directly instead of using a list. 

# **7.2** Monkey Patching

This chapter will be on Monkey Patching. Only showcasing what it is and why it occurs, then how to avoid it by using `std_Object_create(null)`

# **7.2.1** Avoid Monkey Patching

Change your implementation to avoid the Monkey Patching bug, then run tests provided [MonkeyTest.js](./Testfiles/MonkeyTest.js)


