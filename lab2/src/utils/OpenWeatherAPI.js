const appid = 'APP_ID';

const parseWeatherInfo = (jsonObject) => {
    const {
        name = "",
        weather = [{"icon": "03d"}],
        main: {temp, pressure, humidity} = [0, 0, 0],
        clouds: {all} = [0],
        wind: {speed} = [0],
        coord
    } = jsonObject;

    const cityinfo = {
        name: name,
        temperature: temp,
        icon: weather[0]['icon']
    };

    const measurements = [
        {
            name: "Wind",
            text: `${speed} m/s`,
            color: "blue"
        },
        {
            name: "Clouds",
            text: `${all} %`,
            color: "red"
        },
        {
            name: "Pressure",
            text: `${pressure} hpa`,
            color: "yellow"
        },
        {
            name: "Humidity",
            text: `${humidity} %`,
            color: "green"
        },
        {
            name: "Coordinates",
            text: `[${coord.lat}, ${coord.lon}]`,
            color: "pink"
        }
    ];

    return {cityinfo, measurements};
};

const requestToAPIByName = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/find?q=${cityName.replace('-', ' ')},ru&units=metric&appid=${appid}`);
};

const requestToAPIByCoordinates = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`);
};

const processResponse = (response) => {
    return response.then(res => res.json())
        .then((result) => {
                const errorMessage = {
                    status: 1,
                    message: "This city does not exist in base"
                };

                if (!result || !result.list) {
                    return errorMessage;
                }

                const resultCity = result.list[0];

                if (!resultCity) {
                    return errorMessage;
                }

                const parsedAnswer = parseWeatherInfo(resultCity);

                return {
                    status: 0,
                    weather: {
                        cityinfo: parsedAnswer.cityinfo,
                        measurements: parsedAnswer.measurements
                    }
                };
            },
            (error) => {
                return {
                    status: 2,
                    message: "Server is not available! "
                }
            });
};

export const getWeatherInfoByName = (cityName) => {
    return processResponse(requestToAPIByName(cityName));
};

export const getWeatherInfoByCoordinates = (lat, lon) => {
    return processResponse(requestToAPIByCoordinates(lat, lon));
};
