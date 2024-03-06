const weatherAPIKey = '568a176d2b385126d08dfe959737d0c7';
const weatherBaseUrl =`https://api.openweathermap.org/data/2.5`;

function onError() {
    alert('[ERROR] Cannot find weather.');
}
export async function getWeatherData() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                try {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const nowDateObj = getCurrentDateTime();
                    const base_date = nowDateObj.date;
                    const base_time = nowDateObj.time;
                    console.log(base_date , base_time)

                    const response = await fetch(`${weatherBaseUrl}/weather?lat=${lat}&lon=${lng}&appid=${weatherAPIKey}&units=metric&lang=kr`);
       
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log(data);
                    resolve(data);
                } catch (error) {
                    console.error('There was a problem with your fetch operation:', error);
                    reject(error);
                }
            });
        } else {
            onError();
        }
    });
}

function getCurrentDateTime() {
    const now = new Date();

    // 날짜
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = now.getDate();
    day = day < 10 ? '0' + day : day;

    // 시간
    let hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // yyyymmdd와 HHmm 형식으로 조합
    const date = `${year}${month}${day}`;
    const time = `${hours}${minutes}`;

    return { date, time };
}