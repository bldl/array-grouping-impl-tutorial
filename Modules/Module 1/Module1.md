# Module 1: Onboarding and Getting to Know the Tools

Intro to module

Wouldn't this be better on The intro module? Module 0 
TBW: we are reimplementing an existing feature ......... 


# Installation of Mozilla unified and other required tools

In this module we will be installing, building and testing SpiderMonkey.

The exact steps in the installation process depend on the operating system. Before starting the installation. It is recomended to open a termnial and navigating the prefered location for the `mozilla_unified` folder to be stored in the future. 

We refer the reader to specific instructions as follows:

- [Building Mozilla Firefox on **Linux**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-linux)

- [Building Mozilla Firefox on **Windows**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-windows)

- [Building Mozilla Firefox on **macOS**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-macos)

# Running SpiderMonkey

After the installation process, a new folder `mozilla_unified` should appear in the folder the terminal was in when you started the install guide above. 

Navigate to `mozilla_unified`.

In order to run the SpiderMonkey engine, use the following commands in the `mozilla_unified` folder:

```console
$ ./mach build
```
Executing this command will result in the following output:

```console
[user@machine mozilla-unified]$ ./mach build

To view resource usage of the build, run |mach resource-usage|.
 0:03.74 Your build was successful!
To take your build for a test drive, run: |mach run|
```


In order to run the finished build, the following command is used:
```console
$ ./mach run
```
After this, the terminal will enter the JavaScript Read-Eval-Print-Loop mode, whose functionality is similar to a browser's console, and where arbitrary JavaScript code can be executed.
```console
js> 
```
This will be used throughout the tutorial to test our implemenation during development.

It is also possible to execute code stored in `.js` files; this is done by providing a filename as a parameter in the `./mach run` command.
Doing this simplifies debugging and testing the implementations.

As an example, create a file `helloworld.js` in the `mozilla_unified` folder with the following contents:
```JS
console.log("Hello World!");
```
In order to use this file as the input of the current SpiderMonkey build, the file name should be passed as the first argument in the `run` command:

```
$ ./mach run helloworld.js
```


This will produce the following output:
```console
[user@computer mozilla-unified]$ ./mach run helloworld.js 
 0:00.52 /home/user/mozilla-unified/obj-x86_64-pc-linux-gnu/dist/bin/js helloworld.js
Hello World!
```


# Applying patch



The imeplementation of _Array Grouping_ feature (methods `Array.group`, `Array.groupToMap`) already exists within the current nightly build of SpiderMonkey. The code this tutorial is implementing alread exists in the `mozilla_unified` folder you have. We can remove this using the version control software Mercurial. In this tutorial we will not be using Mercurial for anything other than to apply patches. 

Mercurial has the usefull feature of letting the user output the difference between their codebase and the current "head". This feature will be usefull to us for removing the existing implementation, as well to import the solutions to tasks given in each module. 

The patch used to remove _Array Grouping_ feature can be found here:
[`patch_remove_Array-group.diff`](diff_files/patch_remove_Array-group.diff).

How to apply the patch:

1. Download the `patch_remove_Array-group.diff` file in this repository into the `mozilla_unified` folder.
2. Run comand:
    ```
    hg import patch_remove_Array-group.diff -m "Remove pre-existing implementation of Array Grouping"
    ```

At this point, `Array.group` and `Array.groupToMap` should be removed from SpiderMonkey in the `mozilla_unified` folder. 

# How to read a `.diff` file

It will be provided a lot of `.diff` files as "Solutions" for each of the tasks given at the bottom of a module. These can be quite tricky to read, that is what this part of the module will focus on. 

The file `example.diff` file used for this example can be found in [](Resources/example.diff)

Contents of `example.diff`:
```console
diff --git a/js/src/builtin/Array.js b/js/src/builtin/Array.js
--- a/js/src/builtin/Array.js
+++ b/js/src/builtin/Array.js
@@ -5,7 +5,9 @@
 /* ES5 15.4.4.16. */
 function ArrayEvery(callbackfn /*, thisArg*/) {
   /* Step 1. */
-  var O = ToObject(this);
+
+
+  //This is a test comment
 
   /* Steps 2-3. */
   var len = ToLength(O.length);
```

