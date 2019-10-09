const appid = 'APP_ID';

const parseWeatherInfo = (jsonObject) => {
    const {
        name = "",
        weather = [{"icon": "03d"}],
        main: {temp, pressure, humidity} = [0, 0, 0],
        clouds: {all} = [0],
        wind: {speed} = [0]
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
        }
    ];

    return {cityinfo, measurements};
};

const requestToAPI = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/find?q=${cityName.replace('-', ' ')},ru&units=metric&appid=${appid}`);
};


export const getWeatherInfo = (cityName) => {
    return requestToAPI(cityName)
        .then(res => res.json())
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
