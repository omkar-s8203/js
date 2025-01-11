/*
Practice questions
Qs. for the given start stae of an array, change it to final form using method

start: ['january', 'july', 'march', 'august']

final: ['july', 'june', 'march', august]
*/

let months= ["jan", "july" , "march", "augest"];

months.shift();
months.shift();

months.unshift("jun");
months.unshift("july");

console.log(months);