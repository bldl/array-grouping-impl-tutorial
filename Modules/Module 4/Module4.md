# 4.0 Testing during implementation. 

Testing our implementation is important. It ensures all parts of the implementation function according to the specification. 

In this module we will be learning how to run Test262 tests, as well as implement tests ourselves. 


# **4.1** Running jstests

There are two different test suites built into SpiderMonkey. The one we are interested in is the Test262 suite. This is the tests all EcmaScript engines have to conform to ensure JavaScript is implemented correctly. 

Tests from the Test262 test suite are located in `mozilla-unified/js/src/tests/test262`. Mostly we are interested in the folder `built-ins`, as this is where the tests for `Array` are located. 

To run a test from Test262:

```console
$ ./mach jstests TEST_PATH_SUBSTRING 
```

`TEST_PATH_SUBSTRING` means the path to either the directory of tests, or the specific test you want to run. An example in order to run the tests for all `Array` builtins, run the following command:

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

Tests are usefull to test if some previous functionality is broken by new additions, or to test a newly written implementation. 

Whether or not to implement tests before or after a part of the implementation of _Array Grouping_ is up to the implementor, however tests are mandatory. 

General guide to writing tests for a new feature in SpiderMonkey:

A general way to implement tests for a feature in SpiderMonkey, is to make a test for every line in the specification where one could imagine that something could break or behave unexpected.


# **4.3** How to implement a test

Imagine some imaginary proposal for EcmaScript, the proposal is as follows:
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
- `assert.throws(e, f(){CODE_TO_TEST})`: assers that the function f returns the error e
- `assert.sameValue(a, b, message)`: asserts that a and b contain the same value.
- `assert.notSameValue(a, b, message)`: asserts that a and b do not contain the same value

It is also important to add a `reportCompare(0,0);` at the end of your test, this will define the exit code expected and the actual exit code if this reportCompare is reached. Ex:

If you want the test to fail explicitely you could write:
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

# **4.3** MAIN TASK

Consider the lines 1,2,4 and 5 in the specification of `Array.prototype.groupBy`, write down what are possible mistakes that can happen in the implementation. 

Consider how to test if these mistakes have happened.

Write tests for the lines 1-5 you implemented in Module 2. 

Consider whether all lines have to be tested, or some are considered "foolproof"


## [<--](../Module%203/Module3.md) [-->](../Module%205/Module5.md) 
      
