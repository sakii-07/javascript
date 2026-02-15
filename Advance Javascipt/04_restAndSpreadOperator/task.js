// Homework on rest and spread operator

/* 1. Create any array with at least 5 elements and make a copy of it using the spread operator.
 Print both arrays.*/
var arr = [10,20,30,40,50]
var copyArr = [...arr]
console.log("Original array : ", arr); // Original array :  (5) [10, 20, 30, 40, 50]
console.log("Copied array : ", copyArr); // Copied array :  (5) [10, 20, 30, 40, 50]


// 2. Create two different arrays and merge them into a single array using the spread operator.
var arr2 = [20,"sakshi",23,22,"saki"]
var arr3 = ["Jagtap",65,87,89]
var arr4 = [...arr2, ...arr3]
console.log(arr4); // (9) [20, 'sakshi', 23, 22, 'saki', 'Jagtap', 65, 87, 89]


// 3. Create an array and add one element at the beginning and one element at the end using the spread operator.
var arr5 = [34,"amruta",98]
var newArr = [90, ...arr5, 56]
console.log(newArr); // (5) [90, 34, 'amruta', 98, 56]


// 4. Create any object with at least 3 properties and create a copy of that object using the spread operator.
var obj = {id:101, name:"sakshi", age:21}
var newObj = {...obj}
console.log("Original object : ",obj); // Original object :  {id: 101, name: 'sakshi', age: 21}
console.log("Copied object : ",newObj); // Copied object :  {id: 101, name: 'sakshi', age: 21}


// 5. Create an object and update one of its properties using the spread operator without modifying the original object.
var obj1 = {id:201, name:"Sakshi", div:"A"}
var obj2 = {...obj1, div:"B"}
console.log("Original object : ", obj1); // Original object :  {id: 201, name: 'Sakshi', div: 'A'}
console.log("Modified object : ", obj2); // Modified object :  {id: 201, name: 'Sakshi', div: 'B'}


/* 6. ⁠Write a function using the rest operator that accepts multiple arguments and prints them as an array.
Call the function with at least 4 values and write the output.*/
function show(...arr6){
    console.log(...arr6); // 43 Divya 98 45
    
}
show(43,"Divya",98,45)


/* 7. Create two objects with at least one common property. Merge them using the spread operator.
Predict which value will be stored for the common property.*/
var obj3 = {id:201, name:"Sakshi", div:"A",city: "Pune"}
var obj4 = {id:301, moNo:"1234567890", city:"Mumbai"}
var mergedObj = {...obj3, ...obj4} // The second object's value will be stored for the common property.
console.log("Merged object",mergedObj); // Merged object {id: 301, name: 'Sakshi', div: 'A', city: 'Mumbai', moNo: '1234567890'}


/* 8. Create an array and use destructuring with the rest operator to separate the first element from the remaining elements.
Print both values.*/
var arr6 = [78,"sam",21,"ram","shyam",78,43]
var [first, ...rest] = arr6
console.log("First element : ", first); // First element :  78
console.log("Rest element : ", rest); // Rest element :  (6) ['sam', 21, 'ram', 'shyam', 78, 43]


/* 9. Write a function where the rest parameter is not placed at the last position.
What error do you get? Explain.*/
function show1(...a,b){
    console.log(...a); // Uncaught SyntaxError SyntaxError: Rest parameter must be last formal parameter
    
}
show1(100,27,"jagtap")

/* Explaination - The rest parameter (...nums) must always be written at the last position in a function. 
This is because JavaScript uses it to collect all the remaining arguments into one array. 
If you put another parameter after the rest parameter, JavaScript gets confused and does not know
which values should go into the rest array and which should go to the next parameter.
That is why it gives an error and says the rest parameter must be last.*/


// 10. Create a function that accepts unlimited numbers using the rest operator and returns their total sum.
function totalSum(...numbers){
    var sum = 0;

    for(var i = 0;i < numbers.length;i++){
        sum = sum + numbers[i]
    }
    return sum;
}
console.log(totalSum(10,20,30,40)); // 100
console.log(totalSum(89,23,12,1)); // 125


// 11. ⁠Use the spread operator to pass array elements as arguments to a function that expects separate parameters.
function add(a, b, c) {
    return a + b + c;
}
var arr7 = [10, 20, 30];
var result = add(...arr7);   // spread operator
console.log("Result:", result); // Result: 60


// 12. ⁠Create an array of numbers and use the spread operator with a Math method to find the maximum number.
var numbers = [78,34,12,43,7,90,45,38,67.10]
var maxNumber = Math.max(...numbers)
console.log("Maximum number : ",maxNumber); // Maximum number :  90

// min number
var minNumber = Math.min(...numbers)
console.log("Minimum Number : ", minNumber); // Minimum Number :  7



// 13. Difference between Spread and Rest operator

/*| Spread Operator (`...`)                      | Rest Operator (`...`)                        |
  | -------------------------------------------- | -------------------------------------------- |
  | Expands elements                             | Collects elements                            |
  | Used while copying or merging arrays/objects | Used in function parameters or destructuring |
  | Breaks array/object into individual values   | Combines multiple values into one array      |
  | Example: `var newArr = [...arr];`            | Example: `function sum(...nums){}`           |*/
