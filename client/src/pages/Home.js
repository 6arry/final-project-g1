import React from 'react';
import './App.css';
import '../components/Ytsearch';
import SearchBar from '../components/SearchBar';
import Videos from '../components/Videos'

// const YouTube = require('simple-youtube-api');
// const yt_api = require('../config/keys').YTkey;
// const youtube = new YouTube(yt_api);

class Home extends React.Component {
  state = {
    ytResults: [],
    searchTerm: '',
    loading: true
  };

  updateSearchTerm = value => {
    // console.log(value);
    this.setState({ searchTerm: value });
  };

  ytSearch = () => {
    console.log('searching...');

    // youtube
    //   .searchVideos(this.state.searchTerm, 5)
    //   .then(res => {
    //     console.log(`The video's title is ${res[0].title}`);
    //     console.log(res);


    //     save the ytresults to the state in an array
    //     display in a div container
    //     using a map over the results

    //     console.log(res[0].title);
    //     console.log(res[0].description);
    //     console.log(res[0].id);
    //     console.log(res[0].thumbnails.default.url);
    //   })
    //   .catch(err => console.log(err));
  };

  render(){
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          ytSearch={this.ytSearch}
          onSubmit={this.onSubmit}
        />
          <Videos />
      </div>
    )
  }
}

export default Home;
  
    
