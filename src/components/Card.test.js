import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';

describe('Testing Card Component', () => {
  it('expects to render card Component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
