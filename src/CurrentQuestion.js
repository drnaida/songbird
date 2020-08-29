import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import defaultBirdImage from './assets/images/defaultBirdImage.jpg';

class CurrentQuestion extends Component {
  render() {
    const props = this.props;
    const correctSetOfData = props.data[props.correctAnswerId];
    return(
      <div className="CurrentQuestion">
        <img className="CurrentQuestion-logo" src={props.isAnsweredCorrect ? correctSetOfData.image : defaultBirdImage} alt="Default bird"/>
        <div className="CurrentQuestion-control-panel">
          <div className="CurrentQuestion-bird-name">{props.isAnsweredCorrect ? correctSetOfData.name : '******'}</div>
          <AudioPlayer sourceAudio={props.correctAnswerId} />
        </div>
      </div>
    );
  }
}


export default CurrentQuestion;
