// data types : 1) var
`1) If we declare any variable then we can redeclare and reasign value`
var a = 100
var a = 200
console.log(a); // 200

`2) Scope is function level and we can access variable before declaration`
b = 100
var b;
console.log(b); // 100

`3) globle level - attach to the window`
window.a
        
// 2) let
`1) We can not re-declare variable but re-asign the value`
let c = 100;
c = 500;
console.log(c); // 500
        
`2) scope is block level and we can not access variable before declaration`
d=300;
let d;
console.log(d); // Uncaught ReferenceError: Cannot access 'd' before initialization
        
`3) local level - can not attach to the window`
window.c // 02_Datatypes.html:25 Uncaught TypeError: window.a is not a function


// 3) const
`We can not re-declare variable and re-asign the value`
const e = 21
    