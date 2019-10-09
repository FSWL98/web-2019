import React from 'react';
import {Col, Row} from "react-bootstrap";
import './measure-block-item.scss'

function MeasureBlockItem(props) {
    const {name, text, color = "gray"} = props;

    return (
        <Row className={`measure-block-item measure-block-item--${color} d-flex mt-md-1`}>
            <Col>{name}</Col>
            <Col md="auto">{text}</Col>
        </Row>
    );
}

export default MeasureBlockItem;
