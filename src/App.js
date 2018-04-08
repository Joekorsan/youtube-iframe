import React, { Component } from 'react';

import YouTube from 'react-youtube';

class App extends Component {
    state = {
      player:null,
      player2:null,
      dateNow: Date.now(),
      opts1: {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            controls: 0
        }
      },
      opts2: {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            controls: 0
        }
      }
    }

    twinPlay = () => {
      this.state.player.playVideo()
      this.state.player2.playVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      //
      // setTimeout(()=>{this.state.player.playVideo()}, setTime);
      // setTimeout(()=>{this.state.player2.playVideo()}, setTime);
    }
    pause = () => {
      this.state.player.pauseVideo()
      this.state.player2.pauseVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      //
      // setTimeout(()=>{this.state.player.previousVideo()}, setTime);
      // setTimeout(()=>{this.state.player2.previousVideo()}, setTime);
    }
    stop = () => {
      this.state.player.stopVideo()
      this.state.player2.stopVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      //
      // setTimeout(()=>{this.state.player.previousVideo()}, setTime);
      // setTimeout(()=>{this.state.player2.previousVideo()}, setTime);
    }
    onReady = (event)=> {
      this.setState({
        player: event.target
      })
    }

    onReady2 = (event)=> {
      this.setState({
        player2: event.target
      });

    }
  render() {

    // const opts = {
    //         height: '390',
    //         width: '640',
    //         playerVars: { // https://developers.google.com/youtube/player_parameters
    //         autoplay: 0
    //       }
    // };

  return (
    <div>
      <YouTube
        key="212cdsdc121"
        videoId="2g811Eo7K8U"
        opts={this.state.opts1}
        onReady={this.onReady}
      />
      <YouTube
        key="212cdsjknkjdc121"
        videoId="2g811Eo7K8U"
        opts={this.state.opts2}
        onReady={this.onReady2}
      />
    <button onClick={this.twinPlay}>Play</button>
    <button onClick={this.pause}>Pause</button>
    <button onClick={this.stop}>Stop</button>
    </div>
  );
}



}

export default App;
