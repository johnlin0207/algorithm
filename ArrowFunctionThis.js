
function foo1() {
    let that = this;
    (function() {
        console.log(that); //that in here means obj1
        console.log("id:", this); //'this' in here means window || global
    })()
}

let obj1 = {
    id: 'obj',
    foo: foo1
};

//obj1.foo();
//foo1.call( { id: 42 } );

let obj2 = {
    id: 'obj',
    foo: function(){
        console.log(this); //'this' in here means obj2
    }
};

//obj2.foo();

function foo2() {
    var that = this;
    setTimeout(function () {
        console.log("id:", that); //'that' here means object {id:42}
    }, 100);
}

//foo2.call( { id: 42 } );

//箭头函数里边的this指这个函数运行时所处的上下文
function foo3() {
    let that=this;
    setTimeout(() => {
        console.log(that);
        console.log("id:", this.id); //'this' in here means object {id:42}
    }, 100);
}

foo3.call({id: 42});