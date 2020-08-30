import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';

class CurrentBird extends Component {
  render() {
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
  }
}

export default CurrentBird;
