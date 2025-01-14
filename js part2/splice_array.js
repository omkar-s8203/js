/*
splice: removes / replace / add element in place

splice( stat, deleteCount, iten0...itemN)
*/

let car= ["audi", "bmw", "xuv", "maruti"];

console.log(car.splice(3));
console.log(car.splice(0,1));
// console.log(car.splice())
// console.log()

car.push("xuv");
car.push("farari");

car.splice(1,0, "Omkar");