import React from "react";
import './circle-button.scss';

const CircleButton = (props) => {
    let {customLabel = 'X', buttonAction, buttonType = "button", isDisabled = false, className = ""} = props;

    return (
        <div className={className + " d-flex justify-content-end p-0 m-0"}>
            <button onClick={buttonAction} type={buttonType} className="circle-button" disabled={isDisabled}>
                {customLabel}
            </button>
        </div>
    )
};

export default CircleButton;
