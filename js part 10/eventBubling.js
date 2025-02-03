let div = document.querySelector("div");
let uls = document.querySelector("ul");
let lis = document.querySelector("li");


div.addEventListener("click", function (event) {
    console.log("div event occurs")
});


uls.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("div event occurs")
});



lis.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("div event occurs")
})