
//******1.基本例子******
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = helloWorldGenerator();
//console.log(hw.next()); // { value: 'hello', done: false }
//console.log(hw.next()); // { value: 'world', done: false }
//console.log(hw.next()); // { value: 'ending', done: true }


//******2.next()******传参的问题
function* foo(x){
    let y=2*(yield (x+1));
    let z=yield(y/3);
    return (x+y+z)
}

let a=foo(5);
//第二次调用next()时传的参数是空，则yield(x+1)变为undefined，第三次调用同理
// console.log(a.next()); //{ value: 6, done: false }
// console.log(a.next()); //{ value: NaN, done: false }
// console.log(a.next()); //{ value: NaN, done: true }

let b=foo(5);
//每次调用next(arg)都会将上个yield的值变成这个arg，因此第一次调用next时不需要传参，传了也是无效
console.log(a.next()); //{ value: 6, done: false }
console.log(a.next(12)); //{ value: 8, done: false }
console.log(a.next(13)); //{ value: 42, done: true }