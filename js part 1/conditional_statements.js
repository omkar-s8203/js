//  conditional statements



// ------------------if statement-------------------
let age = 15;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

let mode= "dark";
let color;

if(mode=="dark"){
    color="black";
}

if(mode=="light"){
    color="white";
}

console.log(color);

// ------------------if else statement-------------------
// odd evn number
let num = 10;
if(num%2==0){
    console.log("Even number");
}else{
    console.log("Odd number");
}

// else if statement
let day = "monday";
if(day=="sunday"){
    console.log("Today is holiday");
}else if(day=="saturday"){
    console.log("Today is holiday");
    }else{
        console.log("Today is working day");
    }
    
if (mode === "dark") console.log("dark mode");

// Tarnery operator
// condition ? true : false;

let agee = 25;
let result = agee >= 18 ? "adult" : "child";
console.log(result);

let num1 = prompt("Enter your age");

if(num1>=18){
    console.log("You are eligible to vote");
}