On line 1: 
```console
diff --git a/js/src/builtin/Array.js b/js/src/builtin/Array.js
```
The specific file in which the change has been made is located. The "head" of the folder structure is the `mozilla_unified` folder. 

On lines 2 - 3:
```console
--- a/js/src/builtin/Array.js
+++ b/js/src/builtin/Array.js
```
This indicated that there has been both addition/s and deletion/s to the file `Array.js`

On lines 4 - 14:
```console
@@ -5,7 +5,9 @@
 /* ES5 15.4.4.16. */
 function ArrayEvery(callbackfn /*, thisArg*/) {
   /* Step 1. */
-  var O = ToObject(this);
+
+
+  //This is a test comment
 
   /* Steps 2-3. */
   var len = ToLength(O.length);
```
This is the part of the file `Array.js` where the change was made. 

Line 8 is where there has been a deletion, indicated by the `-` symbol at the beginning of the line. 

Lines 9 - 11 is where these has been additions, indicated by the `+` symbol at the beginning of the lines. 

All the rest are so the change is easier to locate within the codebase. 


# `OPTIONAL:` How to make and import a patch/`.diff` file 

### `NB! This still needs work, to ensure that if changes are made to mozilla central, it doesn't break this method of importing .diff files. Further testing is needed.`

After understanding how to read `.diff` files, it might be purposefull to import them and test them by hand, in order to understand the assignement better. 

The command `hg diff` will show the difference between the local version of SpiderMonkey and the previously committed version. We can use this command to output our current "change" and save it. This is what is refered to as a "patch" further in this tutorial. 

Patches are used in this tutorial to test the solutions provided in `Solutions` of each module. To run one of the solutions provided, the current version of our implementation has to be output to a `.diff` file (So it is not lost). After the current implementation is saved, import the specified solutions `.diff` file. After the behaviour of the solution has been tested. We can import the file we output before. 

Step by step explanation of this process:

1. Run command:
    ```console
    hg diff > my_version.diff
    ```
    - This will output the current difference between the last commit and the local files and place it into the file `my_version.diff`
2. Then we need to refresh our files, this can be done by:
    1. Clear workspace to the up-to date one from mozilla: (WARNING: this will delete your changes if you did not save them in a patch on step 1!):
        ```console
        hg up central -C
        ```
    2. Remove _Array Grouping_ proposal ():
        ```console
        hg import patch_remove_Array-group.diff -m "Remove pre-existing implementation of Array Grouping"
        ```
        This is done to ensure we are on a similar looking version and don't need to include the removal of _Array Grouping_ in all the `.diff` files provided. 
3. Import the solution files 
    ```console
    hg import x.diff
    ```

Test the imported Solution/code provided in the `.diff` file. 

## Import your implementation back:

To get the current implementation back, just do the same method provided above, except skip step 1. 

We don't need to perform step 1 because we already have the patch we just imported saved. 

# Tasks connected to importing patches

## Importing a simple patch
In this task, you are to use the guide provided above to import the file [`import.diff`](Resources/)


# Performing simple changes

The tasks below introduce how to make small changes to the SpiderMonkey engine, and to learn what and where can be changed.

## Task 1


One of the simplest ways to change a built in JavaScript function would be to just change the return value of that function. In this task, change the return value of the built in `Array.at` function to always return the number 42. 

Tip: Take a look in the builtin folder, located at 
```
mozilla_unified/js/src/builtin
```

## Task 2

Create a function on one of the builtins of JavaScript. 
It is irrelevant what this implementation ends up as, the important thing is how to hook self hosted code into the .cpp files.

An example of hooking JavaScript functions into c++ can be seen in `Array.cpp` at line 4571. This then corresponds to the function on line 104 in `Array.cpp`

A good tip for this task is to take a look at how ArrayAt is hooked in the Array.cpp file. 

## Task 3


