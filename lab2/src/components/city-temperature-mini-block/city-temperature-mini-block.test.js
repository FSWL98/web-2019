import React from "react";
import CityTemperatureMiniBlock from "./city-temperature-mini-block";
import renderer from 'react-test-renderer';

const cityinfo = {
    icon: "13d",
    name: "Moscow",
    temperature: "10"
};

it("Usual temperature-name mini block", () => {
    const component = renderer.create(<CityTemperatureMiniBlock cityinfo={cityinfo} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
