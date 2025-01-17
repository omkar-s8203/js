/**
 * Object Literals
 * 
 * ?Used to store keyed collection & complex entities.
 * 
 * proprty => (key, value) pair
 * 
 * objects are a collection of property
 */

// declaration of object literal
let student ={
    name: "omkar",
    age: 20,
    marks: 68.8,
    city: "Delhi"
};

/**
 * Output
 student
{name: 'omkar',
 age: 20, 
 marks: 68.8, 
 city: 'Delhi'}


 age: 20
 city: "Delhi"
 marks: 68.8
 name: "omkar"
 [[Prototype]]: Object
typeof(student)
'object' */

const item = {
    price: 10.1,
    discount: 2,
    color: ["red", "pink"]
};     

console.log(item.price);
console.log(item.color[0]);
console.log(item.color[0]);
