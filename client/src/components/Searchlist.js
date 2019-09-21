import React, { Component } from 'react';
import { Consumer } from '../context';
import Video from '../components/video/video';
import Spinner from '../components/Spinner';


class Searchlist extends Component {
  render() {
      return (
          <Consumer>
              {value => {
                  const { video_list, heading } = value;
                  if(video_list === undefined || video_list.length === 0 ){
                      return <Spinner />
                  } else {
                      return (
                          <React.Fragment>
                              <h3 className="text-center mb-4">{heading}</h3>
                              <div className="row">
                                  {video_list.map(video => (
                                      <Video key={video.id} video={video.title} thumbnail={video.thumbnails.default.url}/>
                                  ))}
                              </div>
                          </React.Fragment>
                      )
                  }
              }}
          </Consumer>
      )
  }
}

export default Searchlist;