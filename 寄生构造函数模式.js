function Person(name, job) {
    var o = new Object();
    o.name = name  ;
    o.job = job ;
    o.sayName = function() {
        console.log(this.name)
    } ;
    return o
}
var person1 = new Person('Jiang', 'student') ;
person1.sayName();
