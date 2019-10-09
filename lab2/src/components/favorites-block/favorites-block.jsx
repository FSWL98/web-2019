import React from "react";
import FavoritesBlockView from "./favorites-block-view";
import './favorites-block.scss'
import Preloader from "../preloader/preloader";
import {getWeatherInfo} from "../../utils/OpenWeatherAPI";

class FavoritesBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            isError: false,
            errorMessage: "",
            cityinfo: null,
            measurements: null
        }
    }

    static parseAnswer(jsonObject) {
        console.log(jsonObject);
        const {
            name = "",
            weather = [{"icon": "03d"}],
            main: {temp, pressure, humidity} = [0, 0, 0],
            clouds: {all} = [0],
            wind: {speed} = [0]
        } = jsonObject;
        console.log(jsonObject);

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
    }

    makeRequest() {
        const {cityName} = this.props;

        getWeatherInfo(cityName).then(result => {
            const {status, message = "", weather} = result;


            if (!status) {
                this.setState({isLoaded: true,
                    isError: true,
                    errorMessage: message,
                    cityinfo: null,
                    measurements: null});

                return;
            }

            this.setState({isLoaded: true,
                isError: false,
                errorMessage: message,
                cityinfo: weather.cityinfo,
                measurements: weather.measurements});
        });
    }

    componentDidMount() {
        this.makeRequest();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.cityName !== prevProps.cityName){
            this.makeRequest();
        }
    }

    render() {
        const {measurements, cityinfo, isLoaded, isError, errorMessage} = this.state;

        return (
            isLoaded ? isError ? <div className="favorites-block">{errorMessage}</div> :
                                 <FavoritesBlockView measurements={measurements}
                                                     cityinfo={cityinfo}
                                                     closeAction={this.props.closeAction}/> :
                     <Preloader className="favorites-block"/>

        )
    }

}

export default FavoritesBlock;
