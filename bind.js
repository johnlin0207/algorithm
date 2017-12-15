
//bind()给某个函数设定执行的上下文环境，类似于call/apply中第一个参数
let obj={
    a:1
};
var a=5;

function getnum(){
    console.log(this.a);
}
getnum(); //5

var newfn=getnum.bind(obj);
newfn(); //1
