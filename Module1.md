# Module 1 (To be named at a later date)

Intro to module

# Installation of Mozilla unified and other required tools

In this module we will be installing, building and testing SpiderMonkey.

The exact steps in the installation process depend on the operating system. We refer the reader to specific instructions as follows:

- [Building Mozilla Firefox on **Linux**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-linux)

- [Building Mozilla Firefox on **Windows**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-windows)

- [Building Mozilla Firefox on **macOS**](https://firefox-source-docs.mozilla.org/setup/linux_build.html#building-firefox-on-macos)

# Running SpiderMonkey

After the installation process, a new folder `mozilla_unified` should appear in the folder your terminal was in when you started the install guide above. 

Navigate to `mozilla_unified` now.

In order to run the SpiderMonkey engine, use the following commands in the `mozilla_unified` folder:

```
$ ./mach build
```
Example of mach build output:

```shell
[user@machine mozilla-unified]$ ./mach build

To view resource usage of the build, run |mach resource-usage|.
 0:03.74 Your build was successful!
To take your build for a test drive, run: |mach run|
```


Now in order to run your finished build, the following command is used
```
$ ./mach run
```
This command will give you a JavaScript live shell. Example:
```shell
js> 
```

It is also possible to run `.js` files in this manner by providing a filename as a parameter in the `./mach run` command.

Doing this will make debugging and testing implementations easier in the future.

Let's create a test file names `helloworld.js` in the mozilla_unified folder, with the following contents
```JS
console.log("Hello World!");
```

Now to use this as the input of our current SpiderMonkey build, we can pass the file as the first argument in the run command. 
```
$ ./mach run example.js

```
This will produce the following output:
```Shell
[user@computer mozilla-unified]$ ./mach run helloWorld.js 
 0:00.52 /home/user/mozilla-unified/obj-x86_64-pc-linux-gnu/dist/bin/js helloWorld.js
Hello World!
```

## Task X

Write a JavaScript script in where you find the first two digit prime. Then run the script using your own SpiderMonkey build. 

Tip: Remember to `console.log()` the output of the program


# Applying patches

In order to continue with this project, we need to remove the existing implementation of `Array.group`.
This can be done by applying the patch provided in this repository. 

[patch.diff](diff_files/project.diff)

1. Download the `project.diff` file in this repository
2. Place it in the folder `mozilla_unified`
3. Run comand:
    ```
    hg import project.diff
    ```
4. Leave the commit message blank and hit Ctrl+s then Ctrl+x (this is only a local operation!)

Now `Array.group` and `Array.groupToMap` should be removed from SpiderMonkey in mozilla_unified. 



# Performing simple changes

The tasks below introduce how to make small changes to the SpiderMonkey engine, and to learn what and where can be changed.

## Task 1

One of the simplest ways to change a built in JavaScript function would be to just change the return value of that function. In this task you should change the return value of the built in `Array.at` function to always return the number 42. 

Tip: Take a look in the builtin folder, located at 
```
mozilla_unified/js/src/builtin
```

## Task 2

Create your own function on one of the builtins of Javascript. 
In this task you are given quite a lot of freedom. It is not relevant what you end up implementing, the important thing is how to hook self hosted code into the .cpp files. 

An example of hooking JavaScript functions into c++ can be seen in `Array.cpp` at line 4571. This then corresponds to the function on line 104 in `Array.cpp` 

A good tip for this task is to take a look at how ArrayAt is hooked in the Array.cpp file. 




# Possible changes might need to be done to this module. 

1. Should we add Searchfox as part of Module 1? Or perhaps that should be Module 2? I really want to make tasks relevant to searcfox just so the user understands what a powerfull tool it is. 

2. More tasks? Or is it enough with all the installation and building SM for the first time? 

