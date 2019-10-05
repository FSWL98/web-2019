import React from "react";
import './city-temperature-mini-block.scss'

function CityTemperatureMiniBlock(props) {
    const iconURL = `http://openweathermap.org/img/wn/${props.cityinfo.icon}.png`;
    return (
        <div className="d-flex align-items-center">
            <p className="city-temperature-mini-block__city-name mr-4 mb-0">{props.cityinfo.name}</p>
            <span className="city-temperature-mini-block__temperature mr-1">{props.cityinfo.temperature}°</span>
            <img alt="icon" src={iconURL}/>
        </div>
    );
}

export default CityTemperatureMiniBlock;
