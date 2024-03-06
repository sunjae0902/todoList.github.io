const kakaoRestAPIKey = 'b2a014187e0a4c126eda86aadeeb351e';
const placeBaseUrl = `https://dapi.kakao.com/v2/local/geo/coord2regioncode`;

function onError() {
    alert('[ERROR] Cannot find place.');
}
export async function getPlaceData() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                try {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    const response = await fetch(`${placeBaseUrl}.json?x=${lng}&y=${lat}`, {
                        headers: {
                            'Authorization': `KakaoAK ${kakaoRestAPIKey}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    const place = data["documents"][0]["region_1depth_name"] + ", " + data["documents"][0]["region_2depth_name"];
                    resolve(place);
                } catch (error) {
                    console.error('There was a problem with your fetch operation:', error);
                    reject(error);
                }
            }, function (error) {
                console.error('Error occurred while getting geolocation:', error);
                reject(error);
            });
        } else {
            onError();
        }
    });
}
