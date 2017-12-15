let pow=(base,c)=>base*((--c>1)?pow(base,c):base);

console.log(pow(2,4));