// Arrow function 

// 1) No need to use function keyword

// normal function 
function show(){
    console.log("Normal function"); // Normal function
    
}
show()
// arrow function

let view = () => {
    console.log("Arrow function");  // Arrow function
}
view()

// 2) If single parameter consist in arrow funtion the does not need to use parenthisis

// normal function
function show1(a){
    console.log("normal a : ",a); // normal a :  100
}
show1(100)

// arrow function
let view1 = a =>{
    console.log("Arrow function's a : ",a); // Arrow function's a :  2341
} 
view1(2341)

// 3) If arrow function contains single sentence with return parameter then does not need to use return
//    keyword and {} brackets

// normal function
function show3(a){
    return a;
}
console.log(show3(200)); // 200

// arrow function
let view3 = a =>  a;
console.log(view3(500)); // 500

