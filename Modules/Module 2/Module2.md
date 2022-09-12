# Module X: Introduction to EcmaScript!

The focus of this module is to learn EcmaScript. How to read the specification of JavaScript


# What is EcmaScript

JavaScript is not as much a programming language as it is the implementation of the programming language called EcmaScript. EcmaScript is a general purpose programming language defined by the Ecma-262 Language specification. 

There exists a JavaScript engine in all major browsers used today. All these engines are implemented differently, with different strengths and weaknesses when it comes extending them. One thing is for certain, EcmaScript is there to ensure they function equally to the end-developer. Any JavaScript ran in one engine should produce the exact same output in another. 

A fun place to view the differences between the engine is:

[Test262 Report](https://test262.report/)

In this tutoarial we will be using this specification to write the implementation of _Array Grouping_. 

# The specification:

The full specification can be viewed [here](./Resources/Specification_Array_Grouping.md)


# The specification of _Array Grouping_

TODO: Explain specification

Line for Line?

Just an intro to how to read the spec? Sort of like:

EcmaScript is a Pseudocode specification. So reading it is quite like reading code. You can assume the keywords like for, while, get() and lists function the same as in any other language. The big difference here is the built in Ecma functions. Things like: 

```
2. Let len be ? LengthOfArrayLike(O).
```

In this line of the specification we define a variable len. This variable len gets assigned the result fo the built in EcmaScript function LengthOfArrayLike(O). Where O is the Object (read Array) we are grouping. 

## Task:

Find out what the ? in this line means. Then explain with your own words, what and why it is needed. 




# Searchfox

Searchfox is an incredibly strong tool to search the codebase of `mozilla_central`. It enables the developer to look through the existing codebase much easier than diggin through files. This allows for fast location of code that might solve the same problem. 

In this tutorial we will not be specifically describing the usage of Searchfox. The tool is just there if one get's stuck. 

[Searchfox](https://searchfox.org)

## Task SearchFox

Find some part of the codebase! 
