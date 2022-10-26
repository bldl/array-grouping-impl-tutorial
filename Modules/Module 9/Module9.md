# **9.0** Cleanup

The proposal is implemented and tests have been created. The implementation of _Array grouping_ is now close to being done. 

In order for our code to be up to standards and easily readable in 10 years, we have to ensure it adheres to the "standard" set by Mozilla and Test262.  

# **9.2** Removing debug code

Remove the code added for debugging/testing in the environment. Especially `Test` functions created HAVE to be removed!

# **9.2** Cleaning the implementation

If you are working in Visual Studio Code, it is highly recommended to download JS Linter, this will show trailing newlines and other beutify errors. 

The implementors of new proposals ususally add a comment to each line of their implementation. This comment will contain what line of the specification this expression/code-line should and does adhere to. As can be seen in `Array.js`, some implementors choose to add the entire line of the specification, while others just provide the line number / letter. Historically only the number/letter was added, however new implementations should have the entire line of the specification as a comment. 

Example of spcification comment taken from `ArrayToReversed` in `Array.js`:
```js
  // Step 2. Let len be ? LengthOfArrayLike(O).
  var len = ToLength(O.length);
```

If the implementor has strayed from the original specification, meaning simplified or changed the implementation based on their respective environment, this has to be adressed. In a comment above the strayed line write why the implementation was changed from the specification. Be short and concise. 

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

Clean up the implementation. Check the code syntax with a linter or beutifyer. Add comments with the line of the specification implemented, and any deviation in the implementation. 

# **9.3** Cleaning up Test262 tests and adhering to the contributor rules. 

BlablablabalTestSpecifications!
