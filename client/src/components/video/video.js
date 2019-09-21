/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Button } from 'reactstrap'

const Video = (props) => {
    const { video, thumbnail } = props;
    return (
        <div className='col'>
            <div className='card mb-4 shadow-sm'>
                <div className='card-body'>
                    <h5 className='card-text'>{video}</h5>
                    <img src={thumbnail} className='mb-4' />
                    <Button to='#' className='btn btn-block btn-dark'>
                    <i class="fas fa-plus-square"> Add Song</i>
                    </Button>
                    <Button to='#' className='btn btn-block btn-success'>
                    <i class="fas fa-caret-square-right"> Play Song</i>
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Video;