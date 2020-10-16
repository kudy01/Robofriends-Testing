import { shallow } from 'enzyme';
import React from 'react';
import Card from '../Card';

it('Expect to render Card Component', () => {
	expect(shallow(<Card />)).toMatchSnapshot()
})
