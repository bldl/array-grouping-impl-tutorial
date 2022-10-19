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

This chapter will be on Monkey Patching. Showcasing what it is and why it occurs, then how to avoid it by using standard JavaScript Objects. 

Monkey-patching occurs when the user overrides some standard JavaScript function, object or property. Let us use an example where the user overrides the `Array.prototype.0` property where we change the `set()` function to throw an error. 

Run the following code to see Monkey-Patching in action
```js
Object.defineProperty(Array.prototype, '0', {
  set(v) {
    throw new Error('Monkey-Patched!');
  }
});
a = []
a[a.length] = 99
console.log(a[0])
```

When we try to set the property 0 (a.length) in the code above it returns an erro because we defined the function set() of property 0 to throw an error.

This is an issue when implementing in Self-hosted code as the same objects used in the self hosted code are user patchable. This means if we use the same Array.prototype or Object.prototype in our implementation of `Array.prototype.groupBy` the implementation will have user defined behaviour. This is not adherent to the specification and therefore has to be fixed. 

In order to avoid Monkey-Patching problems in the implementations we can do one of the following:

1. Assign the property by overriding any user defined property changes

2. Use the standard object that is not user-patchable.

Both of these solutions are valid, however they suit different cases. Since the Object (`obj`) created in step 5 is the same as the Object that will return from `groupBy`, using option 2 where no user-patchable properties are included is purposefull.

Creating a standard object can be done by using the function `std_Object_create()`

The lists defined within properties of `obj` can be inherited from Array.prototype as long as we assign the properties safely, this can be done with the `DefineDataProperty(obj, key, val)` function. Where the Object to define the property on is obj, the key of the property is key and the value is val. 



# **7.2.1** Avoid Monkey Patching

Change your implementation to avoid the Monkey Patching bug, then run tests provided [MonkeyTest.js](./Testfiles/MonkeyTest.js)

If MonkeyTest.js does not throw an error, your implementation is not subseptable to MonkeyPatching. 

