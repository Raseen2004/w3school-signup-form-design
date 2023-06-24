function showPassword() {
    let password = document.getElementById("pwd");
    let show = document.getElementById("show");

    if(password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }

    if(show.innerText === "Show"){
        show.innerText = "Hide"
    }
    else {
        show.innerText = "Show"
    }
}