# Module 1 (To be named at a later date)

## Installation of Mozilla unified and other required tools

In this module we will be installing, building and testing SpiderMonkey.

The exact steps in the installation process depend on the operating system. We refer the reader to specific instructions as follows:

- [Building Mozilla Firefox on **Linux**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-linux)

- [Building Mozilla Firefox on **Windows**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-windows)

- [Building Mozilla Firefox on **macOS**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-macos)

# Running SpiderMonkey

After the installation process, a new folder `mozilla_unified` should appear in ... WHERE?

In order to run the SpiderMonkey engine, use the following commands:

```
$ ./mach build
```

SHOW HERE SOME LAST LINES OF THE OUTPUT BY MACH

```
$ ./mach run
```

SHOW HERE SOME LAST LINES OF THE OUTPUT BY MACH

It is also possible to run `.js` files in this manner by providing a filename as a parameter in the run command.

WRITE EXAMPLE SNIPPET HERE

Doing this will make debugging and testing implementations easier in the future.


```JS
// file: example.js
console.log("Hello world!");
```
```
$ ./mach run example.js -> Hello world!
```

WHAT DOES HAPPEN HERE EXACTLY WITH THE HELLO WORLD OUTPUT?

# Applying patches

In order to continue with this project, we need to remove the existing implementation of `Array.group`.
This can be done by applying the patch provided in this repository. MENTION LINK OR SOMETHING

1. Download the `project.diff` file in this repository
2. Place it in the folder `mozilla_unified`
3. Run comand:
    ```
    hg import project.diff
    ```

Now `Array.group` and `Array.groupToMap` should be removed from your codebase. NOT EXACTLY THE CODEBASE THOUGH? MAYBE TRY TO BE MORE PRECISE

# Performing simple changes

The tasks below introduce how to make small changes to the SpiderMonkey engine, and to learn what and where can be changed.

## Task 1

Ola wants to change the way Arrays function. He has recently read "A hitchiker's guide to the galaxy" and he wants any use of the Array.at() function to return the number 42 every time. Because that is always the answer in his mind. 
TRY TO REWRITE WITHOUT THE STORY ABOUT OLA ETC.

Tip: Take a look in the builtin folder, located at 
```
mozilla_unified/js/src/builtin
```

## Task 2

Create your own function on one of the builtins of Javascript. 
In this task you are given quite a lot of freedom. It doesn't really matter what you end up implementing, the important thing is how to hook self hosted code into the .cpp files. 

A good tip for this task is to take a look at how ArrayAt is hooked in the Array.cpp file. 



