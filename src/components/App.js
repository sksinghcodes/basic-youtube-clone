import React from 'react';
import Header from './Header';
import VideoList from './VideoList'
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: { q: term }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        })
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className='master'>
                <Header onFormSubmit={this.onTermSubmit} />
                <div className="main-wrapper">
                    <div className="container">
                        <div className="main">
                            <VideoDetail video={this.state.selectedVideo} />
                            <div className="sidebar">
                                <p className="results-count">I have {this.state.videos.length} videos.</p>
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;