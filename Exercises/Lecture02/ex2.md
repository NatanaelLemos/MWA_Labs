# 54. Written Exercises


## 1.Explain why do we want sometimes to use setImmediate instead of using setTimeout? 

setImmediate results are processed before setTimeout results, so if you have a scenario where you need to show one result first, this is the case.

 It doesn't mean that the setImmediate will run first, it depends on the thread execution, but after executed, the result is processed first.


## 2.Explain the difference between process.nextTick and setImmediate? 

setImmediate delegates the execution to libuv and OS and after finish, it only returns to the execution stack when the stack is empty.

process.nextTick just push the "callback" to the next stack position, but it's still executed by V8 main thread

## 3.Name 10 global modules available in Node environment. 

global.string_decoder,
global.tls,
global.tty,
global.undefined,
global.unescape,
global.url,
global.util,
global.v8,
global.vm,
global.zlib