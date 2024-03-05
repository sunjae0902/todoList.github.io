const header = document.querySelector("#header");
const clock = header.querySelector("#clock");
const weather = header.querySelector("#weather");
const nickname = header.querySelector("#nickname");

const userName = localStorage.getItem("userName");

if(userName){
    nickname.innerHTML = userName+"'s To-do List";
}


function timer(){
    const date = new Date();
    const hours = date.getHours();
    if(hours < 12){
        if(hours < 6) {
            clock.innerHTML = '💫 ';
        }
        else{
            clock.innerHTML = '🌤️ ';
        }
        clock.innerHTML += 'AM '+ String(date.getHours()).padStart(2,"0")+':'+String(date.getMinutes()).padStart(2,"0");
    }
    else if(hours == 12){
        clock.innerHTML = '🌤️ PM '+ String(date.getHours()).padStart(2,"0") +':'+String(date.getMinutes()).padStart(2,"0");
    }
    else{
        if(hours < 17) {
            clock.innerHTML = '🌤️ ';
        }
        else{
            clock.innerHTML = '🌙 ';
        }
        clock.innerHTML += 'PM '+ String(date.getHours()-12).padStart(2,"0") +':'+String(date.getMinutes()).padStart(2,"0");
    }

    
}
timer();
setInterval(timer, 1000);

// function onSuccess(position){
//     console.log(position.coords.longitude)
// }
// function onError(){
//     alert('[ERROR] Cannot find weather.');
// }

// navigator.geolocation.getCurrentPosition(onSuccess,onError);

