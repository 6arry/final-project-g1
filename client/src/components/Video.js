import React from 'react'
import { Link } from 'react-router-dom'

const Video = (props) => {
    const { video } = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{video.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fa-play">Track</i></strong>: {video.track_name}
                        <br/>
                        <strong><i className="fa-play">Track</i></strong>: {video.album_name}
                    </p>
                    <Link to={`lyrics/track/${video.track_id}`} className="btn btn-dark btn-block">
                        <i className="fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Video;