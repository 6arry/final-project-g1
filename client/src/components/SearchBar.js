import React, { Component } from 'react';
import YouTube from 'simple-youtube-api';
import { Consumer } from '../context'
import { Input, Button } from 'reactstrap'

const yt_api = require('../config/keys').YTkey;
const youtube = new YouTube(yt_api);

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  findVideos = (e) => { // dispatch, 
    e.preventDefault();

    youtube
      .searchVideos(this.state.searchTerm, 3)
      .then(res => {
        // dispatch({
        //   type: 'SEARCH_VIDEOS',
        //   payload: res
        // })

        // this.setState({searchTerm: ''});

        console.log(res);
        // console.log(res[0].title);
        // this.setState({ video_list: res })
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render () {
    return (
      <Consumer>
        {value => {
          // console.log(value);
          // const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4 search-bar">
              <p className="h6 text-center">
                <i className="fas fa-music"> Search For A Song</i>
              </p> 
              <form onSubmit={this.findVideos}>
                <div className="lead text-center">
                  <Input type="text" className="form-control form-control-sm mb-1" placeholder="Song or Artist..." name="searchTerm" value={this.state.searchTerm} onChange={this.onChange} />
                </div>
                <Button className="btn btn-primary btn-lsm btn-block mb-1" type="submit">Search</Button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )

  }
}

export default SearchBar;
