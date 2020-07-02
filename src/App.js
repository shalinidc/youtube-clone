import React from "react";

import { Grid } from '@material-ui/core'

import SearchBar  from './components/SearchBar';
import VideoDetail  from './components/VideoDetail'
import youtube from "./api/youtube";
import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null
        }
    }

    componentDidMount() {
        this.handleSubmit('Be happy and at peace')
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key:'',
                q: searchTerm,
            }
        });
        this.setState({
            videos: response.data.items, selectedVideo: response.data.items[1]
        });
    }

    render() {
        return (
            <Grid container spacing={10} justify='center'>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={10}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;