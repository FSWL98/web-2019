import React from "react";
import FavoritesBlock from "../favorites-block/favorites-block";
import "./favorites.scss"
import InputField from "../input-field/input-field";
import {addNewFavoriteCity, removeFavoriteCity} from "../../redux/actions/actions";
import {connect} from "react-redux";


class Favorites extends React.Component {

    render() {
        const {addNewFavoriteCity, removeFavoriteCity, cities} = this.props;
        const elements = cities.map((city, id) =>
            <FavoritesBlock key={city.name} cityName={city.name} closeAction={() => removeFavoriteCity(city.name)}/>
        );

        return (
            <div className="favorites">
                <div className="d-flex">
                    <h1 className="col-md-7 pl-0">Favorites</h1>
                    <InputField buttonAction={addNewFavoriteCity}/>
                </div>

                <div className="d-flex flex-wrap">
                    {elements}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewFavoriteCity: (name) => dispatch(addNewFavoriteCity(name)),
        removeFavoriteCity: id => dispatch(removeFavoriteCity(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
