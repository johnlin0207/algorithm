
function a(callback,arg){
    //console.log(1);
    callback(arg);
}

function callback(x){
    //console.log(x);
}

a(callback,2);

var time=false;
//计时完成调用回调函数
function c(time,callbackfn){
    if(time===true){
        callbackfn();
    }

}

setTimeout(function(){c(true,callbackfn)},1000);
var callbackfn=function(){console.log(1233333)};