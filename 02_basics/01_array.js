const myArr = [2,5,6,7,3,9];
const myHeroos = ["Ratan tata","Ambhani"]
console.log(myArr[1]);

myArr.push(10)
myArr.pop()

myArr.unshift(9)
myArr.shift()

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log("C ", myArr);
console.log(myn2);




