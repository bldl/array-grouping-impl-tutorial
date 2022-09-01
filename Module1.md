# Module 1: Onboarding and Getting to Know the Tools

Intro to module

TBW: we are reimplementing an existing feature .........


# Installation of Mozilla unified and other required tools

In this module we will be installing, building and testing SpiderMonkey.

The exact steps in the installation process depend on the operating system. We refer the reader to specific instructions as follows:

- [Building Mozilla Firefox on **Linux**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-linux)

- [Building Mozilla Firefox on **Windows**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-windows)

- [Building Mozilla Firefox on **macOS**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-macos)

# Running SpiderMonkey

TBW: Navigate to the folder ........

After the installation process, a new folder `mozilla_unified` should appear in the folder the terminal was in when you started the install guide above. 

Navigate to `mozilla_unified`.

In order to run the SpiderMonkey engine, use the following commands in the `mozilla_unified` folder:

```
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
```
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


# Applying patches

TBW: what a patch is?....

In order to remove the existing implementation of the _Array Grouping_ feature (methods `Array.group`, `Array.groupToMap`  TODO: FIXME!),
apply the patch [`patch.diff`](diff_files/patch.diff). TODO: rename

1. Download the `patch.diff` file in this repository into the `mozilla_unified` folder.
2. Run comand:
    ```
    hg import patch.diff -m "Remove pre-existing implementation of Array Grouping"
    ```

At this point, `Array.group` and `Array.groupToMap` should be removed from SpiderMonkey in the `mozilla_unified` folder. 

TBW: explain what and where we removed and not removed


TBW: ... explain how to add general patches ... (also about uncommited changed)


# Performing simple changes

The tasks below introduce how to make small changes to the SpiderMonkey engine, and to learn what and where can be changed.

## Task 1

TODO: avoid "you" etc.

One of the simplest ways to change a built in JavaScript function would be to just change the return value of that function. In this task you should change the return value of the built in `Array.at` function to always return the number 42. 

Tip: Take a look in the builtin folder, located at 
```
mozilla_unified/js/src/builtin
```

## Task 2

Create your own function on one of the builtins of JavaScript. 
In this task you are given quite a lot of freedom. It is not relevant what you end up implementing, the important thing is how to hook self hosted code into the .cpp files.

An example of hooking JavaScript functions into c++ can be seen in `Array.cpp` at line 4571. This then corresponds to the function on line 104 in `Array.cpp` 

A good tip for this task is to take a look at how ArrayAt is hooked in the Array.cpp file. 




# Possible changes might need to be done to this module. 

1. Should we add Searchfox as part of Module 1? Or perhaps that should be Module 2? I really want to make tasks relevant to searcfox just so the user understands what a powerful tool it is. 
MIKBAR: YES.

2. More tasks? Or is it enough with all the installation and building SM for the first time? 

