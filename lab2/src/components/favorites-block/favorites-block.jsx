import React from "react";
import {Lines} from "react-preloaders";
import FavoritesBlockView from "./favorites-block-view";

class FavoritesBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                loading: false
            });
        }, 2000);
    }

    render() {
        const {measurements, cityinfo} = this.props;
        const {loading} = this.state;

        return (
            loading ? <Lines/> : <FavoritesBlockView measurements={measurements} cityinfo={cityinfo}/>
        )
    }

}

export default FavoritesBlock;
