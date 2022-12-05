# 4.0 Testing during implementation. 

Testing the implementation is important. It ensures all parts of the implementation function according to the specification. 

In this module we will be learning how to run Test262 tests, as well as implement tests ourselves. 


# **4.1** Running jstests

There are two different test suites built into SpiderMonkey. Jstests, also known as [Test262](https://github.com/tc39/test262), and SpiderMonkey specific tests. They are separated based on testing of spec adherence, and testing specific behavior of SpiderMonkey. Example: one of the problems discussed in [Module 5](../Module%205/Module5.md) (Monkey Patching) is a specific problem with SpiderMonkey and would therefore be tested with SpiderMonkey specific tests

Tests from the Test262 test suite are located in the folder `mozilla-unified/js/src/tests/test262`.

To run a test from Test262:

```console
$ ./mach jstests TEST_PATH_SUBSTRING 
```

`TEST_PATH_SUBSTRING` means the path to either the directory of tests, or the specific test you want to run. An example in order to run the tests for all `Array` built-ins, run the following command:

```console
$ ./mach jstests built-ins/Array
```

The jstests has number of useful options, some of them include:

- -s (--show-cmd): Show the exact command line used to run each test.

- -o (--show-output): Print each test’s output.

- --args SHELL_ARGS: Extra arguments to pass to the JS shell.

- --rr Run tests under the rr record-and-replay debugger.

To show more options run

```console
$ ./mach jstests -- -h
```


## **Task 4.1** 

1. Run the tests belonging to `Array.prototype.filter`

2. Make `jstests` output the result of each test within `Array.prototype.filter`

# **4.2** How to test a feature

Tests provide quick and simple functionality to test if previously implemented parts of the specification breaks when new code is added.

Whether or not to implement tests before or after a part of the implementation of _Array Grouping_ is up to the implementor, however tests are mandatory for every new addition to EcmaScript. 


# **4.3** How to implement a test

Imagine some proposal for Ecma-262, the proposal is as follows:
```
Array.prototype.one([,thisArg])
1. return 1
```

This proposal does not have many lines to test, however tests are needed. There are two parts of this proposal that has to be tested:
1. It has to return a number
2. The number has to be one

Now to write the test we create a file `isNumber.js` in the `Array/prototype/` folder. This file will go as follows:

```js
assert(function(){
    return Number.isInteger([].one())
}, "Result of one() is integer")
```

The tests created for Test262 use a binding called `assert`. This binding allows us to assert several different conditions. These are as follows:

- `assert(function => boolean, message)`: Asserts the boolean is true, otherwise displays message if -o is run as test option
- `assert.throws(e, f(){CODE_TO_TEST})`: asserts that the function f returns the error e
- `assert.sameValue(a, b, message)`: asserts that a and b contain the same value.
- `assert.notSameValue(a, b, message)`: asserts that a and b do not contain the same value

It is also important to add a `reportCompare(0,0);` at the end of your test, this will define the exit code expected and the actual exit code if this reportCompare is reached. Ex:

If you want the test to fail explicitly you could write:
```js
if(failedCondition){
    reportCompare(1,0);
}else{
    reportCompare(0,0);
}
```
Where the first argument is the actual exit code and the 2nd is the expected. 


## **Task 4.2.1**

Create a small test, that ensures whether or not our imaginary proposal `Array.prototype.one` returns the value 1. 


## **Task 4.2.2** Testing line 3

Now that you know how to run tests, the best way to learn how to write them is to try.

Line 3 of the specification:
```js
If IsCallable(callbackfn) is false, throw a TypeError exception.
```

Create the folder for `Àrray.prototype.group` in the folder `mozilla-unified/js/src/tests/test262/built-ins/Array/prototype/` and create a test file named appropriately.

Run your test and verify your implementation works so far!

Writing tests for _Array Grouping_ will take place in [Module 8](../Module%208/Module8.md).


## [<--](../Module%203/Module3.md) [-->](../Module%205/Module5.md) 
      
