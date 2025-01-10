// comments in js

//This is a single line comment

/*
multi line comments
*/

// console.log("Hello World"); we can write any thing hear it will not be executed

/*
operators in js
used to perform some operations on variables and values
arithmetic operators + - * / % ++ --
assignment operators = += -= *= /= %=
comparison operators == === != !== > < >= <=
logical operators && || !
bitwise operators & | ^ ~ << >> >>>
conditional (ternary) operator ?:
*/

//Arithmetic operators 
console.log("Arithmetic operators");
let a=5;
let b=2;
console.log("a + b = ",a+b); // + is used to add two numbers
console.log("a - b = ",a-b); // - is used to subtract two numbers
console.log("a * b = ",a*b); // * is used to multiply two numbers
console.log("a / b = ",a/b); // / is used to divide two numbers
console.log(a**b); // ** is used to find the power of a number
console.log("a % b = ",a%b); // % is used to find the remainder of a number
console.log("a++ = ",a++); // ++ is used to increment the value of a by 1
console.log("a-- = ",a--); // -- is used to decrement the value of a by 1
console.log("++a = ",++a); // ++ is used to increment the value of a by 1
console.log("--a = ",--a); // -- is used to decrement the value of a by 1


//Asssignment operators
console.log("Asssignment operators");
let x=5; 
let y=2;
x+=y; // x = x + y
console.log("x+=y = ",x);
x-=y; // x = x - y
console.log("x-=y = ",x);
x*=y; // x = x * y
console.log("x*=y = ",x);
x/=y; // x = x / y
console.log("x/=y = ",x);
x%=y; // x = x % y
console.log("x%=y = ",x);

//Comparison operators
console.log("Comparison operators");
let p=5;
let q=2;
console.log("p==q = ",p==q);  // == is used to compare two values
console.log("p===q = ",p===q); // === is used to compare two values and their types
console.log("p!=q = ",p!=q); // != is used to compare two values
console.log("p!==q = ",p!==q); // !== is used to compare two values and their types
console.log("p>q = ",p>q); // > is used to compare two values
console.log("p<q = ",p<q); // < is used to compare two values
console.log("p>=q = ",p>=q); // >= is used to compare two values
console.log("p<=q = ",p<=q); // <= is used to compare two values

//logical operators
console.log("logical operators");
let r=5;
let s=2;
console.log("r && s = ",r && s); // && is used to check if both the conditions are true
console.log("r || s = ",r || s); // || is used to check if any one of the conditions is true
console.log("!r = ",!r); // ! is used to check if the condition is false
console.log("r && !s = ",r && !s); // && is used to check if both the conditions are true
console.log("r || !s = ",r || !s);  // || is used to check if any one of the conditions is true
console.log("!(r && s) = ",!(r && s)); // ! is used to check if the condition is false
console.log("!(r || s) = ",!(r || s)); // ! is used to check if the condition is false
console.log("!(r && !s) = ",!(r && !s)); // ! is used to check if the condition is false
console.log("!(r || !s) = ",!(r || !s)); // ! is used to check if the condition is false

//bitwise operators
console.log("bitwise operators");
let t=5;
let u=2;
console.log("t & u = ",t & u); // & is used to perform bitwise AND operation
console.log("t | u = ",t | u); // | is used to perform bitwise OR operation
console.log("t ^ u = ",t ^ u); // ^ is used to perform bitwise XOR operation
console.log("~t = ",~t); // ~ is used to perform bitwise NOT operation
console.log("t << u = ",t << u); // << is used to perform bitwise left shift operation
console.log("t >> u = ",t >> u); // >> is used to perform bitwise right shift operation
console.log("t >>> u = ",t >>> u); // >>> is used to perform bitwise right shift operation


// conditional (ternary) operator
console.log("conditional (ternary) operator");
let v=5;
let w=2;
let result = (v>w) ? "v is greater than w" : "v is less than w";
console.log(result);



