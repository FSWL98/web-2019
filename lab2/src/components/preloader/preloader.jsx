import React from "react";
import './preloader.scss'

const Preloader = (props) => {
    let className = "d-flex align-items-center justify-content-center";

    if (props.className) {
        className = `${props.className} ${className}`
    }

    return (
        <div className={className}>
            <div className="preloader"/>
        </div>
    )
};

export default Preloader;
