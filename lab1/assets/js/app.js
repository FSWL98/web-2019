'use strict';

const appid = 'API KEY';

function createURLRequestByCityName(cityName) {
    return `https://api.openweathermap.org/data/2.5/find?q=${cityName.replace('-', ' ')},ru&units=metric&appid=${appid}`
}

function getDataFromResponseJson(jsonObject) {
    console.log(jsonObject);
    return {
        weather: {
            temp: jsonObject.main.temp,
            pressure: jsonObject.main.pressure,
            clouds: jsonObject.clouds.all,
            wind: jsonObject.wind.speed,
            humidity: jsonObject.main.humidity,
        }
    }
}

function renderWeatherOnPage(response) {
    const data = getDataFromResponseJson(response);
    return nunjucks.render('weather.html', data);
}

function renderErrorMessage(message) {
    return nunjucks.render('error_message.html', {error_message: message});
}

function removeComponenFromPageByID(id) {
    let elem = document.getElementById(id);
    if (elem !== undefined && elem !== null) {
        elem.remove();
    }
}

function removeWeatherComponent() {
    removeComponenFromPageByID("weather");
}

function removeErrorMessage() {
    removeComponenFromPageByID("error-message");
}

document.getElementById('ajaxupload').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const cityName = formData.get('cityname');
    const xhr      = new XMLHttpRequest();
    const url = createURLRequestByCityName(cityName);

    xhr.open('GET', url);

    xhr.onreadystatechange = function() {
        const submitButton = document.getElementById('submit');
        removeErrorMessage();
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            const data = JSON.parse(xhr.responseText)['list'][0];

            if (data === undefined) {
                submitButton.insertAdjacentHTML('beforebegin', renderErrorMessage("This city doesn't exist in base."));
                return;
            }

            let cont = document.getElementById('content');
            cont.insertAdjacentHTML('beforeend', renderWeatherOnPage(data));

            return;
        }

        removeWeatherComponent();
        submitButton.insertAdjacentHTML('beforebegin', renderErrorMessage('Error connection. Try again later.'));
    };

    xhr.send( formData );
});
