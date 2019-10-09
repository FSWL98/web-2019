import React from "react";
import CityTemperatureMiniBlock from "../city-temperature-mini-block/city-temperature-mini-block";
import MeasureBlock from "../mesaure-block/measure-block";
import './favorites-block.scss'
import {Card} from "react-bootstrap";


function FavoritesBlockView(props) {
    return (
        <Card className="favorites-block">
            <Card.Body>
                <CityTemperatureMiniBlock cityinfo={props.cityinfo} closeAction={props.closeAction}/>
                <MeasureBlock measurements={props.measurements}/>
            </Card.Body>
        </Card>
    );
}


export default FavoritesBlockView;
