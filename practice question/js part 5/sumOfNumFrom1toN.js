/**
 * create a function that return the sum of numbers from 1 to n.
 */

function sumOFNum(n) {

    let sum = 0;
    for(i=0;i<=n;i++){
        sum = sum+i;
    }
    console.log(sum);
}

sumOFNum(10);