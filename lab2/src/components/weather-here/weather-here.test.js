import React from "react";
import WeatherHere from './weather-here';
import {act, create} from "react-test-renderer";
import {Provider} from "react-redux";
import store from "../../redux/store/store";
import {API_GET_WEATHER_BY_CITY_NAME_RECEIVED} from "../../redux/actions/api-actions";
import {updateGeoLocation} from "../../redux/actions/actions";

it("Default WeatherHere - not loaded", () => {
    let component = null;
    act(() => {
        component = create(
            <Provider store={store}>
                <WeatherHere />
            </Provider>
        );
    });

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("WeatherHere - loaded", () => {
    const real_ans = {
        status: 0,
        message: null,
        weather: {
            cityinfo: {
                name: "Msk",
                temperature: 10,
                icon: "01n"
            },
            measurements: [
                {
                    name: "Wind",
                    text: `10 m/s`,
                    color: "blue"
                },
                {
                    name: "Clouds",
                    text: `20 %`,
                    color: "red"
                },
                {
                    name: "Pressure",
                    text: `30 hpa`,
                    color: "yellow"
                },
                {
                    name: "Humidity",
                    text: `40 %`,
                    color: "green"
                },
                {
                    name: "Coordinates",
                    text: `[50, 60]`,
                    color: "pink"
                }
            ],
        }
    };

    store.dispatch(updateGeoLocation({lat: 10, lon: 20}));
    store.dispatch({ type: API_GET_WEATHER_BY_CITY_NAME_RECEIVED,
        state: real_ans, fromID: "main-weather"});

    let component = null;
    act(() => {
        component = create(
            <Provider store={store}>
                <WeatherHere  />
            </Provider>
        );
    });

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
