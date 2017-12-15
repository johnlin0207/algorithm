//迭代改变一个对象中的所有值为0
let obj={a:1,b:{c:2,d:{e:3,f:4},g:6},h:7};
//console.log(Object.keys(obj));//[a,b,h]
let f=(obj)=>{
    //Object.keys()方法用于返回一个数组或对象中的第一层的key值,数组的key从0开始
    Object.keys(obj).forEach((key,index)=>{
        if(typeof obj[key]==='object'){
            f(obj[key])
        }else if(typeof obj[key]==='number'){
            obj[key]=0;
        }
    });
};
f(obj);
console.log(obj);//{ a: 0, b: { c: 0, d: { e: 0, f: 0 }, g: 0 }, h: 0 }