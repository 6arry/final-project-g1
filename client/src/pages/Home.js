import React from 'react';
import './App.css';
import '../components/Ytsearch';
import SearchBar from '../components/SearchBar';
import Ytplayer from '../components/Ytplayer';
import { Animated } from 'react-animated-css';

const YouTube = require('simple-youtube-api');
const yt_api = require('../config/keys').YTkey;
const youtube = new YouTube(yt_api);

class Home extends React.Component {
  state = {
    ytResults: [],
    searchTerm: ''
  };

  updateSearchTerm = value => {
    console.log(value);
    this.setState({ searchTerm: value });
  };

  ytSearch = () => {
    console.log('searching...');

    youtube
      .searchVideos(this.state.searchTerm, 5)
      .then(results => {
        console.log(`The video's title is ${results[0].title}`);
        console.log(results);

        //save the ytresults to the state in an array
        //display in a div container
        //using a map over the results

        // console.log(results[0].title);
        // console.log(results[0].description);
        // console.log(results[0].id);
        // console.log(results[0].thumbnails.default.url);
      })
      .catch(console.log);
  };

  render(){
    return (
      <div>
        <Animated
          animationIn="rotateInUpLeft" 
          animationOut="zoomOutDown" 
          animationInDelay={0}
          animationInDuration={1400} 
          animationOutDuration={1400} 
          isVisible={true}> 

          <div className="home">
            <div>
              <Animated 
                      animationIn="lightSpeedIn" 
                      animationOut="zoomOutDown" 
                      animationInDelay={50}
                      animationInDuration={2200} 
                      animationOutDuration={1400} 
                      isVisible={true}> 
                    <div>  
                      <h1 className="hit-the-floor">DJcollective</h1>
                    </div>
                    <SearchBar
                      searchTerm={this.state.searchTerm}
                      updateSearchTerm={this.updateSearchTerm}
                      ytSearch={this.ytSearch}
                    />
                    <Ytplayer />
        
                </Animated>
              </div>
            </div>
        </Animated>
      </div>

    
    )
  }
}

export default Home;
  
    
