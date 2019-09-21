import API from "../utils/API";
import React, { Component } from "react";


class Sidebar extends Component {
  state = {
    username: "",
    playlist: []
  };

  componentDidMount() {
    this.loadPlaylist();
  }

  loadPlaylist = () => {
    API.getPlaylist()
      .then(res =>
        this.setState({ playlist: res.data.data, username: res.data.user })
      )
      .catch(err => console.log(err));
  };

  render() {
    return(
      <div>
        <p className="h6 text-center">{this.state.username}</p>
        <p className="h6 text-center">Your Playlist</p>
          {this.state.playlist.length ? (
            <ul>
              {this.state.playlist.map(song => (
                <li>    
                  <strong>
                    {song.name} by {song.artist}
                  </strong>
                </li>
              ))}
            </ul>
          ) : (
        <p className="h4 text-center">Nothing added...</p>
          )}

      </div>
    );
  };
};

export default Sidebar;
       
  
         
              
  
    
  