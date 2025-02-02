/*
DOM Event 

Events are signals that something has occured. (user input/action)
*/

let btn= document.querySelector('button');
console.dir(btn);

btn.onclick =function (){
    console.log("button was clicked")
}

btn.onmousemove =function (){
    console.log("mouse move");
}


btn.onmouseenter = function(){
    console.log("mouse enter activeded")
    alert("you on mouse area");
}


/**
 * Event Listner
 * 
 * addEventListner
 * 
 * element.addEventListner(event, callback)
 */

btn1= document.getElementById("btn1");
btn1.addEventListener("click", function(){
    console.log("button clciked");
});



