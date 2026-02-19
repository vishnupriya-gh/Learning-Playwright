// var
console.log("------- var -----");
var a = 10; //Global scope
console.log(a);
printValue(); 

function printValue()  
{   
    var a =20; //local scope
    console.log(a);
    if(true){
        var a = 30;
        console.log(a);
    }
    console.log(a);
}

// const
console.log("------- let -----");
let b = 10; //Global scope
console.log(b);
printValuelet(); 

function printValuelet()  
{   
    let b =20; //local scope
    console.log(b);
    if(true){
        let b = 30;
        console.log(b);
    }
    console.log(b);
}

console.log("------- let -----");

console.log(pi);
const pi = 3.14;
console.log(pi); //ReferenceError: Cannot access 'pi' before initialization
