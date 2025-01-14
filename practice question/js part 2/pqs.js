/*
for the given start of an array , change it to final form using splice
start: ['jan',"july", "march", "august"]
final: ["july", "june", "march", "august"]
*/

let months = ["january" , "july", "march","august"];
months.splice(0,2,"july","june");


// (4) ['july', 'june', 'march', 'august']    output-----------


let lang = ['c','c++','html','js', 'python' , 'java', 'c#', 'sql'];

// lang.reverse();
console.log(lang.reverse(),lang.indexOf("js"));




// if(lang.reverse()==true){
//     console.log(lang.indexOf("js"));

// }