function forTimeout(x, y) {
    console.log(x + y);
}

function delay(x, y, time) {
    setTimeout(
        function () {
            console.log(this);
            forTimeout(x, y);
        },time)

}

delay(1, 2, 1000);


