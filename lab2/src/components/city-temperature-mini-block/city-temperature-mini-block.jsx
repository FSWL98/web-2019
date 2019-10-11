import React from "react";
import './city-temperature-mini-block.scss'
import {Col, Row} from "react-bootstrap";
import CircleButton from "../circle-button/circle-button";

const CityTemperatureMiniBlock = (props) => {
    const {cityinfo, closeAction} = props;
    const iconURL = `https://openweathermap.org/img/wn/${cityinfo.icon}.png`;

    return (
        <Row className="m-0 d-flex justify-content-between align-items-center">
            <Col md="9" className="d-flex pl-0 align-items-center">
                <p className="city-temperature-mini-block__city-name mr-5 mb-0">{cityinfo.name}</p>
                <span className="city-temperature-mini-block__temperature mr-1">{cityinfo.temperature}°C</span>
                <img alt="icon" src={iconURL} height="45"/>
            </Col>
            <Col>
                {closeAction && <CircleButton  buttonAction={closeAction}/>}
            </Col>
        </Row>
    );
};

export default CityTemperatureMiniBlock;
