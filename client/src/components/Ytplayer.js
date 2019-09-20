import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Ytplayer extends Component {
  render() {
    let pickVid = 'dWhyFfsb74g';
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return <YouTube videoId={pickVid} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Ytplayer;