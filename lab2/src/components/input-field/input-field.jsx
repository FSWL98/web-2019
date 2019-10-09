import React from "react";
import './input-field.scss'
import CircleButton from "../circle-button/circle-button";
import {Col} from "react-bootstrap";

class InputField extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isValid: false,
            fieldValues: ""
        };
    }

    inputCityNameValidation = value => {
        return value.match(/^[a-zA-Z-]+$/);
    };

    handleInputChange = event => {
        const field = event.target;
        const value = field.value;
        const isValid = this.inputCityNameValidation(value);

        this.setState({isValid: isValid, fieldValues: value});
    };

    render() {
        const {buttonAction = (values) => false, className = ""} = this.props;
        const {isValid, fieldValues} = this.state;

        return (
            <form className={className + " d-flex align-items-center justify-content-end input-form"}
                  onSubmit={e => e.preventDefault()}>
                <Col md="11" className="d-flex m-0 pl-0 flex-column">
                    <input className="input-form__input" type="text" placeholder="&nbsp;"
                           required="required" onChange={this.handleInputChange} />
                    <span className="input-form__label">Russian city name in English</span>
                </Col>
                <div className="m-0 p-0 justify-content-end">
                    <CircleButton buttonAction={() => buttonAction(fieldValues)}
                                  customLabel="+" buttonType="submit" isDisabled={!isValid}/>
                </div>
            </form>
        )
    }
}


export default InputField;
