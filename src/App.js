import React, { Component } from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import About from './pages/about';
import Start from './pages/start';
import Projects from './pages/projects';
import Connect from './pages/connect';
import Player from './pages/player';
import Bonus from './pages/bonus';


import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'START',
      playing: false,
    }

    this.changePage = this.changePage.bind(this);
    this.start = this.start.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  start() {
    this.setState({ page: 'PLAYER' });
  }

  togglePlaying() {
    const toggle = !this.state.playing;
    this.setState({ playing: toggle })
  }

  showPage() {
    switch (this.state.page) {
      case 'PLAYER':
        return <Player onClick={this.changePage} />
      case 'MENU':
        return <Navigation onClick={this.changePage} />
      case 'ABOUT':
        return <About />
      case 'PROJECTS':
        return <Projects />
      case 'CONNECT':
        return <Connect />
      case 'BONUS':
        return <Bonus onClick={this.changePage} playing={this.state.playing} togglePlaying={this.togglePlaying} />
      default:
        return <Start onClick={this.start} />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="col-12 pl-0 pr-0">
          {this.state.page === 'START' || this.state.page === 'PLAYER' || this.state.page === 'BONUS'
            ? null 
            : <Header page={this.state.page} onClick={this.changePage} />}
        </div>
  
        <div className="col-12 pt-3">
          {this.showPage()}
        </div>
      </div>
    )
  }
}

export default App;
