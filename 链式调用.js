//传统不用this关键字的高耦合方式
let fn = {};

fn.set = (n) => {

    return {
        get: function () {

            return n * 2
        }
    }
};

//console.log(fn.set(2).get()); //4


//使用return this的低耦合调用方式
let fn1=new Function;
fn1.prototype={

    set:function(value){
        this.value=value;
        return this;
    },
    get:function(){
        return this.value*2
    }

};
let newFn1=new fn1();
//console.log(newFn1.set(10).get());

function Cat(){
    this.name='it is a cat'
}

function Animal(){
    this.age=22
}

Cat.prototype=Animal.prototype;
//var cat1=new Cat(); //cat1.age是undefined
Cat.prototype.constructor=Cat;
var cat1=new Cat();


var F = function(){};
function Parent(){this.age=30}
function Child(){this.age=22}
F.prototype = Parent.prototype;
Child.prototype = new F();
Child.prototype.constructor = Child;
Child.uber = Parent.prototype;
//console.log(Parent.name);

var a={a:1,b:{c:1,d:2},e:4};
var b={};
for(var i in a){
    b[i]=a[i]
}
//console.log(b);
console.log([1,{a:1},3]);