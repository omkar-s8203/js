let age = 24;
console.log(age);
console.log(typeof age);

let price = 12.5;
console.log(price);
console.log(typeof price);
// number can be of any type either +ve or -ve, integer or float

let name = "omkar suryawanshi";
console.log(name);
console.log(typeof name);

// boolean
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);


let a = null;
console.log(a);
console.log(typeof a);

let b;
console.log(b);
console.log(typeof b);


//this are used rearly in js
let x = BigInt(12345678990);
console.log(x);
console.log(typeof x);

let y = Symbol("hello");
console.log(y);
console.log(typeof y);


//non premitive data types


//ceaation on object
const student = {
    fullName: "omkar suryawanshi",
    age: 20,
    cgpa: 8.5,
    ispassed: true
};

console.log(student);
console.log(typeof student);

console.log(student.fullName);
console.log(student.age);

student["age"]= student.age + 1;
console.log(student.age);


//create a const object called product to store the following data
//name: "marker"
//price: 15
//stock: 100
//isAvailable: true

const product = {
    name: "marker",
    price: 15,
    stock: 100,
    isAvailable: true
};

console.log(product);


// create a const object called profile to strore information showun in picture
//uername: "diksha_k8203"
// post: 4
// followers: 191
// following: 210
// name: "omkar suryawanshi"
// bio: "Software Developer"

const profile = {
    username: "Omkar_s8203",
    post: 4,
    followers: 191,
    following: 210,
    name: "omkar suryawanshi",
    bio: "Software Developer"
};

console.log(profile);
