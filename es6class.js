function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

let p = new Point(1, 2);
//console.log(p.toString()); // "(1, 2)"

//等价于
class _Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}

//用assign()向class类或原型添加方法
Object.assign(_Point.prototype,{
   isOk(){console.log('it \'s ok!')}
});

let p1=new _Point(3,4);
//console.log(p1.toString());
//p1.isOk();

