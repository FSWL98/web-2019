import React from "react";
import CityTemperatureGeoBlock from "./city-temperature-geo-block";
import renderer from 'react-test-renderer';

const cityinfo = {
    icon: "13d",
    name: "Moscow",
    temperature: "10"
};

it("Usual temperature-name geo block", () => {
    const component = renderer.create(<CityTemperatureGeoBlock cityinfo={cityinfo} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
