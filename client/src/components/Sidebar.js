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
        <div>
          <h1> {this.state.username}'s Playlist!</h1>

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
                    <h3>No Results to Display</h3>
                  )}

        </div>
          
      </div>
    );
  };
};

// function Sidebar () {
//     // var element = document.getElementById("body");
//     // element.className="home";
//     return (
     
            
        
//                   <div>
//                     <h1>Sidebar baby!</h1>
//                   </div>
            
        
//   );
// }
export default Sidebar;
       
  
         
              
  
    
  