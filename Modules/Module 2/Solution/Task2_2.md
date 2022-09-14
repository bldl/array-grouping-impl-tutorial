The ? means essentially the same as:

    1. Assert: argument is a Completion Record.
    2. If argument is an abrupt completion, return Completion(argument).
    3. Else, set argument to argument.[[Value]].

A completion record is explained [here](https://tc39.es/ecma262/#sec-completion-record-specification-type)

It essentially means if the completion record is considered abrupt, the line should return Completion of said argument. Else the argument should be set to the value of argument. 
