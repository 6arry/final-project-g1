import React, { Component } from 'react'
// import YouTube from 'simple-youtube-api';
import axios from 'axios';

const MMkey = require('../config/keys').MMkey;
// const yt_api = require('../config/keys').YTkey;
// const youtube = new YouTube(yt_api);

const Context = React.createContext();

export class Provider extends Component {
    state = {
        video_list: [],
        heading: 'Top Videos'
    }

    componentDidMount(){
        axios
            .get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey='+MMkey)
            .then(res => {
                console.log(res.data);
                this.setState({video_list: res.data.message.body.track_list})
            })
            .catch(err => console.log(err))
    } 

    // componentDidMount(){
    //     youtube
    //         .searchVideos('Manila Grey', 5)
    //         .then(res => {
    //             console.log(res.data);
    //             this.setState({video_list: res.title})
    //         })
    //         .catch(err => console.log(err))
    // } 

    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;