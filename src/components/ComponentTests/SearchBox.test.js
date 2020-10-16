import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from '../SearchBox';

it('Expect to render SearchBox Component', () => {
	expect(shallow(<SearchBox />)).toMatchSnapshot()
})
