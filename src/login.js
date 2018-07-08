let data = document.forms["data"];
button = document.getElementById("button");


document.querySelector("#login").addEventListener("click", function(event) {
    let user = data.querySelector ("input [type='text']");
let password = data.querySelector("input[type='password']")
if (user.value==="" || password==="") {
    event.preventDefault();
    alert("Debes llenar todos los campos para ingresar")
}
else {
    window.location.href = "index.html"
}
})