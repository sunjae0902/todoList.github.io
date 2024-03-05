const weather_API_KEY = "568a176d2b385126d08dfe959737d0c7";
const kakao_API_KEY = "e229e478506714f18a2ceb02aea7ca96";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}`;

// geolocation으로 위도경도 정보 파싱 
// 카카오 api로 

function onGeoOk(position){





}

function getWeatherData(){


}

function getPlaceData(){
    fetch(geoUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
  


}
getPlaceData();

