import React, { Component } from 'react'
import YouTube from 'simple-youtube-api';

const yt_api = require('./config/keys').YTkey;
const youtube = new YouTube(yt_api);

const Context = React.createContext();

export class Provider extends Component {
    state = {
        video_list:[],
        heading: 'Search Results'
    }

    componentDidMount() {
        youtube
            .searchVideos('Manila Grey', 3)
            .then(res => {
                console.log(res);
                // console.log(res[0].title);
                this.setState({ video_list: res })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;