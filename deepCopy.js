let util = ( ()=> {

    //获取数据类型
    let getType=(obj)=> {
        let type = Object.prototype.toString.call(obj);
        return /object\s(.*)]/.exec(type)[1];
    };

    let isType=(obj, type)=>{
        obj = getType(obj).toLowerCase();
        return obj === type;
    };

    return {
        isType: isType
    }

})();

//将obj对象传入，return一个复制后的对象出来
let deepCopy = (obj1) => {

    //若类型不是object或类型是null类型，直接输出
    if (typeof obj1 !== 'object' || obj1 === null) {
        return obj1
    }

    //若类型是object
    let i;
    //根据目标是Array类型还是object来设置目标参数的类型
    let target = util.isType(obj1, 'array') ? [] : {};
    for (i in obj1) {
        //判断当前复制的对象是否为对象类型数据
        if (typeof obj1[i] === 'object') {

            deepCopy(obj1[i]);
        }
        target[i] = obj1[i]
    }
    return target
};

let a1=function(){console.log(111111);};
let b1=deepCopy(a1);
console.log(b1);
b1();
a1=function(){console.log(22222);};
b1();