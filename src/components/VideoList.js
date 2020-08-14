import React from "react";
import { Grid } from '@material-ui/core'
import VideoItems from './VideoItems'

const VideoList = ({ videoList, onSelect }) => {

    const listOfVideos = videoList.map((video, index) => <VideoItems key={index} video={video} onSelect={onSelect} />)

    return (
        <Grid container spacing={5}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;