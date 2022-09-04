# Task X
Expected output:
```shell
[user@machine mozilla-unified]$ ./mach run helloWorld.js 
 0:00.53 /home/user/mozilla-unified/obj-x86_64-pc-linux-gnu/dist/bin/js taskX.js
11
```

# Task 1

hg diff file can be found under "task1.diff" in the same folder


```shell
[user@machine mozilla-unified]$ ./mach run helloWorld.js 
 0:00.53 /home/user/mozilla-unified/obj-x86_64-pc-linux-gnu/dist/bin/js 
js> [1,2,3].at(1)
42
```