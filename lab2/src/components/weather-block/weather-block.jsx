import React from "react";
import WeatherBlockViewMini from "./weather-block-view-mini";
import WeatherBlockViewBig from "./weather-block-view-big";
import './weather-block.scss'
import Preloader from "../preloader/preloader";
import {addErrorModal} from "../../redux/actions/actions";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";
import {getWeatherByCityCoordinates, getWeatherByCityName} from "../../redux/actions/api-actions";


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
        if (Object.keys(response).length === 0) {
            return {isLoaded: false};
        }

        const {closeAction, errorModal} = this.props;

        const {status, message = "", weather = null} = response;

        if (status === 1) {
            errorModal(message);

            if (closeAction) {
                closeAction();
            }
            return {isLoaded: false};
        }

        if (status === 2) {
            return {isLoaded: true,
                isError: true,
                errorMessage: message};
        }

        return {isLoaded: true,
            isError: false,
            errorMessage: message,
            cityinfo: weather.cityinfo,
            measurements: weather.measurements};
    }

    makeRequest() {
        this.setState({isLoaded: false});
        const {cityName = 'Saint-Petersburg', coordinates = undefined,
            getWeatherByCityCoordinates, getWeatherByCityName} = this.props;

        if (coordinates && Object.keys(coordinates).length !== 0) {
            getWeatherByCityCoordinates(coordinates, this.props.id);
            return;
        }

        getWeatherByCityName(cityName, this.props.id);
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
        const {closeAction, big = false, apiResponse} = this.props;
        const answer = this.processResponse(apiResponse);

        const {measurements, cityinfo, isLoaded, isError, errorMessage} = answer;

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

const mapStateToProps = (state, ownProps) => {
    return {
        apiResponse: state.api[ownProps.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        errorModal: errorMessage => dispatch(addErrorModal(errorMessage)),
        getWeatherByCityName: (cityname, fromID) => dispatch(getWeatherByCityName(cityname, fromID)),
        getWeatherByCityCoordinates: (coordinates, fromID) => dispatch(getWeatherByCityCoordinates(coordinates, fromID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlock);
