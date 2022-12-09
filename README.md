# Implementing a JavaScript feature in SpiderMonkey


This is a tutorial on how to implement a [TC39](https://tc39.es/) proposal [_Array Grouping_](https://github.com/tc39/proposal-array-grouping) in the [SpiderMonkey](https://spidermonkey.dev/) JavaScript engine. We explain here how to read the [proposal specification](https://tc39.es/proposal-array-grouping/) and create the implementation which is compliant to the specification. 
The implementation will be mostly written in [self-hosted JavaScript](http://udn.realityripple.com/docs/Mozilla/Projects/SpiderMonkey/Internals/self-hosting), with a tiny bit of C++.


# What you will learn

This tutorial will give an introduction on how to:
- read the ECMA-262 language specification
- implement a TC39 proposal in SpiderMonkey
- test a TC39 proposal with the [Test262](https://github.com/tc39/test262) test suite


# Table of Contents

## 1. [Onboarding and Getting to Know the Tools](./Modules/Module%201/Module1.md)
## 2. [Introduction to EcmaScript!](./Modules/Module%202/Module2.md)
## 3. [Starting the implementation](./Modules/Module%203/Module3.md)
## 4. [Testing during implementation](./Modules/Module%204/Module4.md)
## 5. [Separating space & Monkey-Patching!](./Modules/Module%205/Module5.md)
## 6. [Implementing _Array Grouping_](./Modules/Module%206/Module6.md)
## 7. [Continuation and optimization](./Modules/Module%207/Module7.md)
## 8. [Test262](./Modules/Module%208/Module8.md)
## 9. [Polish and Cleanup](./Modules/Module%209/Module9.md)


# For teachers

This tutorial can be taught as a university course. 

# Authors

This tutorial is a result of a project originally implemented in Fall 2021 by **Rolf Martin Glomsrud** and **Sigurd Setså** within a project course at the [University of Bergen, Norway](https://www.uib.no/en/ii), supervised by **Yulia Startsev** (Mozilla), **Mikhail Barash** (University of Bergen), and **Noeska Smit** (University of Bergen).

In Fall 2022, **Rolf Martin Glomsrud** (University of Bergen), together with **Mikhail Barash** (University of Bergen), have written this tutorial, and **Daniel Liland** (University of Bergen) has followed the tutorial to implement the feature and provided feedback on the tutorial structure and contents.

The tutorial can be cited as:
```
R. M. Glomsrud, D. Liland, M. Barash. Implementing a JavaScript feature in SpiderMonkey (a tutorial). 2022.
```

# Feedback

Do not hesitate to contact us, or leave a pull request, if you have any feedback, corrections, or other comments.

