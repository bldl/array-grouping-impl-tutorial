# **5.0** Separating space & Monkey-Patching!

This module will discuss the difference between "Engine space" and "User space" as well as showcasing the issue Monkey patching!

# **5.1** "Engine space" vs "User space"

Self-hosted code does come with some caveats. Ensuring that no parts of the implementation written can be interfered with by the user. This means we have to separate "Engine space" and "User space"

"Engine space" refers to the objects and functions used by the engine. These are not accessible to the user, and can safely be used in implementations

"User space" refers to objects and functions used by the user, think of Array.prototype and its referring functions. These are accessible both by the engine and the user. Therefore care must be taken when using these objects, or else the implementation can be susceptible to Monkey Patching

# **5.2** Monkey Patching

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

When we try to set the property 0 (a.length) in the code above it returns an error because we defined the function set() of property 0 to throw an error.

This is an issue when implementing in Self-hosted code as the same objects used in the self hosted code are user patchable. This means if we use the same Array.prototype or Object.prototype in our implementation of `Array.prototype.groupBy` the implementation will have user defined behavior. This is not adherent to the specification and therefore has to be fixed. 

In order to avoid Monkey-Patching problems in the implementations we can do one of the following:

1. Assign the property safely

2. Use the standard object that is not user-patchable.

Both of these solutions are valid, however they suit different cases. Since the Object (`obj`) created in step 5 is the same as the Object that will return from `groupBy`, using option 2 where no user-patchable properties are included is purposeful.

The lists defined within properties of `obj` can be inherited from Array.prototype as long as we assign the properties safely, this can be done with the `DefineDataProperty(obj, key, val)` function. Where the Object to define the property on is obj, the key of the property is key and the value is val. 

To create a standard object (`OrdinaryObject`), the function `std_Object_create(null)` can be used. We use `null` to create a standard object. Using `std_Object_create` allows us to avoid Monkey-patching issues by using a non "User space" object, the "standard" version of the object passed in the first parameter.  


# **Main Task** Avoid Monkey Patching

Provided in [Tasks/MainTask.js](./Tasks/MainTask.js) is a "dummy" 

//Keep writing this tomorrow
