# **8.0** Test262

THis module will consist of writing tests for the official EcmaScript testing suite Test262. These tests are used to ensure each JavaScript engine adheres to the EcmaScript specification. 


# **8.1** Why a shared testing suite?

The goal of Test262 is to provide test material that covers every observable behavior specified in the ECMA-414 Standards Suite. It is the largest testing suite avalible for EcmaScript to date.

Using a shared testing suite has a lot of advantages. It allows the developers to see what engine is most compliant with the specification, what features are supported and what is currently unsupported. 

As stated in Module X test262 has a website where the compliance of each engine can be viewed. 

[Test262 compliance](https://test262.report/)


# **8.2** Writign tests for Test262

The official guidelines for contributing to Test262 state:

`Any test that exercises observable grammar or semantics, originating with citable, normative text in the latest draft of the ECMAScript Language Specification, the ECMAScript Internationalization API Specification, the The JSON Data Interchange Syntax, a Stage 3 proposal or a Pull Request which makes a normative change to any of those specifications.`

This states we can write tests for any observable grammar or semantic that originates from our specification (ECMAScript Language Specification). This is what we will be doing in this module. 

In order to fully test our implementation, we have to test every "testable" line in the specification. 

A "testable" line is when the behaviour of the specification is observable to the user with a specific input. An example of a easily "testable" line in the specification is line 3:
```
3. If IsCallable(callbackfn) is false, throw a TypeError exception.
```

## **Task 8.2.1** What lines are testable?

View all lines in the specification of _Array grouping_ proposal. What parts of the specification are "testable"? 

Write down what lines are testable and compare them with the document provided [here](LINK TO Solution!)

# **8.2** Standard tests for all new functions

All new functions added to JavaScript have to use the correct properties. That means setting the following properties correctly: `length`, `name`. Each of these properties should have some characteristics like ex: `enumerable` or `writable`.

View the tests of the feature `Array.prototype.filter` to see an example of how these can be tested. 

# **Task 8.2.1** Testing the properties

Test if the properties of the implementations of `groupBy` and `groupByToMap` are correct. See 

# **Main Task** Writing tests

Write tests for the "testable" lines you wrote in task 8.2.1.

The tests should ensure that both `groupBy` and `groupByToMap` adhere to the [specification](../../Specification/Specification_Array_Grouping.md)

The official tests for `groupBy` (now named `group`) can be found [here](https://github.com/tc39/test262/pull/3354)

The official tests for `groupByToMap` (now named `groupToMap`) can be found [here](https://github.com/tc39/test262/pull/3353)

