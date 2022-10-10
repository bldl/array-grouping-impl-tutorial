# 4.0 Testing during implementation. 

Testing our implementation is important. It ensures all parts of the implementation function according to the specification. 

In this module we will be learning how to run test262 tests as well as implement tests ourselves. 


# **4.1** Running jstests

There are two different test suites built into mach. The one we are interested in is the Test262 suite. This is the tests all EcmaScript engines have to conform to ensure JavaScript is implemented correctly. 

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

# **4.2** Implementing our own tests

Tests are usefull to test if some previous functionality is broken by new additions, or to test a newly written implementation. 

Whether or not to implement tests before or after a part of the implementation of _Array Grouping_ is up to the implementor, however tests are mandatory. 

General guide to writing tests for a new feature in SpiderMonkey:

Go through the specification line by line, and ask yourself the question: "How can this break?". If there exists a scenario in which the line of code can break, or behave unexpected, implement a test for it. 


## **Talk about how tests are written here!**

## **Task 4.2** Testing line 3

Now that you know how to run tests, the best way to learn how to write them is to try.

Line 3 of the specification:
```js
If IsCallable(callbackfn) is false, throw a TypeError exception.
```

Create the folder for `Àrray.prototype.group` in the folder `mozilla-unified/js/src/tests/test262/built-ins/Array/prototype/` and create a test file named appropriately.

Run your test and verify your implementation works so far!

