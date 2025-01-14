/*
Qs2.WriteaJavaScriptprogramtogetthelastnelementsofanarray.[ncanbeanypositivenumber].
Forexample:forarray[7,9,0,-2]andn=3
Print,[9,0,-2]
*/

let arr= [7,9,0,-2];
let n = 3;

console.log(arr.slice(arr.length-n));