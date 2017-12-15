var test={
    Name:'John',
    Age:22,
    get name(){return this.Name},
    set age(age){this.Age=age},
    get age(){return this.Age}
}

test.name; //"John"
test.age; //22

//set readonly props is invalid
test.name='aaa';
test.name; //"John"

//set setable props is ok
test.age=23;
test.age; //23