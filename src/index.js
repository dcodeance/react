import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSerach from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCHqBc09yNsUO9TfrSIOVtWuof61lDJ_s0';


//Create a new component. This component should produce
// some HTML

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
        
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSerach({ key: API_KEY, term: term }, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} 
                    videos={this.state.videos} />
            </div>
        );
    }
    
}

//Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));