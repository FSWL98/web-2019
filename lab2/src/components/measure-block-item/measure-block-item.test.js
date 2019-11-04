import React from "react";
import MeasureBlockItem from "./measure-block-item";
import renderer from 'react-test-renderer';


it("Basic MeasureBlockItem", () => {
    const component = renderer.create(<MeasureBlockItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("Blue MeasureBlockItem", () => {
    const component = renderer.create(<MeasureBlockItem color={"blue"}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
