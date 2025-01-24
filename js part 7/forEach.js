/**
 * forEach
 * 
 * arr.forEAch(some function defination or name);
 */

let arr = [1,2,3,4,5,"Omkar" , "jayesh"];


let arro = [
    {
        name: "Omkar",
        marks: 25
    },{
        name: "Aryan",
        marks: 57
    },{
       name: "pranav",
       marks: 44 
    }
];

// function print(el){
//     console.log(el);
// }

// arr.forEach(print);


arro.forEach(function (el){

    console.log(el)
});