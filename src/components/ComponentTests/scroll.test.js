import React from "react";
import { create } from "react-test-renderer";
import scroll from '../scroll';


it('Expect to render Scroll Component', () => {
	expect(create(<scroll />).toJSON()).toMatchSnapshot()
})

