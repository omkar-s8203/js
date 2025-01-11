/*
Qs3. write a switch statement to print the month in a quarter.
months in Quarter 1: january ,february, march
months in quarter 2: April, may,  june
months in quarter 3: July, AUgest, September
months in quarter 4: october, november, december

[use the number as the case value in switch]
*/

let quarter = 3;

switch (quarter) {
    case 1:
        console.log("january ,february, march");
        break;

    case 2:
        console.log("April, may,  june");
        break;

    case 3:
        console.log("July, AUgest, September");
        break;

    case 1:
        console.log("october, november, december");
        break;

    default:
        console.log("invalid error");
        break;
}