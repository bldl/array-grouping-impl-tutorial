# 2.0 Introduction to EcmaScript!

The focus of this module is learn how to read EcmaScript, the specification of JavaScript. 


# 2.1 What is EcmaScript

JavaScript is not as much a programming language as it is the implementation of the programming language called EcmaScript. EcmaScript is a general purpose programming language defined by the Ecma-262 Language specification. 

There exists a JavaScript engine in all major browsers used today. All these engines are implemented differently, with different strengths and weaknesses when it comes extending them. One thing is for certain, EcmaScript is there to ensure they function equally to the end-developer. Any JavaScript ran in one engine should produce the exact same output in another. 

A fun place to view the differences between the engine is: [Test262 Report](https://test262.report/)

In this tutoarial we will be using this specification to write the implementation of _Array Grouping_. 

# 2.2 The specification of _Array Grouping_:

The full specification of _Array Grouping_ can be viewed [here](/Specification/Specification_Array_Grouping.md)

In this tutorial we will be working with an older version of the specification. The official one can be found [here](https://tc39.es/proposal-array-grouping/). The reason for this is it cannot be known whether changes will be made to the specification by the comitte. This makes keeping the tutorial up to date difficult if we used the official version.

EcmaScript is a Pseudocode specification. So reading it is quite like reading code. You can assume the keywords like for, while, get() and lists function the same as in any other language. The big difference here is the built in Ecma functions, like: 

```
1. Let len be ? LengthOfArrayLike(O).
```

In this line of the specification we define a variable len. This variable len gets assigned the result from the built in EcmaScript function `LengthOfArrayLike`.It is passed one argument, O, where O is the Object (read arraylike) we are grouping. 

Each built in EcmaScript function can be viewed by clicking it's corresponding link. 

Everything written in the specification has a definition also written somewhere in the specification. In order to understand the specification for a given proposal, it is needed to look at the definitions of each of the used EcmaScript functions. Some of them are quite trivial, and can be explained solely by their names. However others, like `ToPropertyKey()` can be quite difficult to understand. This is when reading the functions definition is purposeful. 

Some functions and parts of the specification are quite difficult to understand, even after having viewed their definition in the specification. This is where the method of looking at pre-existing code comes in. This can be done by using the powerful tool `SearchFox`

## Tasks 2.2:

### **2.2.1** What does ? mean:

Find out what the ? in this line means. Then explain with your own words, what and why it is needed. 

### Definitions of functions:

Find the definiton (explanation) of the function `IsCallable()`. 

NB! It is not required to understand the definition(explanation) of the function. The purpose of this task is to learn how to navigate the EcmaScript specification. 

# 2.3 Searchfox

Searchfox is an incredibly powerful tool to search the codebase of `mozilla_central`. It enables the developer to look through the existing codebase much easier than diggin through files. This allows for fast location of code that might solve the same problem. 

## [Searchfox](https://searchfox.org)

When viewing the specification, parts can be quite technical, and not entirely clear what the functionality is, or how one is supposed to implement said functionality in SpiderMonkey. 

Searchfox is used for this. If there is some line of the specification that is unclear, or difficult to understand. Find a similar, or exactly the same line in a previous function implemented. The source code of this function can then be viewed in Searchfox by searching for the function!

There is usually parts of the specification that are quite similar when they are related to the same JavaScript builtin. It is therefore quite clever to start looking for a similar implementation on the same Object. In the case of _Array Grouping_, a similar function is `Array.prototype.filter`

Viewing the codebase of SpiderMonkey this way is a lot more efficient than using built in IDE search methods, as all the functions of SpiderMonkey are indexed and searchable in Searchfox. 

## Tasks 2.4:

### **2.4.1** Find the implementation:

In the task "Definition of functions" you where supposed to find the definition of `IsCallable` in EcmaScript. 
Now find out what the implementation of the EcmaScript function `isCallable` is called in SpiderMonkey

TIP: Use Searchfox!

# **2.5** MAIN TASK

## **2.5.1**

After this module, the implementation will start. It is strongly recommended to understand each part of the specification by this time. Therefore to get a deeper understanding, go through each line in the specification of `Array.prototye.GroupBy`, and write a short paragraph about how this line should function in the implementation. The length of each paragraph should be related to the complexity of the line. 

Example:

```
4. Let k be 0.
```
Line 4: Set the variable k to contain the value 0.

Solution to this task can be found [here](Solution\Main_TASK_Mod2.md) 


## **2.5.2**

Find the differences between the function `groupBy` and the function `groupByToMap`. 

Why do we need two, so similar functions?
Why are the differences there in the first place?
