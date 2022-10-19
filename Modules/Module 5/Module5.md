# **5.0** Implementing _Array Grouping_

In this module, we will be writing the bulk of the implementation. The module consists of a short explanation about how the implementor is allowed to optimize their implementation based on their environment. 


# **5.1** The specification is not the "end all be all"

The specification is created to ensure all the implementations of JavaScript function the same. It lays out the limitations and functionality of everything in JavaScript. This means it is the implementors job to ensure the feature they implement is consistent with the specification. As long as the implementation is consistent with the specification, the implementor is allowed to write it how they want.

This means we can make changes, at "optimize" the implementation to the SpiderMonkey envorinment. 

## **Task 5.1.1** What can be improved?

Have a look at the specification for `Array.prototype.groupBy`, what do you imagine could be optimized in our environment? 

Further explanation of this will be provided in [`Module 7`](../Module%207/Module7.md).

# **I am sort of stuck here, i do not know what else to start discussing, need some input from Daniel as to what is missing**

**Comment about Module 5 by Rolf:**
- I want to discuss monkey-patching, but they need a finished implementation for that. I want to discuss how to test each line, but that will probably be at a later point. I think the most important thing here is just for them to start coding. If anything is Unclear at this point Daniel should be able to know and can come with feedback that X need to be explained further. 

# **Main Task** Implementing

It is now time to start implementing _Array Grouping_. 

Start writing your implementation of the function `Array.prototype.groupBy`. There is not need to start on `groupByToMap`as this can be implemented by just modifying the `groupBy` function. 

Try to adhere to the specification as much as possible, in order to ensure the spec is upheld. 

Good luck! If you are stuck remember all you have learnt: 
- Look at other implementations of previous features with similar specificaiton. 
- Use searchfox to search the codebase.
- Create tests to test the functionality implemented. 
- Test parts of the implementation in a test function



