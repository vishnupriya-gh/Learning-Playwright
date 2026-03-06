var a;
console.log(a); // Output: undefined
a = 5;
console.log(a); // Output: 5

console.log("------when in Functions-----");
usinghoist();
function usinghoist()
{
    console.log(b);
    var b = "printing the value of b";
    console.log(b);
}
console.log("------when using in let instead of var--------");

console.log(username);
console.log("awesome");
console.log("awesome");
console.log("awesome");

let username = "vishnu";
console.log(username);