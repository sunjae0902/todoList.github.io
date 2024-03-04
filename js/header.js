const header = document.querySelector("#header");
const clock = header.querySelector("#clock");
const weather = header.querySelector("#weather");
const nickname = header.querySelector("#nickname");
nickname.innerHTML = localStorage.getItem("userName")+"'s To-do List";

function timer(){
    const date = new Date();
    if(date.getHours() < 12){
        clock.innerHTML = 'AM '+ String(date.getHours()).padStart(2,"0")+':'+String(date.getMinutes()).padStart(2,"0");
    }
    else if(date.getHours() == 12){
        clock.innerHTML = 'PM '+ String(date.getHours()).padStart(2,"0") +':'+String(date.getMinutes()).padStart(2,"0");
    }
    else{
        clock.innerHTML = 'PM '+ String(date.getHours()-12).padStart(2,"0") +':'+String(date.getMinutes()).padStart(2,"0");
    }

    
}
timer();
setInterval(timer, 1000);

// function onSuccess(position){
//     console.log(position)
// }
// function onError(){
//     alert('[ERROR] Cannot find weather.');
// }

// navigator.geolocation.getCurrentPosition(onSuccess,onError);

