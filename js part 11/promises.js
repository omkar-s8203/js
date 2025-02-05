/**
 * Promises 
 * the promise object represent the eventual completion (or failure) of an asynchronous operatio and its resulting value
 */

function saveDB(data, succes, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        succes();
    } else {
        failure();
    }
}

saveDB(
    "Omkar",
    () => {
        console.log("ypur data succesfuylly saved");
        saveDB("hello world", ()=>{
            console.log("success2: data2 saved");
        },()=>{
            console.log("failure2: Weak connection");
        });
    },
    () => {
        console.log("weak connection try again with good connection");
    });