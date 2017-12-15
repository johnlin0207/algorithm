function A() {
    this.getM = function () {
        console.log(this.msg)
    }
}

function B() {
    this.setM = function (msg) {
        this.msg = msg
    }
}

let a = new A();
let b = new B();

b.setM.call(a, '传递给a对象的参数'); //让a对象直接使用b对象的setM方法，此时的b.setM()方法的上下文是a实例
a.getM(); //传递给a对象的参数


//将f2放到f1的上下文中执行，或者说让f1调用f2的方法
function f1(n){
    this.num=n;
}

function f2(){
    console.log(this.num);
}
f2.call(f1(1)); //1