# 7.0 Continuation and optimization

When implementing a new feature, the implementor can make changes based on the engine they are working with. This ensures optimal implementations for different engines and environments. 

# **7.1** The specification is not the "end all be all"

The specification ensures that all implementations of EcmaScript operate in the same way. It is the implementor's job to make certain that the feature they implement complies with the specification. As long as this is so, the implementor is allowed to write the implementation how they see fit. In general, it is preferable not to stray from the specification unless needed.

This means we can adapt the implementation of the specification to fit the SpiderMonkey engine. 

## **Task 7.1.1** What can be improved?

Have a look at the specification for `Array.prototype.groupBy` and your implementation from [Module 6](../Module%206/Module6.md).
You task is to determine which parts of the specification can be optimized. 


# **7.2** Optimizing the implementation

We now discuss the points in the specification that can be optimized.

In this section we will refer to each "step" of the specification by its identifying number and letter, for example, step _5.i_ refers to:
```js
a. Let Pk be ! ToString(𝔽(k)).
```

The specification (step _5_) uses `List` data structure to store the collection of (`key`, `[v_1,` ... `, v_n]`) pairs, which correspond to groups to be returned by `groupBy` function. In step _6.d_, the invocation of `AddValueToKeyedGroup` checks whether a group for `key` is already defined. If it is, a value `v_i` is added to the existing group; otherwise a new group for `key` is created and `v_i` is added to the new group. 

The list of pairs defined in step _5_ is then populated into an ordinary EcmaScript object `obj` at steps _7_ and _8_. This is inefficient in the SpiderMonkey engine, because the data is manipulated twice: when created (in step _6_) and when populated into `obj` (in step _8_).

One way to avoid this inefficiency is to immediately populate the pairs into `obj`.
In the specification, this would entail replacing step _5_ with step _7_ as follows: 
```js
// updated specification
5. Let obj be ! OrdinaryObjectCreate(null).
```
Step _6_ remains unchanged, but the Ecma-262 function `Array.AddValueToKeyedGroup` (used in step _6.d_) has to be modified to accommodate an ordinary EcmaScript object instead of `List`.


## **Task 7.2.1**

Your task is to optimize the implementation of `Array.prototype.groupBy` by including the changes suggested in [7.2](#72-optimizing-the-implementation).

Make sure the optimized implementation is not susceptible to monkey patching. 

# **7.3** The `Map` Object

The second part of the _Array Grouping_ proposal focuses on function
`Array.prototype.groupByMap`, which is very similar to `Array.prototype.groupBy`. 
The main difference between these two functions is that `groupByMap` returns a `Map` instead of an object. 

The relevant differences between a `Map` and an object are: 
- In an object, the `key` field can only be an `Number`, `string`, or `Symbol`. In a `Map`, the `key` can be any data structure.
- A `Map` guarantees the order of the elements, while an object does not. 

It is possible to base the implementation of `groupByMap` on the implementation of `groupBy`. However, to prevent monkey patching, two points have to be considered:
- when instantiating the data structure, a non-user-observable version of the `Map` constructor should be used;
- when reading and writing data in a `Map`, a non-user-observable version of `get` and `set` must be used. 

# **7.4** Non-user-observable constructors

In order to get a non-user-observable version of an object's constructor, we can use the SpiderMonkey function
`GetBuiltinConstructor`. Its parameter is the string which represents the name of the object, for which it returns the constructor: 
```js
GetBuiltinConstructor("Map"); // returns non-user-observable Map's constructor
```

Note that not all object names can be passed as parameters to the `GetBuiltinConstructor` function: if a object name is not supported, then the function should be extended. This had been the case with `"Map"` before the _Array Grouping_ proposal was implemented for the first time. Now, since there is an implementation of the proposal, it is possible to pass `"Map"` to `GetBuiltinConstructor`. However, explaining how the implementation of the `GetBuiltinConstructor` function can be extended, is outside the scope of this tutorial.

# **7.5** Reading and writing data in a `Map`

In a `Map`, keys can be arbitrary data structures, such as tuples, arrays, dictionaries, or -- for that matter -- any objects.
That is why reading and writing data in a `Map` assumes using functions `Map.get` and `Map.set`, respectively. 
To prevent monkey patching, we have to use non-user-observable versions of these functions.

In SpiderMonkey, the implementation of functions `Map.get` and `Map.set` is done in C++. The non-user-observable versions of these functions are [`std_Map_get`](https://searchfox.org/mozilla-central/source/js/src/vm/SelfHosting.cpp#2159) and [`std_Map_set`](https://searchfox.org/mozilla-central/source/js/src/vm/SelfHosting.cpp#2160), which are defined in the engine.
Calling these functions is done by invoking the SpiderMonkey function

```js
call_function(func, param1, param2, ..., paramN) 
```

The first argument is the function `func` that will be called, and `param1`, ..., `paramN` will be passed to `func` as arguments. 

The non-user-observable versions of `Map.get` and `Map.set` can be called as follows:
```js
//get data
callFunction(std_Map_get, map, key);
//set data
callFunction(std_Map_set, map, key, value);
```
Here `map` is the object apply function call to, 
`key` is a key to either get or set data on,
and `value` is a value to associate with `key`.

## **Task 7.5.1** Implementing GroupByMap

Your task is to implement `Array.prototype.groupByMap`.
Make sure that monkey patching is avoided. 

## [<--](../Module%206/Module6.md) [-->](../Module%208/Module8.md) 
  