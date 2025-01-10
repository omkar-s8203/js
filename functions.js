/*
Functions in js
block of code that performs a specific tasks, can involed whenever neede
*/

console.log("hello!")

"abc".toUpperCase();

[2, 3, 4].push(4);


function hello(meg) {
    console.log("the function has been runed");
    console.log("omkar suryawnshi")
    console.log(meg)
}

hello("hii this is omkar from ISBM collage of enginnering");
hello();
hello();

// for (let i = 0; i < 5; i++) {
//     hello();
// }



function sum(a, b) {
    //local variables -> scope 
    sum = a + b;
    return sum;  //we dont write any thing after return.
    // console.log("after return")
}
console.log(sum(5, 9));
// console.log(a);


// arrow functions
function sum(a, b) {
    return a + b;
}

// multiplication function
function mul(a, b) {
    return a * b;
}

const a = (a, b) => {
    console.log(a + b);
};

console.log(a);
a(5, 4);



let abc = "this is string ";
function countvowels(abc) {
    let count = 0;
    for (const char of abc) {
        if (char ===  "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
}

countvowels("omkar suryawanshi")