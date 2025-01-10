// loops in js
// loops are used to execute a block of code multiple times
// types of loops in js
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop
// 6. for each loop

// 1. for loop
// syntax
// for(initialization; condition; increment/decrement){
//     // code to be executed
// }
// example
console.log("for loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while loop
// syntax
// while(condition){
//     // code to be executed
// }
// example

console.log("while loop");
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }

// 3. do while loop
// syntax
// do{
//     // code to be executed
// }while(condition);
// example
console.log("do while loop");
let j = 0;
do{
    console.log(j);
    j++;
}
while(j<5);

// 4. for in loop
// syntax
// for(variable in object){
//     // code to be executed
// }
// example
console.log("for in loop");
let person = {fname:"John", lname:"Doe", age:25};
let text = "";
for(let x in person){
    text += person[x] + " ";
}
console.log(text);

// 5. for of loop
// syntax
// for(variable of object){
//     // code to be executed
// }
// example
console.log("for of loop");
let cars = ["BMW", "Volvo", "Mini"];
let text1 = "";
for(let x of cars){
    text1 += x + " ";
}
console.log(text1);


// 6. for each loop
// syntax
// array.forEach(function(currentValue, index, arr), thisValue)
// example
console.log("for each loop");
let fruits = ["apple", "orange", "mango"];
fruits.forEach(myFunction);
function myFunction(value){
    console.log(value);
}

// or we can write it as
fruits.forEach(function(value){
    console.log(value);
});

