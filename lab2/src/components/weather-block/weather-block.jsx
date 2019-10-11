import React from "react";
import WeatherBlockViewMini from "./weather-block-view-mini";
import WeatherBlockViewBig from "./weather-block-view-big";
import './weather-block.scss'
import Preloader from "../preloader/preloader";
import {getWeatherInfoByName, getWeatherInfoByCoordinates} from "../../utils/OpenWeatherAPI";
import {addErrorModal} from "../../redux/actions/actions";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";

class WeatherBlock extends React.Component {
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

    processResponse(response) {
        const {closeAction, errorModal} = this.props;

        response.then(result => {
            const {status, message = "", weather} = result;

            if (status === 1) {
                errorModal(message);

                if (closeAction) {
                    closeAction();
                }
                return;
            }

            if (status === 2) {
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

    makeRequest() {
        const {cityName = 'Saint-Petersburg', coordinates = undefined} = this.props;

        if (coordinates && Object.keys(coordinates).length !== 0) {
            this.processResponse(getWeatherInfoByCoordinates(coordinates.lat, coordinates.lon));
            return;
        }

        this.processResponse(getWeatherInfoByName(cityName));
    }

    componentDidMount() {
        this.makeRequest();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.cityName !== prevProps.cityName) || (this.props.coordinates !== prevProps.coordinates)){
            this.makeRequest();
        }
    }

    render() {
        const {measurements, cityinfo, isLoaded, isError, errorMessage} = this.state;
        const {closeAction, big = false} = this.props;

        let mainStyleClass = 'weather-block--mini';

        if (big) {
            mainStyleClass = 'weather-block--big';
        }

        if (!isLoaded) {
            return <Preloader className={mainStyleClass}/>;
        }

        if (isError) {
            return <Card className={mainStyleClass}>{errorMessage}</Card>;
        }

        if (big) {
            return (
                <WeatherBlockViewBig measurements={measurements} cityinfo={cityinfo}/>
            )
        }

        return (
            <WeatherBlockViewMini measurements={measurements}
                                  cityinfo={cityinfo}
                                  closeAction={closeAction}/>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        errorModal: errorMessage => dispatch(addErrorModal(errorMessage)),
    }
};

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock);
