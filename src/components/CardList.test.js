import { shallow } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('carList renders', () => {
  const mockRobots = [{ id: 1, name: 'solid snake', email: 'big_boss@fox.com' }];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
