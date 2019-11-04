import React from "react";
import MeasureBlock from "./measure-block";
import renderer from 'react-test-renderer';

const measurements = [
    {
        color: "gray",
        name: 'Name 1',
        text: "text 1"
    },
    {
        color: "blue",
        name: 'Name 2',
        text: "text 2"
    }
];

it("Empty MeasureBlockItem", () => {
    const component = renderer.create(<MeasureBlock measurements={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it("Filled MeasureBlockItem", () => {
    const component = renderer.create(<MeasureBlock measurements={measurements}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
