import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class CurrentBird extends Component {
  render() {
    const props = this.props;
    if (props.isTheEndOfGame) {
      return null;
    } else {
      if (props.isAnyChoiceWasClicked) {
        return(
          <div className="CurrentBird">
            <div className="CurrentBird-row">
              <img className="CurrentBird-logo" src={props.currentBird.image} alt="Bird" />
              <div className="CurrentBird-information">
                <div className="CurrentBird-name">
                  {props.currentBird.name}
                </div>
                <div className="CurrentBird-latin-name">
                  {props.currentBird.species}
                </div>
                <AudioPlayer />
              </div>
            </div>
            <div className="CurrentBird-row">
              <div className="CurrentBird-description">
                {props.currentBird.description}
              </div>
            </div>
          </div>
        );
      } else {
        return(
          <div className="CurrentBird">
            <span className="CurrentBird-text">Послушайте плеер.</span>
            <span className="CurrentBird-text">Выберите птицу из списка</span>
          </div>
        )
      }
    }
  }
}

export default CurrentBird;
