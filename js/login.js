const loginDiv = document.querySelector("#login-form");

function login(event) {
    localStorage.setItem("userName", loginDiv.querySelector("input").value);  
}

if (localStorage.getItem("userName") == null) {
    loginDiv.querySelector("form").classList.remove("hidden");
    

    loginDiv.querySelector("form").addEventListener("submit",login);
    
}
else{
    loginDiv.querySelector("form").classList.add("hidden");
}