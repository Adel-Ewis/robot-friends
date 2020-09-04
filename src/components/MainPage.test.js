import { shallow } from 'enzyme';
import MainPage from './MainPage';
import React from 'react';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      { name: 'adel', email: 'adel@fscsa.com', id: 1 },
      { name: 'ahmed', email: 'adel@fscsa.com', id: 2 }
    ],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('Testing MainPage Component', () => {
  it('expects to render MainPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Filters the robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        { name: 'adel', email: 'adel@fscsa.com', id: 1 },
        { name: 'ahmed', email: 'adel@fscsa.com', id: 2 }
      ],
      searchField: 'a',
      isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual(mockProps2.robots);
    expect(wrapper2.instance().filteredRobots().length).toEqual(2);
  });

  it('Check isPending when true', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: 'a',
      isPending: true
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.html()).toEqual('<h1 class="tc">Loading</h1>');
  });
});
