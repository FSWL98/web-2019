import React from 'react';
import Favorites from "../favorites/favorites";
import ErrorModal from "../error-modal/error-modal";
import {connect} from "react-redux";
import WeatherHere from "../weather-here/weather-here";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {event} = this.props;
    const {errorMessage} = event;

    if (errorMessage && prevProps.event && prevProps.event.errorMessage !== errorMessage) {
      this.setState({modalShow: true});
    }
  }

  closeModal() {
    this.setState({modalShow: false});
    const {event} = this.props;
    let {errorMessage} = event;

    if (errorMessage) {
      this.props.event.errorMessage = null;
    }
  }

  render() {
    const {modalShow} = this.state;
    const {event} = this.props;
    const {errorMessage} = event;

    return (
        <div className="m-3">
          <WeatherHere/>
          <Favorites/>
          <ErrorModal errorMessage={errorMessage} show={modalShow}
                      onHide={() => this.closeModal()}/>
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.events.event
  }
};

export default connect(mapStateToProps)(App);
