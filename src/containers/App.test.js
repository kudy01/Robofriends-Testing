import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("Expect to render App Component", () => {
  expect(shallow(<App />)).toMatchSnapshot(); 
}); 
