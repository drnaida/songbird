import React, { Component } from 'react';
import ChoicesElement from './ChoicesElement';

class Choices extends Component {
  render() {
    const props = this.props;
    return(
      <ul className="Choices">
        {props.data.map((bird) => (
          <ChoicesElement birdName={bird.name} isCorrect={(bird.id - 1) === props.correctAnswerId} click={props.click} canUserClick={props.canUserClick}/>
        ))}
      </ul>
    );
  }
}

export default Choices;
