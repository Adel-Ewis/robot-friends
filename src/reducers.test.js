import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from './constants';

import * as reducers from './reducers';

describe('SearchReducers', () => {
  const initialStateSearch = {
    searchField: ''
  };
  it('Should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: ''
    });
  });

  it('Should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, { type: CHANGE_SEARCH_FIELD, payload: 'abc' })).toEqual({
      searchField: 'abc'
    });
  });
});

describe('requestRobots', () => {
  const initialState = {
    isPending: false,
    robots: [],
    error: ''
  };
  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialState, { type: REQUEST_ROBOTS_PENDING })).toEqual({
      isPending: true,
      robots: [],
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 1, name: 'gundam', email: 'gundam@anime.com' }]
      })
    ).toEqual({
      isPending: false,
      robots: [{ id: 1, name: 'gundam', email: 'gundam@anime.com' }],
      error: ''
    });
  });


  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'error'
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'error'
    });
  });
});
