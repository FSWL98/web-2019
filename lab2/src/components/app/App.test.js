import React from "react";
import App from "./App";
import {act, create} from "react-test-renderer";
import {Provider} from "react-redux";
import store from "../../redux/store/store";
import {addComponentIDTOApi, API_GET_WEATHER_BY_CITY_NAME_RECEIVED} from "../../redux/actions/api-actions";
import {addNewFavoriteCity} from "../../redux/actions/actions";

it("Default App", () => {
    let component = null;
    act(() => {
        component = create(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("Default App - not loaded cities", () => {
    const cities = ["Moscow", "Omsk"];

    cities.forEach((city) => {
        store.dispatch(addNewFavoriteCity(city));
    });

    let component = null;
    act(() => {
        component = create(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


it("Default App - loaded cities", () => {
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
    const cities = ["Moscow", "Omsk"];

    store.dispatch(addComponentIDTOApi("favorite-Moscow"));
    store.dispatch(addComponentIDTOApi("favorite-Omsk"));

    store.dispatch({ type: API_GET_WEATHER_BY_CITY_NAME_RECEIVED,
        state: real_ans, fromID: "favorite-Moscow"  });
    store.dispatch({ type: API_GET_WEATHER_BY_CITY_NAME_RECEIVED,
        state: real_ans, fromID: "favorite-Omsk"  });

    cities.forEach((city) => {
        store.dispatch(addNewFavoriteCity(city));
    });

    let component = null;
    act(() => {
        component = create(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
