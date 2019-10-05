import React from 'react';
import {Col, Row} from "react-bootstrap";


function MeasureBlockItem(props) {
    return (
        <Row className="bg-secondary d-flex mt-md-1">
            <Col>{props.name}</Col>
            <Col md="auto">{props.text}</Col>
        </Row>
    );
}

export default MeasureBlockItem;
