/*
Qs. A "good string" is a string that starts with letter 'a' & has a lenth > 3. write program to find is a string is good or not


*/

let a= "aroj";

if(a[0]== 'a'){
    if(a.length>3){
        console.log(`${a} is good string`);
    }
    else{
        console.log(`${a} is not a good string`)
    }
}
else{
    console.log(`${a} is not a good string`)
}