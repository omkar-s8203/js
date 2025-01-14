/**
 * WriteaJavaScriptprogramtotestwhetherthecharacteratthegiven(character)indexislowercase
 */

let name = "Omkar suryawnshi"

let idx = 3;

if(name[idx] == name[idx].toLowerCase()){
    console.log("the following character is in lower case");
}
else{
    console.log("character is not lwer case");
}

/**
 * 
 * WriteaJavaScriptprogramtostripleadingandtrailingspacesfromastring
 */

let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);