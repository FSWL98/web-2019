import React from "react";
import WeatherHereView from "./weather-here-view";
import {updateGeoLocation} from "../../redux/actions/actions";
import {connect} from "react-redux";
import {addComponentIDTOApi} from "../../redux/actions/api-actions";

class WeatherHere extends React.Component {

    constructor(props) {
        super(props);

        const {addComponentIDTOApi} = this.props;
        addComponentIDTOApi("main-weather");
    }

    updateLocation() {
        const {updateGeo} = this.props;

        if (!('geolocation' in navigator)) {
            updateGeo({});
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                updateGeo({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            },
            () => {
                updateGeo({});
            }
        )
    }

    render() {
        const {coordinates = {}, wasFirstRequest = true} = this.props;

        if (!wasFirstRequest) {
            this.updateLocation();
        }

        return (
            <WeatherHereView updateGeo={() => this.updateLocation()} coordinates={coordinates}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        coordinates: state.geo.coordinates,
        wasFirstRequest: state.geo.wasFirstRequest
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateGeo: coordinates => dispatch(updateGeoLocation(coordinates)),
        addComponentIDTOApi: componentID => dispatch(addComponentIDTOApi(componentID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHere);
