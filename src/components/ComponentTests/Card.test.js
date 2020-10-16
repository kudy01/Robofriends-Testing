import React from "react";
import { create } from "react-test-renderer";
import Card from "../Card";

it("Expect to render CardList Component", () => {
  expect(create(<Card />).toJSON()).toMatchSnapshot(); // check if a component renders correctly
}); 