# **9.0** Polish and Cleanup

The proposal is implemented and tests have been created. The implementation of _Array grouping_ is now close to being done. 

In order for our code to be up to standards and easily understandable by future developers, we have to ensure it adheres to the "standard" set by Mozilla and Test262.  

# **9.2** Removing debug code

Since we are close to finished with the implementation, debugging code is no longer needed. Remove any debugging code added during development

# **9.2** Cleaning the implementation

It is highly recommended to download a beautify extension for your IDE. This will allow for trailing newlines and other flaws. 

If you are working in Visual Studio Code, it is highly recommended to download the [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) extension is highly recommended. 

The implementors of new proposals have to add a comment to each part of their implementation. This comment describes what line of the specification this expression/code-line implements. As can be seen in `Array.js`, some implementors choose to add the entire line of the specification, while others just provide the line number / letter. Historically only the number/letter was added, however new implementations should have the entire line of the specification as a comment. 

Example of specification comment taken from `ArrayToReversed` in `Array.js`:
```js
  // Step 2. Let len be ? LengthOfArrayLike(O).
  var len = ToLength(O.length);
```

If the implementor has strayed from the original specification, meaning simplified or changed the implementation based on their respective engine, this has to be addressed. In a comment above the strayed line write why the implementation was changed from the specification. Be short and concise. 

Example of straying from the implementation taken from `ArrayToSorted` in `Array.js`:
```js
  // We depart from steps 5-8 of the spec for performance reasons, as
  // following the spec would require copying the input array twice.
  // Instead, we create a new array that replaces holes with undefined,
  // and sort this array.
  for (var k = 0; k < len; k++) {
    DefineDataProperty(items, k, O[k]);
  }
```

## **Task 9.2.1** Cleaning the implementation

Clean up the implementation. Check the code syntax with a code beautifier. Add comments with the line of the specification implemented, and any deviation in the implementation. 

# **9.3** Cleaning up Test262 tests and adhering to the contributor rules. 

When writing tests for the Test262 test suite we need to adhere to the rules and syntax stipulated in [CONTRIBUTING.MD](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md)

Most importantly is the large header (comment) present at the top of any test file. Examples of how this is written can be found in the test262 tests in SpiderMonkey. Try to find a resent proposal, as there have been changes to the rules set by Test262. 

An example of the header:
```
// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.group
description: Array.prototype.group iterates array-like up to length
info: |
  22.1.3.14 Array.prototype.group ( callbackfn [ , thisArg ] )
  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...
  4. Let k be 0.
  ...
  6. Repeat, while k < len
  ...
includes: [compareArray.js]
features: [array-grouping]
---*/
```
Explain the lines given here: 

**Copyright:** The first two lines are the same in every test, they are the copyright of Ecma International.

**esid:** The EcmaScript ID found in the specification of the proposal.

**Description:** A brief description of what behavior the test is examining. 

**info:** What lines of the specification are being tested.

**includes:** What Test262 features are being used, in the example above the `assert.compareArray` feature is in use.

**features:** What new feature is being tested.

## **Task 9.3.1** Cleaning the tests

Add the header to all the tests implemented for the proposal _Array grouping_. 


## [<--](../Module%208/Module8.md) 
  