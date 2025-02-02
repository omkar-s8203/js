let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("form submited");

    let username = document.querySelector("#user");
    let password = document.querySelector("#pass");
    console.log(username.value);
    console.log(password.value);

    alert("data submityed succesfully");
});

/**Form event 
 * 
 * event.Default
 * 
*/

/**
 * Extracting form data
 */