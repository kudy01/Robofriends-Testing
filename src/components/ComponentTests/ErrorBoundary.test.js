import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

it('Expect to render ErrorBoundary Component', () => {
	const wrapper = shallow(<ErrorBoundary />);
	wrapper.setState({ hasError: true });
	expect(wrapper).toMatchSnapshot()
})
