import React from "react";
import CityTemperatureMiniBlock from "../city-temperature-mini-block/city-temperature-mini-block";
import MeasureBlock from "../mesaure-block/measure-block";
import './favorites-block.scss'


function FavoritesBlockView(props) {
    return (
        <div className="favorites-block">
            <CityTemperatureMiniBlock cityinfo={props.cityinfo} closeAction={props.closeAction}/>
            <MeasureBlock measurements={props.measurements}/>
        </div>
    );
}


export default FavoritesBlockView;
