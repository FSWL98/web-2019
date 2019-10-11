import React from 'react';
import {Col, Row} from "react-bootstrap";
import './measure-block-item.scss'

const MeasureBlockItem = (props) => {
    const {name, text, color = "gray"} = props;

    return (
        <Row className={`measure-block-item measure-block-item--${color} d-flex mt-md-1 justify-content-between`}>
            <Col>{name}</Col>
            <Col className="d-flex justify-content-end font-weight-light">{text}</Col>
        </Row>
    );
};

export default MeasureBlockItem;
