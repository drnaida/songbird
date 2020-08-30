import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';

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
              <div className="CurrentBird-logo">
              </div>
              <div className="CurrentBird-information">
                <div className="CurrentBird-name">
                  Something
                </div>
                <div className="CurrentBird-latin-name">
                  sdfsdf
                </div>
                <AudioPlayer />
              </div>
            </div>
            <div className="CurrentBird-row">
              <div className="CurrentBird-description">
                lorem lorem lorem lorem lorem lodsfsdfsdfsdddddddddddddddddddddddddddddddddd
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
