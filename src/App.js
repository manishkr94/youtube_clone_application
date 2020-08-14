import React from  'react';

import {Grid} from '@material-ui/core'
import {SearchBar , VideoList , VideoDetails} from './components/index'
import Axios from 'axios';
//import  youtube from './api/youtube'

class App extends React.Component {
    state = {
        videos : [] ,
        defaultVideo : null
    }

    componentDidMount = () => {
        this.onSubmitHandle('clever programmer instagram clone')
    }

    onSubmitHandle = async (searchTerm) => {
        await Axios.get('https://www.googleapis.com/youtube/v3/search' , {
            params : {
                part : 'snippet',
                maxResults : 5 ,
                key : 'AIzaSyCVQUXC9YBrgeO4JFHjoEZ29UJPr5xdOBM' , 
                q: searchTerm,
            } 
        })
        .then((response) => {
            this.setState({videos : response.data.items , defaultVideo : response.data.items[0]})
            console.log(response.data.items)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onSelectVideo = (selectedVideo) => {
        this.setState({defaultVideo:selectedVideo})
    }

    render() {

        const {videos , defaultVideo} =this.state

        return(
            <Grid justify='center' container spacing = {10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>

                        <Grid item xs={12}>
                            <SearchBar onSubmitForm = {this.onSubmitHandle}/>
                        </Grid>

                        <Grid item xs={8}>
                            <VideoDetails video = {defaultVideo}/>
                        </Grid>

                        <Grid item xs={4}>
                            <VideoList videoList={videos} onSelect = {this.onSelectVideo} />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;