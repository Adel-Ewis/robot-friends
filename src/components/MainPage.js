import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './MainPage.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter((robot) => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
  };
  render() {
    const { searchField, onSearchChange, isPending } = this.props;
    return isPending ? (
      <h1 className='tc'>Loading</h1>
    ) : (
      <div className='tc'>
        <Header />
        <SearchBox searchField={searchField} searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filteredRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
