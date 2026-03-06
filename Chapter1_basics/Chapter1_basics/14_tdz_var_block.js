var x = "global";
if(true) {
    console.log(x);
    var x = "block";
    console.log(x); // "block"
}
console.log(x); // "global"
