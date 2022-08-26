# Module 1 (To be named at a later date)

## Installation of Mozilla unified and other required tools

In this module we will be installing, building and testing SpiderMonkey.

Depending on your operating system there might be some differences. Please follow the link corresponding to your operating systdsem.


### [Linux](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-linux)

### [Windows](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-windows)

### [macOS](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-macos)

# Running SpiderMonkey

Now you should have a folder named "mozilla_unified".

As stated in the guide by Mozilla. Running the SpiderMonkey engine goes as follows. 

```
$ ./mach build
```
```
$ ./mach run
```

You can also run .js files in this manner. By supplying the file as a parameter in the run command. 

Doing this will make debugging and testing implementations easier in the future

example.js:
```JS
console.log("Hello world!");
```
```
$ ./mach run example.js -> Hello world!
```

# Applying patch

In order to continue with this project, we need to remove the existing implementation of Array.group. This can be done by applying the patch provided in this repository. 

1. Download the project.diff file in this repository
2. Place it in mozilla_unified folder
3. Run comand:
    ```
    hg import project.diff
    ```

Now Array.group and Array.groupToMap should be removed from your codebase. 

# Performing changes

In order to learn how SpiderMonkey works and how to make changes, trying is important. The tasks for this module will focus on making small changes to learn where and what is possible to do. 

## Task 1

Ola wants to change the way Arrays function. He has recently read "A hitchiker's guide to the galaxy" and he wants any use of the Array.at() function to return the number 42 every time. Because that is always the answer in his mind. 

Tip: Take a look in the builtin folder, located at 
```
mozilla_unified/js/src/builtin
```

## Task 2

