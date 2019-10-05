import React from "react";
import MeasureBlockItem from "../measure-block-item/measure-block-item";
import {Container} from "react-bootstrap";

function MeasureBlock(props) {
    const listItems = props.measurements.map((measure, id) => <MeasureBlockItem key={id} name={measure.name} text={measure.text}/>);

    return (
        <Container>
            {listItems}
        </Container>
    );
}

export default MeasureBlock;
