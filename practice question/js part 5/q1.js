/**
 * Write a JavaScript function that returns array elements larger than a number.
 */

let arr = [4,58,8,5,87,6,28,98];
let num = 28;

function LargerElement(arr,num) {
    for(let i= 0; i< arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
        else{
            console.log(`the ${arr[i]} is smaller than ${num}`);
        }
    }
}

LargerElement(arr,num);