// Destructing of array
`Array destructuring is a way to extract values from an array and assign them to variables`

var arr = [10,20,30,40]

var [num1,num2,num3,num4] = arr; 
console.log(num1); // 10
console.log(num2); // 20
console.log(num3); // 30
console.log(num4); // 40

var [num1,,,num4] = arr;
