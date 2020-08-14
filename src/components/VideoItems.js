import React from 'react';
import {Grid , Typography,Paper } from '@material-ui/core'

const VideoItems = ({video , onSelect}) => {
    return(
        <Grid item xs={12} >
            <Paper elevation={12} style = {{display:'flex' , alignItems:'center' , cursor: "pointer" }} onClick = {() => onSelect(video)} >
                <img style={{ marginRight : '20px'}} alt="thumbnail"  src = {video.snippet.thumbnails.medium.url} ></img>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItems