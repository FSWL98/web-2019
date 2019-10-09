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
            text: `${speed} m/s`
        },
        {
            name: "Clouds",
            text: `${all} %`
        },
        {
            name: "Pressure",
            text: `${pressure} hpa`
        },
        {
            name: "Humidity",
            text: `${humidity} %`
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
                const resultCity = result.list[0];

                if (!resultCity) {
                    return {
                        status: 0,
                        message: "This city does not exist in base"
                    }
                }

                const parsedAnswer = parseWeatherInfo(resultCity);

                return {
                    status: 1,
                    weather: {
                        cityinfo: parsedAnswer.cityinfo,
                        measurements: parsedAnswer.measurements
                    }
                };
            },
            (error) => {
                return {
                    status: 0,
                    message: "Server is not available! "
                }
            });
};
