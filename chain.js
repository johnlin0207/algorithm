
var Foo=function(arg){
    this.arg=arg;
    this.add=function(arg1){
        this.arg++
        return this
    };
    this.multiply=function(arg2){
        this.arg*=arg2;
        return this
    }

};

var f1=new Foo(2);
var re=f1.add(1).multiply(2).multiply(3).arg;
console.log(re);