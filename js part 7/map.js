/**
 * Map 
 * 
 * let newArr = arr,map(some function definationor name);
 * 
 */


let arr1 = [1,2,3,4];

let double = arr1.map((el)=> {
    return el*2;
});

console.log(double);


let students = [
    {
        name: "Omkar",
        marks: 25,
    },
    {
        name: "Aryan",
        marks: 57,
    },
    {
       name: "pranav",
       marks: 44,
    }
];

let gpa = students.map((el) => {
return el.marks/10;
});

console.log(gpa);