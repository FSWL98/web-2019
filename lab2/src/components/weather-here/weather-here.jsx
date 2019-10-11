import React from "react";
import WeatherHereView from "./weather-here-view";
import {updateGeoLocation} from "../../redux/actions/actions";
import {connect} from "react-redux";

class WeatherHere extends React.Component {

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
            (err) => {
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHere);
