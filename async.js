//******1******
//async函数语法上类似Generator函数，执行完async函数会返回一个Promise对象
//因此若想要接收到async函数返回的结果就必须采用then方法，例如
async function f1(){

    return 'Hello world'
}

f1().then(console.log); //'Hello world'
//当然async函数里边抛出的错误同样可以利用then的第二个回调函数接收


//******2******
//只有当async里所有的await后的操作完成后或者return或'rejected'后才会退出Promise执行then方法
//yield命令后面只能是Thunk函数或Promise对象，而async函数的await命令后面，可以是 Promise
//对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    return value
}

asyncPrint('hello world after 500 miliseconds', 500).then(console.log);


//******3******
//await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象
async function f2(){

    return await 123
}

f2().then(console.log);


