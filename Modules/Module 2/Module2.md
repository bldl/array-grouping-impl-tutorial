# **2** Introduction to EcmaScript

The focus of this module is learn how to read Ecma-262, the language specification for JavaScript. 

# **2.1** What is Ecma-262

EcmaScript is a general purpose programming language defined by the Ecma-262 Language specification. 

There exists an EcmaScript engine in all major browsers. All these engines are implemented in different ways, with different strengths and weaknesses. Ecma-262 is there to ensure equal functionality for the end-developer. Any EcmaScript code executed in one engine should produce the exact same output when executed in another. 

A place to view the compliance of the engines to the specification is the [Test262 Report](https://test262.report/).

In this tutorial, we will use a specification at [/Specification/Specification_Array_Grouping.md](/Specification/Specification_Array_Grouping.md) to write the implementation of _Array Grouping_.

# **2.2** The specification of _Array Grouping_

In this tutorial, we will be working with an older version of the specification. The official one can be found [here](https://tc39.es/proposal-array-grouping/). The reason for this is it cannot be known whether changes will be made to the specification by the committee in the future. This would make keeping this tutorial up to date difficult if we used the official version.

Reading Ecma-262 is similar to reading code. One can assume the familiar semantics for keywords such as, for example, `for`, `while`, `let`. An important difference here is the built-in Ecma-262 functions, as shown below: 

```
2. Let len be ? LengthOfArrayLike(list).
```

In this line of the specification we define a variable `len`. This variable `len` is assigned the result from the built-in Ecma-262 function `LengthOfArrayLike`. It is passed one argument, `list`, which is an array-like object we are grouping. 

Each built-in Ecma-262 function can be explored by clicking its corresponding link. 

Everything written in the specification has a definition written somewhere else in the specification. In order to understand the specification for a given proposal, one needs to look at the definitions of each of the used Ecma-262 functions. Some of them are rather trivial and can be explained solely by their names. However, other functions, such as `ToPropertyKey()`, can be quite difficult to grasp. This is when reading the definition of a function is beneficial. 

Some functions and parts of the specification are quite difficult to understand, even after having viewed their definition in the specification. This is where the approach of looking at pre-existing code comes in. This can be done by using the powerful tool [_Searchfox_](https://searchfox.org).


## **Task 2.2.1.** What does ? mean:

Find out what the `?` in the following line means. 
```
2. Let len be ? LengthOfArrayLike(list).
```
After that, explain with your own words why it is needed. 

## **Task 2.2.2.** Definitions of functions:

Find the definition (explanation) of the function `IsCallable()`. 

NB! It is not required to understand the definition (explanation) of the function. The purpose of this task is to learn how to navigate the Ecma-262 specification. 

# **2.3** Searchfox

[Searchfox](https://searchfox.org) is a powerful tool to search the codebase of `mozilla_central`. It enables a developer to look through the existing codebase much easier than manually navigating through files. This allows for fast location of code that might use the same definition in Ecma-262.

When viewing the specification, some of its parts can be quite technical, and it can be not entirely clear what the functionality is, or how one is supposed to implement said functionality in SpiderMonkey. 

If there is some line of the specification that is unclear, or difficult to understand, one can look for a similar -- or exactly the same -- line in another implemented function. The source code of that function can then be viewed in Searchfox by searching.

There are usually parts of the specification that are quite similar when they are related to the same EcmaScript built-in functionality. It is therefore quite purposeful to start looking for a similar implementation on the same object. In the case of _Array Grouping_, a similar function is `Array.prototype.filter`.

Viewing the codebase of SpiderMonkey this way is a lot more efficient than using IDE's search, as all the functions of SpiderMonkey are indexed and searchable in Searchfox. 


## **Task 2.4.1** Find the implementation:

In the task [2.2.2](#task-222-definitions-of-functions) you were supposed to find the definition of `IsCallable` in Ecma-262. 
Your task is to use Searchfox to find out what the implementation of the Ecma-262 function `IsCallable` is called in SpiderMonkey.

## **Task 2.4.2**

After this module, the implementation will start. It is strongly recommended to understand each part of the specification by this time. Therefore, to get a deeper understanding, go through each line in the specification of `Array.prototype.GroupBy`, and write a short paragraph about how each line should function in the implementation. The length of each paragraph should be related to the complexity of the line. 

Example:

```
4. Let k be 0.
```
Line 4: Set the variable k to contain the number 0.

Solution to this task can be found [here](./Solution/Main_TASK_Mod2.md).


# The functionality of GroupBy

The function `groupBy`, defined on the array prototype, takes one argument `callbackfn`. The argument specifies the callback function which is invoked on every element of an array.
For an array `arr` with elements `a_1`, ..., `a_n`, the result of calling `arr.groupBy(callbackfn)` is an object whose _keys_ are unique values `callbackfn(a_i)`, and whose _values_ are arrays `[a_j,` ...`, a_k]`, where `callbackfn(a_j) ==` ... `== callbackfn(a_k)`.

That is, the function `groupBy` groups elements of an array to `key` -> `[v_1,` ... `, v_n]` pairs. The result of applying the `callbackfn` to each element of the array defines the key for that element. If two or more elements have the same key, they will be grouped in the same array.

```js
//Grouping even and odd numbers to key (even/odd)
[1,2,3].groupBy(i => i % 2 == 0 ? 'even':'odd')
//results in the object
{'even':[2], 'odd':[1,3]}

["hello", "world", "!"].groupBy(i=>i.length)
//results in the object
{5:["hello", "world"], 1:["!"] }
```
This is the behavior defined in the [specification](../../Specification/Specification_Array_Grouping.md) of the proposal. 

This tutorial will be using only the specification provided. As the official specification is subject to change until the proposal is fully finalized. The official specification of the proposal: [_Array Grouping_](https://tc39.es/proposal-array-grouping/).

Since the version of the spec this tutorial is using was written. The functions of _Array Grouping_ have been renamed to `Array.prototype.group` and `Array.prototype.groupToMap`.

## **Task 2.5.2**

Find the differences between `groupBy` and `groupByToMap`. 

Why do we need two very similar functions?
Why are the differences there in the first place?

## [<--](../Module%201/Module1.md) [-->](../Module%203/Module3.md)       