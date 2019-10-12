import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import WeatherBlock from "../weather-block/weather-block";

const WeatherHereView = (props) =>  {
    const {coordinates, updateGeo} = props;

    return (
        <Container className="mb-5">
            <Row className="m-0 weather-here d-flex align-items-center justify-content-between">
                <h1>Weather Here</h1>
                <Button onClick={updateGeo} className="bg-success border-0">Update Geolocation</Button>
                <div className="w-25 invisible">f</div>
            </Row>

            <WeatherBlock big={true} coordinates={coordinates} id="main-weather"/>
        </Container>
    )
};

export default WeatherHereView;
