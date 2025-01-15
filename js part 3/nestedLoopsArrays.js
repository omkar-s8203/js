/**
 * Loops with Arrays
 * Nested loops with nestwed arrays
 * 
 * 
 */

let heroes = [["omkar","pratik","pawar","suryawanshi"],["jayesh","sunny","flash","spiderman"]];

for(let i=0;i<heroes.length;i++){
    console.log(`List #${i}`);
    for(let j=0; j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}