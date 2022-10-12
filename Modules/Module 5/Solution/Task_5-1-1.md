One improvement would be instead of creating these {key, [elements]} pairs, we can just immedietly put them directly into a JavaScript Object.

Doing this allows the removal of the entire step 8.

Then step 5 becomes equal to step 7 where we create an ordinary js object. 

Then instead of using the List in step 6, we use the "obj" variable we just created. 
