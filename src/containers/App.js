import React, { Component } from 'react';

import './app.css';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    robots: state.requestRobots.robots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
