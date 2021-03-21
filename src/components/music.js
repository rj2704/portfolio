import React from 'react';
import './music.css';
import song from '../sounds/song.mp3';
import play from '../images/play.png';
import pause from '../images/pause.png';

const audio = new Audio(song)
const playButton = <img src={play} className="music-image" alt="play button" />
const pauseButton = <img src={pause} className="music-image" alt="pause button" />


export default class Music extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }
  
    componentDidMount() {
      audio.addEventListener('ended', () => this.setState({ play: false }));
    }
  
    componentWillUnmount() {
      audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
  
    togglePlay = () => {
        this.props.togglePlaying();

        if (this.props.playing) {
            audio.pause()
        } else {
            audio.play();
        }
    }
  
    render() {
      return (
        <div>
          <button className={this.props.playing ? "btn-pause" : "btn-play"} onClick={this.togglePlay}>
            {this.props.playing ? pauseButton : playButton}
          </button>
        </div>
      );
    }
}