/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button } from 'reactstrap'

const Video = (props) => {
    const { video, thumbnail } = props;
    return (
        <div className='col'>
            <div className='card mb-2 shadow-sm'>
                <div className='card-body'>
                    <h5 className='text-center card-text'>{video}</h5>
                    <center><img className='mb-2' src={thumbnail} /></center>
                    <Button to='#' className='btn btn-block btn-dark'>
                    <i className="fas fa-plus-square"> Add Song</i>
                    </Button>
                    <Button to='#' className='btn btn-block btn-success'>
                    <i className="fas fa-caret-square-right"> Play Song</i>
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Video;