# 54. Written Exercises


## 1.Explain why do we want sometimes to use setImmediate instead of using setTimeout? 

setImmediate results are processed before setTimeout results, so if you have a scenario where you need to show one result first, this is the case.

 It doesn't mean that the setImmediate will run first, it depends on the thread execution, but after executed, the result is processed first.


## 2.Explain the difference between process.nextTick and setImmediate? 

setImmediate is executed with default priority in the "check" state of the event loop, which means it will be pushed in the end of the queue and only executed in the next iteration.

process.nextTick has more priority because in the end of the event loop all the "nextTick" queue is executed, it provides more efficiency but is dangerous because it can block I/O.

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
