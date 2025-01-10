/*
Truthy & falsy

Everything in Js is true or false (in boolean context).
This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.

falsy values
false, 0, -0, null, undefined, NaN, (empty string)

Truthy values
Everything else
*/

let a= ""

if(a = true){
    console.log("this is true");
}
else{
    console.log("this is false")
}