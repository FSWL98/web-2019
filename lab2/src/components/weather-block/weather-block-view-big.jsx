import React from "react";
import {Col, Container} from "react-bootstrap";
import CityTemperatureGeoBlock from "../city-temperature-geo-block/city-temperature-geo-block";
import MeasureBlock from "../mesaure-block/measure-block";
import './weather-block.scss';

const WeatherBlockViewBig = (props) => {
    const {measurements, cityinfo} = props;
    return (
        <Container className="p-0 d-flex">
            <Col md="7" className="p-0 ">
                <CityTemperatureGeoBlock cityinfo={cityinfo}/>
            </Col>
            <Col className="p-0 d-flex align-items-center">
                <MeasureBlock measurements={measurements}/>
            </Col>
        </Container>
    )
};

export default WeatherBlockViewBig;
