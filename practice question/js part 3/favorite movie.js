let favoriteMovie= "YJYD";
let guess = prompt("Enter movie name");


while((favoriteMovie != guess)&& (guess != 'quit')){
console.log("YOU ARE Wrong!!!")
guess = prompt("Enter movie name");
}

if(guess=="quit"){
    console.log("the game has ended")
}
else if(guess==favoriteMovie){
    console.log("Wow You are great!!")
}
