//get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身
// （即this关键字指向的那个对象），其中最后一个参数可选。

//******1.Proxy的get方法实例******
var person1 = {
    name: "张三"
};

var proxy = new Proxy(person1, {
    get: function (target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});
//proxy.name // "张三"
//proxy.age // 抛出一个错误


//******2.下面的例子使用get拦截，实现数组读取负数的索引******
let createArray = (...array) => {

    let handler = {
        get(target, prop) {

            let index = Number(prop);
            if (index < 0) {
                prop = target.length + index;
            }

            return Reflect.get(target, prop);
        }

    };

    let target = [];
    target.push(...array);
    return new Proxy(target, handler);
};

//利用createArray函数定义过滤规则
let arr = createArray('a', 'b', 'c', 'd');
//console.log(arr[-1]); //'d'


//******3.将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作******
let pipe = (value) => {
    let methods = [];
    let proxy = new Proxy({}, {

        //target对象每一次调用方法或属性都会执行一次get拦截
        get(pipeObj, prop) {

            //若此轮prop为‘get’意味着这个对象的属性或方法调用完毕，可以执行
            if (prop === 'get') {
                //return最终结果
                return methods.reduce(function (val, fn) {
                    return fn(val);

                }, value)
            }
            methods.push(fn[prop]);
            return proxy
        }
    });
    return proxy;
};

let fn = {};
fn.double = n => n * 2;
fn.pow = n => n * n;

// proxy实例调用属性或方法会进入拦截器
// 对于以上程序，pipe(5)得到一个初始值为5的proxy实例，'.double'会调用proxy的get方法，将'double'获取为get方法的prop参数
// 并将'double方法'存储为一个名为methods的Function数组，最后直到遇到调用'get方法'开始通过reduce依次执行methods里的方法。
//console.log(pipe(5).double.pow.get);


//set
//set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选
//******4.set一个属性******
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // 对于满足上述age条件的以及age以外的属性，直接保存
        obj[prop] = value;
    }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age);


//apply()
//apply方法拦截函数的调用、call和apply操作。若Proxy实例的第二个参数对象handler中有apply方法，则不会去执行其他方法而只去执行apply定义的方法，因为
//call,apply等调用被定义的apply方法拦截
//******5.下面例子中的target方法未执行被拦截，转向去执行handler中的apply方法******
var target = function () { return 'I am the target'; };
var handler = {
    apply: function () {
        return 'I am the proxy';
    }
};

var p = new Proxy(target, handler);

p();
// "I am the proxy"