var a=15;
var b=10;

const add=require("./add")
const divide=require("./divide")
const multiply=require("./multiply")
const sub=require("./subtract")

console.log("add:",add.add(a,b));
console.log("div:",divide.divide(a,b));
console.log("mul:",multiply.multiply(a,b));
console.log("sub:",sub.sub(a,b));
