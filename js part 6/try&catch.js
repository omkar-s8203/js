/**
 * Try & Catch 
 * The try statement allows you to define a block of code to be tested for errors while it is being executed. 
 * 
 * the catch statement allows you to define a block of code to be executed, if error occurs in the try block.
 */

let a= "omkar";
console.log("before error occurs.")
try{
    console.log(i);
    console.log(a);
    console.log(p);
}catch(err){
    console.log("erroe occurs");
    console.log(err);
}

console.log("code run after the errors occcurs");