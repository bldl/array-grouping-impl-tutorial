# 4 Testing during implementation. 

Testing the implementation ensures that all parts of the implementation function according to the specification. 

In this module we will be learning how to run Test262 tests, as well as implement tests ourselves.


# **4.1** Running `jstests`

There are two different test suites built into SpiderMonkey: `jstests` (also known as [Test262](https://github.com/tc39/test262)) to test adherence to the specification, and tests testing behavior specific to SpiderMonkey. An example of the latter behavior is Monkey Patching, which is discussed in [Module 5](../Module%205/Module5.md).

Tests from the [Test262](https://github.com/tc39/test262) test suite are located in the folder `mozilla-unified/js/src/tests/test262`.

To run a test from Test262:

```sh
$ ./mach jstests TEST_PATH_SUBSTRING 
```

`TEST_PATH_SUBSTRING` designates the path to either the directory of tests, or a specific test to be executed. 

For example, in order to run the tests for all `Array` built-ins, the following command is used:

```sh
$ ./mach jstests built-ins/Array
```

The `jstests` has a number of flags, some of them include:

- -s (--show-cmd): Show the exact command line used to run each test.

- -o (--show-output): Print each test’s output.

- --args SHELL_ARGS: Extra arguments to pass to the JS shell.

- --rr Run tests under the rr record-and-replay debugger.

To show more options run

```console
$ ./mach jstests -- -h
```


## **Task 4.1** 

1. Run the tests associated with `Array.prototype.filter`.

2. Make `jstests` output the result of each test within `Array.prototype.filter`.

# **4.2** Testing features

Tests provide quick and simple functionality to determine if previously implemented parts of the specification break when new code is added.

You as an implementor may either implement tests before implementing the _Array Grouping_ proposal (essentially meaning test-driven development), or after it. In any case, implementing tests is mandatory for every new addition to Ecma-262.


# **4.3** How to implement a test

Consider the following imaginary proposal for Ecma-262:
>```md
> Note 1: The function should always return a Number.
> Note 2: The number returned is always 1.
> Array.prototype.one([,thisArg])
> 1. return 1
>```

This proposal has only one line to test, however, there are two parts of this proposal that have to be tested:
1. The function has to return a `Number`
2. The `Number` has to be 1

Now, to write the test, we create a file `isNumber.js` in the `Array/prototype/` folder. The contents of the file will be as follows:

```js
assert(function(){
    return Number.isInteger([].one())
}, "Result of one() is integer")

reportCompare(0,0);
```

The tests created for Test262 use a Test262 function called [`assert`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#test-environment). This function allows asserting several different conditions. These are as follows:

- `assert(function => boolean, message)`: Asserts the boolean is true, otherwise displays message if `-o` is run as test option
- `assert.throws(e, f(){CODE_TO_TEST})`: asserts that the function `f` returns the error `e`
- `assert.sameValue(a, b, message)`: asserts that `a` and `b` contain the same value.
- `assert.notSameValue(a, b, message)`: asserts that `a` and `b` do not contain the same value

It is also important to add `reportCompare(0,0);` at the end of a test. This function is somewhat similar to `assertEq`, though some differences exist (a short overview can be found [here](http://udn.realityripple.com/docs/Mozilla/Projects/SpiderMonkey/Creating_JavaScript_tests/jsreftests)).
During an execution of a test, if the line `reportCompare(0,0)` is reached, the test will show as passed.

In order to explicitly fail a test, `reportCompare` can be called with non-equal parameters:
```js
if(failedCondition){
    reportCompare(1,0);
}else{
    reportCompare(0,0);
}
```

## **Task 4.2.1**

Create a small test that tests whether or not the function`Array.prototype.one` from our imaginary proposal returns the value 1. 


## **Task 4.2.2** Testing line 3

Consider line 3 of the specification of the _Array Grouping_ proposal:
```js
If IsCallable(callbackfn) is false, throw a TypeError exception.
```

Create a subfolder `groupBy` in the folder `mozilla-unified/js/src/tests/test262/built-ins/Array/prototype/` and create a test file named appropriately.

Run your test and verify that your implementation of line 3 works.

Writing Test262 tests for _Array Grouping_ will take place in [Module 8](../Module%208/Module8.md).


## [<--](../Module%203/Module3.md) [-->](../Module%205/Module5.md) 
      
