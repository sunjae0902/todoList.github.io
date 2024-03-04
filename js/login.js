const loginDiv = document.querySelector("#login-form");

function login(event) {
    localStorage.setItem("userName", loginDiv.querySelector("input").value);  
}

if (localStorage.getItem("userName") == null) {
    loginDiv.querySelector("form").classList.remove("hidden");
    const button =  loginDiv.querySelector("form button");

    loginDiv.querySelector("form").addEventListener("submit",login);
    button.addEventListener("click",login);
}
else{
    loginDiv.querySelector("form").classList.add("hidden");
}