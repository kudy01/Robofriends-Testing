import { shallow } from 'enzyme';
import React from 'react';
import scroll from '../scroll';

it('Expect to render scroll Component', () => {
	const wrapper = shallow(<scroll />);
	expect(wrapper).toMatchSnapshot()
})
