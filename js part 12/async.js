async function greet() {
    // throw "some ramdon error";
    return "hello";
}

// const { reject } = require("async");

greet()
    .then((result) => {
        console.log("promise is fullfill");
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })


/**Await keyword
 * pauses the execution of its surroundong async function untill the promise pending
 */

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num1 = Math.floor(Math.random() * 5) + 1;
            
            if (num1 > 3) {
                reject("promise rejected");
            }
        



            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });

    // console.log(5);
}

async function demo() {
    try{
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
} catch(err){
    console.log(err);
}

    let a = 5;
    console.log(a);
    console.log(a + 3);
}