import React from 'react';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = { videosList: [], selectedVideo: null, activeVideo: true };

    componentDidMount() {
        this.onTermSubmit('lofi');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: '1 hour playlist ' + term
            }
        });

        this.setState({
            videosList: response.data.items,
            selectedVideo: response.data.items[0]
        });
        console.log(this.state.videosList);
    }

    onVideoClick = (singleVideoFromVideoItem) => {
        this.setState({ selectedVideo: singleVideoFromVideoItem});
    }

    render() {
        return(
            <div className="ui container">
                <VideoDetails selectedVideo={this.state.selectedVideo}/>
                <VideoList videosList={this.state.videosList} onVideoClick={this.onVideoClick}/>
            </div>
        );
    }
}

export default App;