import React from "react";
import WeatherBlock from "../weather-block/weather-block";
import InputField from "../input-field/input-field";
import {addNewFavoriteCity, removeFavoriteCity} from "../../redux/actions/actions";
import {addComponentIDTOApi} from "../../redux/actions/api-actions";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";


const Favorites = (props) =>  {
    const {addNewFavoriteCity, removeFavoriteCity, cities, addComponentIDTOApi} = props;
    cities.forEach((city) => {
        addComponentIDTOApi(`favorite-${city.name}`);
    });
    const elements = cities.map((city) =>
        <WeatherBlock id={`favorite-${city.name}`} key={city.name} cityName={city.name} closeAction={() => removeFavoriteCity(city.name)}/>
    );

    return (
        <Container>
            <Row className="m-0">
                <Col className="p-0">
                    <h1 className="pl-0">Favorites</h1>
                </Col>

                <Col className="p-0 d-flex justify-content-end">
                    <InputField buttonAction={addNewFavoriteCity}/>
                </Col>
            </Row>

            <Row className="m-0 d-flex flex-wrap justify-content-between">
                {elements}
            </Row>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
        cities: state.favourites.cities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewFavoriteCity: (name) => dispatch(addNewFavoriteCity(name)),
        removeFavoriteCity: id => dispatch(removeFavoriteCity(id)),
        addComponentIDTOApi: componentID => dispatch(addComponentIDTOApi(componentID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
