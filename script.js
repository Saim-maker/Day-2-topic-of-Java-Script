// Data Types
let a = 10;
let b = true;
let c = 20.4;
let d = "Saim";
let e;

// let -> block scoped
// var -> functon scoped
console.log(f);   // So is the temporal dead zone beacuse it access before it initize/declare
let f = 10;


console.log(g);
var g = 3;       //TDZ only happen with let and const not with var
