import { getPlaceData } from "./service/place_service.js";
import { getWeatherData } from "./service/weather_service.js";

const headerTop = document.querySelector("#header-top");
const clock = headerTop.querySelector("#clock");
const nickname = headerTop.querySelector("#nickname");


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
getPlaceData().then(placeString =>{
    const place = document.querySelector("#place");
    place.innerHTML = placeString
});
getWeatherData().then(data =>{
    const temp = document.querySelector('#temperature');
    temp.innerHTML = parseInt(data.main.temp)+" °C";
    const description = document.querySelector('#description');
    description.innerHTML = data.weather[0]["description"];

});

setInterval(timer, 1000);

