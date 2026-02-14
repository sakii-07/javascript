 // use strict
"use strict" // enables strict mode, which helps catch errors and prevents unsafe coding practices like using undeclared variables


// Default parameter
function show(){
    console.log(a+100) // gives error - Uncaught ReferenceError: a is not defined at show (basics.html:15:29)                                  
}

function display(a=0){
    console.log(a+100); // 100
}
display()

// String literal enhancement

// 1) backticks (` `) are used to represent multiline string
// 2) ${ } - insert a variable or expression into a string
var name = "sakshi"
console.log(`My name is ${name }`); // My name is sakshi
            
   