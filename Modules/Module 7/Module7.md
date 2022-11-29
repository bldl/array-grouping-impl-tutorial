# 7.0 Continuation of implementation.

When implementing a new feature, the implementor is allowed freedom to make changes based on their environment. This ensures optimal implementations for different engines and environments. 

# **7.1** The specification is not the "end all be all"

The specification is created to ensure all the implementations of JavaScript operate the same. It lays out the limitations and functionality of everything in JavaScript. This means it is the implementors job to ensure the feature they implement is consistent with the specification. As long as the implementation is consistent with the specification, the implementor is allowed to write it how they want.

This means we can make changes, and "optimize" the implementation to the SpiderMonkey environment. 

## **Task 7.1.1** What can be improved?

Have a look at the specification for `Array.prototype.groupBy`, what do you imagine could be optimized in our environment? 


# **7.2** Optimizing the implementation

The implementor of a proposal is allowed to optimize the implementation. Doing this can both increase performance and readability. There is some risk associated with not adhering to the specification. Therefore, when changing the implementation we have to ensure its behavior strictly adheres to the specification.

In the following section we will refer to each "step" of the spec by the number and letter alloted, example step 5.i is:
```js
a. Let Pk be ! ToString(𝔽(k)).
```

In the current specification, a list of `key` -> [`value`, ...] pairs are stored in a list (Step 6d). Then this list is populated into a standard JavaScript object at steps 7 and 8. This can be avoided if the `key` -> [`value`, ...] pairs were immediately populated directly into a standard JavaScript object. 

This would change step 5 to become the following:
```js
5. Let obj be ! OrdinaryObjectCreate(null).
```
Then we have to change `Array.prototype.AddValueToKeyedGroup` so it functions with a standard JavaScript object in stead of a List.


## **Task 7.2.1**

Optimize the implementation of `Array.prototype.groupBy`, make sure it is not susceptible to Monkey Patching, even after it is optimized. 

## **Task 7.2.2** Implementing GroupByToMap

Implement `Array.prototype.groupByMap` with optimalizations. 

Ensure this is not susceptible to Monkey Patching. 