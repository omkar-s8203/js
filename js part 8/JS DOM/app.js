    let acolor = document.querySelectorAll(".box a");

    for(let i=0;i<acolor.length;i++){
        acolor[i].style.color = "red";
        console.log(acolor[i].innerText,[i]);
    } 

    let box = document.querySelectorAll(".box");

    box[0].style.color = "red";