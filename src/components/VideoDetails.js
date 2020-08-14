import React from "react";
import {Paper , Typography }  from "@material-ui/core"

const VideoDetails = ({video}) => {

    if(!video) { return <div>Loading...</div>}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <Paper elevation ={6} style = {{height : "500" ,width : "70%"}}>
                <iframe width="650" height="350" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>  
                <Paper elevation={6} style={{padding : '15px'}}>
                    <Typography variant ="h4">{video.snippet.title}-{video.snippet.channelTitle}</Typography>
                    <Typography variant ="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </Paper>
        </React.Fragment>  
    )
}

export default VideoDetails;