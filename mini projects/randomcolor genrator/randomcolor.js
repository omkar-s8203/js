let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("genrate random color");
    let h1 = document.querySelector("h1");


    let radomcolor = getRandomColor();
    h1.innerText = radomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = radomcolor;

    console.log("color updated")
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;


    return color;
}
