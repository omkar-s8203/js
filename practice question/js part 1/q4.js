/*
Qs4) A String is a golden string if it start with the character "A" or "a" and has a total lenght greater than 5.
     for a given string print if it is golden or not
*/


let str= "Applef"

if(str[0]== "A" || "a"){
    if(str.length>4){
        console.log("good string");
    }
    else 
      console.log("bad string1");
}
else{
    console.log("bad string")
}