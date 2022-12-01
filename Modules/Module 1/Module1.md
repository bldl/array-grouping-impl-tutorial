# **1** Onboarding and Getting to Know the Tools

This module will focus on downloading the Mozilla environment, setting up SpiderMonkey for development and introducing most tools used during development. 

# **1.1** Installation of Mozilla unified and other required tools

In this module we will be installing, building and testing SpiderMonkey.

The exact steps in the installation process depend on the operating system. Before starting the installation, it is recommended to open a terminal and navigate to the preferred location for the `mozilla_unified` folder to be stored.

We refer the reader to specific instructions as follows:

- [Building Mozilla Firefox on **Linux**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-linux)

- [Building Mozilla Firefox on **Windows**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-windows)

- [Building Mozilla Firefox on **macOS**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-macos)

The installation will ask what version of Firefox we wish to be building as standard. In this tutorial we will use choice `5: SpiderMonkey JavaScript engine`.

It is not needed to configure Mercurial (`hg`) to commit to Mozilla. During installation, answer no (`n`) to this configuration. 


# **1.2** Running SpiderMonkey

After the installation process, a new folder `mozilla_unified` should appear in the folder the terminal was in when you started the installation guide above. 

Navigate to `mozilla_unified`.

In order to run the SpiderMonkey engine, use the following commands in the `mozilla_unified` folder:

```sh
#Building SpiderMonkey
$ ./mach build
```
Executing this command will result in the following output:

```sh
[user@machine mozilla-unified]$ ./mach build

To view resource usage of the build, run |mach resource-usage|.
 0:03.74 Your build was successful!
To take your build for a test drive, run: |mach run|
```

In order to run the finished build, the following command is used:
```sh
$ ./mach run
```
After this, the terminal will enter the JavaScript Read-Eval-Print-Loop mode, whose functionality is similar to a browser's console, and where arbitrary JavaScript code can be executed.
```sh
js> 
```
This will be used throughout the tutorial to test our implementation during development.

It is also possible to execute code stored in `.js` files; this is done by providing a filename as a parameter in the `./mach run` command.
Doing this simplifies debugging and testing the implementation.

As an example, create a file `helloworld.js` in the `mozilla_unified` folder with the following contents:
```JS
console.log("Hello World!");
```
In order to use this file as the input of the current SpiderMonkey build, the file name (possibly with its path) should be passed as the first argument in the `run` command:

```sh
$ ./mach run helloworld.js
```


This will produce the following output:
```console
[user@computer mozilla-unified]$ ./mach run helloworld.js 
 0:00.52 /home/user/mozilla-unified/obj-x86_64-pc-linux-gnu/dist/bin/js helloworld.js
Hello World!
```


# **1.3** Applying patch

The implementation of _Array Grouping_ feature (methods `Array.group`, `Array.groupToMap`) already exists within the current (as of December 2022) nightly build of SpiderMonkey. The code this tutorial explains how to implement already exists in the `mozilla_unified` folder. In order to re-implement this ourselves, we need to remove this functionality using the version control software Mercurial. In this tutorial, we will not use Mercurial for anything else than to apply this _patch_ (i.e., this modification of code). 

Mercurial allows the user to output the difference between their local codebase and the central version (i.e., "diff"). We will use this feature to remove the existing implementation.

The patch used to remove _Array Grouping_ feature can be found here:
[`patch_remove_Array-group.diff`](./Resources/patch_remove_Array-group.diff).

How to apply the patch:

1. Download the file [`patch_remove_Array-group.diff`](./Resources/patch_remove_Array-group.diff) into the `mozilla_unified` folder.
2. Run command:
    ```sh
    hg import patch_remove_Array-group.diff -m "Remove pre-existing implementation of Array Grouping"
    ```

At this point, `Array.group` and `Array.groupToMap` should be removed from SpiderMonkey in the `mozilla_unified` folder. 


# **1.5** Performing simple changes

The tasks below introduce how to make small changes to the SpiderMonkey engine, and explain what and where can be changed.

### **Task 1.5.1.** The answer is always 42

One of the simplest ways to change a built-in JavaScript function is to change the return value of that function. Your task is to change the return value of the built-in `Array.at` function to always return the number 42. 

Tip: Take a look in the folder `builtin` located at 
```sh
mozilla_unified/js/src/builtin
```

### **Task 1.5.2** More simple changes

Change the functionality of some builtin Object in JavaScript. We are mostly familiar with `Array.js`. However, it is highly recommended to see how the other JavaScript Objects are built. 

Remember to test your implementation by building the engine!


### **Task 1.5.3** Your own function

Create a function on one of the built-ins of JavaScript. 
It is irrelevant what this implementation ends up as, the important thing is how to hook self hosted code into the .cpp files.

An example of hooking JavaScript functions into c++ can be seen in `Array.cpp` at line 4571. This then corresponds to the function on line 104 in `Array.cpp`

A good tip for this task is to take a look at how `Array.at` is hooked in the Array.cpp file. 


## [<--](../../README.md) [-->](../Module%202/Module2.md)                 