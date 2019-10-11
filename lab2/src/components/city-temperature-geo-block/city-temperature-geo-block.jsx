import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './city-temperature-geo-block.scss'

const CityTemperatureGeoBlock = (props) => {
    const {cityinfo} = props;
    const iconURL = `https://openweathermap.org/img/wn/${cityinfo.icon}@2x.png`;

    return (
        <Container>
            <Row>
                <p className="city-temperature-geo-block__city-name">{cityinfo.name}</p>
            </Row>
            <Row>
                <Col md="4">
                    <img className="city-temperature-geo-block__icon" alt="icon" src={iconURL}/>
                </Col>
                <Col>
                    <span className="city-temperature-geo-block__temperature">{cityinfo.temperature}°C</span>
                </Col>
            </Row>
        </Container>
    )
};

export default CityTemperatureGeoBlock;
