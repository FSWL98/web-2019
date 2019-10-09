import React from "react";
import MeasureBlockItem from "../measure-block-item/measure-block-item";
import {Container} from "react-bootstrap";

function MeasureBlock(props) {
    const {measurements} = props;
    const listItems = measurements.map((measure, id) => <MeasureBlockItem key={id} color={measure.color} name={measure.name} text={measure.text}/>);

    return (
        <Container>
            {listItems}
        </Container>
    );
}

export default MeasureBlock;
