import React, { Component } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import defaultBirdImage from './assets/images/defaultBirdImage.jpg';

class CurrentQuestion extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.stopAudio = this.stopAudio.bind(this);
  }
  stopAudio() {
    this.myRef.current.audio.current.pause();
  }
  render() {
    const props = this.props;
    const correctSetOfData = props.data[props.correctAnswerId];
    if (props.isAnsweredCorrect) {
      this.stopAudio();
    }
    if (props.isTheEndOfGame) {
      return null;
    } else {
      return(
        <div className="CurrentQuestion">
          <img className="CurrentQuestion-logo" src={props.isAnsweredCorrect ? correctSetOfData.image : defaultBirdImage} alt="Default bird"/>
          <div className="CurrentQuestion-control-panel">
            <div className="CurrentQuestion-bird-name">{props.isAnsweredCorrect ? correctSetOfData.name : '******'}</div>
            <AudioPlayer ref={this.myRef} className="AudioPlayer-column" layout="horizontal-reverse" autoPlayAfterSrcChange={false} showJumpControls={false} showDownloadProgress={false} src={correctSetOfData.audio} customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}/>
          </div>
        </div>
      );
    }
  }
}


export default CurrentQuestion;
