//Two ways to traverse(遍历) an Object

//'for/in' using to traverse an Object
let obj1 = {a: 1, b: 2, c: 3};
for (let key in obj1) {
    //console.log(key, obj1[key])
}

//'for/of' using to traverse an Array
let obj2 = {a: 1, b: 2, c: 3};
for (let key of Object.keys(obj2)) {
    //console.log(key,obj2[key])
}

// Object.values()方法直接取对象中的值，返回一个数组。此方法在该IDE中暂时不支持
// let obj = {a: 1, b: 2, c: 3}
// console.log(Object.values(obj));
// Object.values(obj).forEach(value=>console.log(value))

//解构赋值取对象中的值
// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// };
//
// let { id, status, data } = jsonData;
// console.log(id,status,data);

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
//let map=[['first','hello'],['second', 'world']];
for (let [key, value] of map) {
    //console.log(key + " is " + value);
}

//fromCodePoint
//console.log(String.fromCodePoint(0x78, 0x1f680, 0x79));

//ES6 为字符串添加了遍历器接口
for (let codePoint of 'foo') {
    //console.log(codePoint)
}

let printOut=(N)=>{
    if(N>=10){
        printOut(N/10)
    }
    console.log(N%10);
};

printOut(111)