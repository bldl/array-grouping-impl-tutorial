# **5** Separating space and Monkey Patching

This module will discuss the difference between non-user-observable objects (we refer to them as "engine space") and user-observable objects (we refer to them as "user space"). In addition, we discuss  _monkey patching_ in this module.

# **5.1** "Engine space" vs "User space"

Self-hosted code comes with some caveats one has to be aware of. One of them is ensuring that no parts of the implementation can be interfered with by the user. This means that one has to separate "Engine space" and "User space".

"Engine space" refers objects and functions used by the engine. These are not accessible to the user, and can safely be used in implementations. 

"User space" refers to objects and functions accessible by the user (for example, `Array.prototype`). These are accessible both by the engine and the user. 

Splitting the object space allows for more control when implementing new features, as it can be useful to have access to "User space" objects and functions. However, care must be taken when using these objects. Otherwise, the implementation can be susceptible to _monkey patching_.

# **5.2** Monkey Patching

Monkey patching occurs when a user overrides a standard EcmaScript function, object or property. An example of this is when the user overrides the `Array.prototype.0` property changes the `set()` function to throw an error. 

```js
Object.defineProperty(Array.prototype, '0', {
  set(v) {
    throw new Error('Monkey patched');
  }
});
a = ["a", "b", "c"];
a[0] = "A";
```

When we try to set the property `0` in the code above, it returns an error because we defined the function `set()` for property `0` to throw an error. This behavior is intended, and allows developers to have full control of their EcmaScript environment.

Monkey patching becomes an issue in self-hosted code, because the objects used in the self-hosted code are user-observable (i.e., the users can overwrite their behavior). This means that if user-observable objects are used, the implementation can contain user-defined behavior. This is not adherent to the specification and therefore has to be fixed. 

Avoiding monkey patching in self-hosted code can be achieved by:

1. manipulating properties safely,

2. using standard objects that are not user-observable.

Both of these solutions are valid, however, they suit different cases. 

We explain how this manifests in line 5 of the _Array Grouping_ proposal. 
The first alternative is not applicable because the specification requires that the object returned from `groupBy` does not inherit from `Object.prototype`. Even "mere" use of `{}` would violate the behavior defined in the specification. 
The second alternative has to be used in this case. Indeed, 
since the object `obj` created in step 5 is the same as the object that will be returned from `groupBy`, it has to be non-user-observable. 

The lists defined within properties of `obj` can be inherited from `Array.prototype` as long as we assign the properties safely; this can be done with the `DefineDataProperty(obj, key, val)` function, where `obj` is the object to define the property on, `key` is the key of the property, and `val` is the value. 


In step 7 of the specification, we have to create an `OrdinaryObject` with the Ecma-262 function `OrdinaryObjectCreate(null)`. To implement this the function `std_Object_create(null)` can be used. The parameter of this function defines the prototype of the object created, thus we use `null` for a null prototype object. Using `std_Object_create` allows us to avoid monkey patching by using a non-user-observable object. 


# **Task 5.2.1** Avoiding Monkey Patching

Provided in [Tasks/MainTask.js](./Tasks/MainTask.js) is a "dummy" function. In order to run it, add this function to `Array.js`, and add the hook inside `Array.cpp`. 

Your task is to ensure this "dummy" function is not susceptible to ,monkey patching. Remember to assign properties safely, and use ordinary objects where needed.

Run the test file [MonkeyTest.js](./Testfiles/MonkeyTest.js): if all the tests pass, you have successfully avoided monkey patching.

## [<--](../Module%204/Module4.md) [-->](../Module%206/Module6.md) 
  
