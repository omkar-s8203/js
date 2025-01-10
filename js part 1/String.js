/* 
------------String----------------
string is a sequence of character used to represent text

create Stering 
let str= "omkar suryawnshi"

String length 
str.lenght

String Indies
str[0] // o
str[1] // m
str[2] // k
str[3] // a
str[4] // r
str[5] //  // space
str[6] // s
*/

let str = "omkar suryawnshi";
let str1 = 'omkar';

console.log(str);
console.log(str1);

console.log(str.length);
console.log(str1.length);

console.log(str[0]);


/*
----------Template Literals----------------
Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.

'this is a template literal'
*/

let sentence = `this is a template literal`;
console.log(sentence);
console.log(typeof sentence);

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item, "is", obj.price);

let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);