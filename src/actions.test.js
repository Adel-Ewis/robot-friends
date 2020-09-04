import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from './constants';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'test';
    const expectedAction = { type: CHANGE_SEARCH_FIELD, payload: text };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots', () => {
  it('handles requesting robots', () => {
    expect.assertions(1);
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const actionsRes = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(actionsRes[0]).toEqual(expectedAction);
  });
});
