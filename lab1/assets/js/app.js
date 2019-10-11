'use strict';

const appid = 'APP_ID';

const createURLRequestByCityName = (cityName) => {
    return `https://api.openweathermap.org/data/2.5/find?q=${cityName.replace('-', ' ')},ru&units=metric&appid=${appid}`
};

const getDataFromResponseJson = (jsonObject) => {
    const {
        main: {temp, pressure, humidity} = [0, 0, 0],
        clouds: {all} = [0],
        wind: {speed} = [0]
    } = jsonObject;

    return {
        weather: {
            temp, pressure, humidity,
            clouds: all,
            wind: speed
        }
    }
};

const renderWeatherOnPage = (response) => {
    const data = getDataFromResponseJson(response);
    return nunjucks.render('weather.html', data);
};

const renderErrorMessage = (message) => {
    return nunjucks.render('error_message.html', {error_message: message});
};

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

function addWeatherComponent(data) {
    let cont = document.getElementById('content');
    cont.insertAdjacentHTML('beforeend', renderWeatherOnPage(data));
}

function addErrorMessage(data) {
    const submitButton = document.getElementById('submit');
    submitButton.insertAdjacentHTML('beforebegin', renderErrorMessage(data));
}

function connectionErrorIntoDOM(message) {
    removeWeatherComponent();
    removeErrorMessage();

    addErrorMessage(message);
}

function insertResultIntoDOM(result) {
    removeWeatherComponent();
    removeErrorMessage();

    const jsonObject = JSON.parse(result)["list"][0];

    if (!jsonObject) {
        addErrorMessage("This city doesn't exist in base.");
        return;
    }

    addWeatherComponent(jsonObject);
}

const makeRequest = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: false,
                    result: "Error connection. Try again later."
                });
            }
        };

        xhr.onerror = () => {
            reject({
                status: false,
                result: "Error connection. Try again later."
            });
        };

        xhr.send();
    })
};

function callbackSubmitForm(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const cityName = formData.get('cityname');
    const url = createURLRequestByCityName(cityName);

    makeRequest('GET', url).then(insertResultIntoDOM, connectionErrorIntoDOM);
}

const inputCityNameValidation =(value) => {
    return value.match(/^[a-zA-Z-]+$/);
};

function validateInput(event) {
    const field = event.target;
    const value = field.value;
    let message = '';

    if (!inputCityNameValidation(value)) {
        message = 'Please enter English name without any other symbols';
    }

    field.setCustomValidity(message);
}

document.getElementById('ajaxupload').addEventListener('submit', callbackSubmitForm);
document.getElementById('cityname').addEventListener('input', validateInput);
