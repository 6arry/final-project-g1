import React from 'react';
import '../App.css';
import '../components/Ytsearch';
import SearchBar from '../components/SearchBar';
import Ytplayer from '../components/Ytplayer';
import { Animated } from 'react-animated-css';

class Home extends React.Component {
  state = {
    ytResults: [],
    searchTerm: ''
  };

  updateSearchTerm(e) {
    console.log(e);
    this.setState({ searchTerm: e.target.value });
  }

  ytSearch() {
    console.log('searching...');
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          ytSearch={this.ytSearch}
        />
        <Animated
          animationIn='bounceInLeft'
          animationOut='fadeOut'
          isVisible={true}>
          <div>
            hello world ;)
            <h1>This is the Host page!</h1>
          </div>
        </Animated>
        <Ytplayer />
      </div>
    );
  }
}

export default Home;
