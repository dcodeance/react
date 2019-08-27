import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyAovmR8yECTrDMpBRGej_FYdNsUP60BdUQ';
class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('bharatanatyam');
    }

    onTermSubmit = async (term) => {
        const response =  await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                key: KEY,
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
        console.log(this.state, video);
    }
    render() {
        return (<div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide ccolumn">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="eleven wide ccolumn">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;