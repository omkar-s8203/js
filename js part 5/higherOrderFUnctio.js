/**
 * Higher order Functions
 * 
 * a function that does one or both:
 * task one or function as arguments 
 * returns a function
 */

function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
     func();
    }
}

let greet = function(){
    console.log("Omkar suryawamshi");
}

multipleGreet(greet,7);