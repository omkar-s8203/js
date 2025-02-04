let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purpal", "green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout( function () {
    btn.classList.remove("flash");
}, 500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function () {
        btn.classList.remove("userflash");
    }, 500);
    }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    //random btn choose

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(index){
    console.log("current level : ", level);
    let idx = level-1;

    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value")
        if(userSeq.length == gameSeq.length)
            setTimeout(levelUp, 1000);
    }
    else{
        h2.innerText = `game over, your score ${level}`
        // reset();
    }
}




function btnPress() {
   console.log("button is press")
   console.log(this);
let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");
// console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",  btnPress);
}


function reset(){
    started == false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}