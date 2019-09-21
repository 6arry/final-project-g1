import React, { Component } from 'react';
// import YouTube from 'simple-youtube-api';
import { Consumer } from '../context'

// const yt_api = require('./config/keys').YTkey;
// const youtube = new YouTube(yt_api);

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }
  render () {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music">Search For A Song</i>
              </h1>
            </div>
          )
        }}
      </Consumer>
    )

  }
}

export default SearchBar;