import React from "react";
import CityTemperatureMiniBlock from "../city-temperature-mini-block/city-temperature-mini-block";
import MeasureBlock from "../mesaure-block/measure-block";
import './weather-block.scss'
import {Card} from "react-bootstrap";


function WeatherBlockViewMini(props) {
    return (
        <Card className="weather-block--mini">
            <Card.Body>
                <CityTemperatureMiniBlock cityinfo={props.cityinfo} closeAction={props.closeAction}/>
                <MeasureBlock measurements={props.measurements}/>
            </Card.Body>
        </Card>
    );
}


export default WeatherBlockViewMini;
