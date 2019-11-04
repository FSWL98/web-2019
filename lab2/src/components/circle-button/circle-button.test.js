import React from "react";
import CircleButton from "./circle-button";
import renderer from 'react-test-renderer';

it('CircleButton disable', () => {
    const component = renderer.create(<CircleButton isDisabled={true} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('CircleButton default', () => {
    const component = renderer.create(<CircleButton />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
