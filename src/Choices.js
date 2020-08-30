import React, { Component } from 'react';
import ChoicesElement from './ChoicesElement';

class Choices extends Component {
  render() {
    const props = this.props;
    console.log('Правильный ответ:');
    console.log(props.data[props.correctAnswerId].name);
    if (props.isTheEndOfGame) {
      return null;
    } else {
        return(
          <ul className="Choices">
            {props.data.map((bird) => (
              <ChoicesElement isTheChoiceClicked={props.isTheChoiceClicked} birdName={bird.name} isCorrect={(bird.id - 1) === props.correctAnswerId} click={props.click} canUserClick={props.canUserClick} birdId={bird.id}/>
            ))}
          </ul>
        );
    }
  }
}

export default Choices;
