import { shallow } from 'enzyme';
import React from 'react';
import CardList from '../CardList';

it('Expect to render CardList Component', () => {
	const mockRobots = [
  {
    id: 1,
    name: 'Sameer Khan',
    username: 'Package',
    email: 'ilovetrump.org'
  }]
	expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})