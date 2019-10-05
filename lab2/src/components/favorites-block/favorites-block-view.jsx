import React from "react";
import {Container} from "react-bootstrap";
import CityTemperatureMiniBlock from "../city-temperature-mini-block/city-temperature-mini-block";
import MeasureBlock from "../mesaure-block/measure-block";


function FavoritesBlockView(props) {
    return (
        <Container>
            <CityTemperatureMiniBlock cityinfo={props.cityinfo}/>
            <MeasureBlock measurements={props.measurements}/>
        </Container>
    );
}


export default FavoritesBlockView;
