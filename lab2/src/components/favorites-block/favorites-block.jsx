import React from "react";
import FavoritesBlockView from "./favorites-block-view";
import './favorites-block.scss'
import Preloader from "../preloader/preloader";
import {getWeatherInfo} from "../../utils/OpenWeatherAPI";
import {addErrorModal} from "../../redux/actions/actions";
import {connect} from "react-redux";

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

    makeRequest() {
        const {cityName, closeAction, errorModal} = this.props;

        getWeatherInfo(cityName).then(result => {
            const {status, message = "", weather} = result;

            if (status === 1) {
                errorModal(message);
                closeAction();
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
        const {closeAction} = this.props;

        return (
            isLoaded ? isError ? <div className="favorites-block">{errorMessage}</div> :
                                 <FavoritesBlockView measurements={measurements}
                                                     cityinfo={cityinfo}
                                                     closeAction={closeAction}/> :
                     <Preloader className="favorites-block"/>

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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesBlock);
