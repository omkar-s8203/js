/*
Switch Statement
used when we have some fixed values that we need to compare to
*/

let color = 'red';

switch (color) {
    case "red":
        console.log("stop");
        break;

    case "Yellow":
        console.log("slow down");
        break;

    case "green":
        console.log("GO!!!");
        break;

    default:
        console.log("Error");
        break;
}

console.log("after switch statement");