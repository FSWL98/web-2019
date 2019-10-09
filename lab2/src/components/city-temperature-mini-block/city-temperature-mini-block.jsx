import React from "react";
import './city-temperature-mini-block.scss'
import {Col} from "react-bootstrap";
import CircleButton from "../circle-button/circle-button";

function CityTemperatureMiniBlock(props) {
    const {cityinfo, closeAction} = props;
    const iconURL = `http://openweathermap.org/img/wn/${cityinfo.icon}.png`;

    return (
        <div className="d-flex align-items-center justify-content-start">
            <Col md="9" className="d-flex pl-0">
                <p className="city-temperature-mini-block__city-name mr-4 mb-0">{cityinfo.name}</p>
                <span className="city-temperature-mini-block__temperature mr-1">{cityinfo.temperature}°C</span>
                <img alt="icon" src={iconURL} height="45"/>
            </Col>
            {closeAction && <CircleButton className="col-md-3" buttonAction={closeAction}/>}
        </div>
    );
}

export default CityTemperatureMiniBlock;
