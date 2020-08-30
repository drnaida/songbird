import React, { Component } from 'react';

class ChoicesElement extends Component {
  render() {
    const props = this.props;
    if (props.isTheChoiceClicked[props.birdId - 1] === 0) {
      return(
        <li className="ChoicesElement" onClick={() => {props.click(props.birdName, props.birdId)}}>
          <span class="ChoicesElement-dot"></span>
          {props.birdName} {props.correctAnswerId}
        </li>
      );
    } else if (props.isTheChoiceClicked[props.birdId - 1] === 1) {
      return(
        <li className="ChoicesElement" onClick={null}>
          <span class="ChoicesElement-dot ChoicesElement-dot--red"></span>
          {props.birdName} {props.correctAnswerId}
        </li>
      );
    } else if (props.isTheChoiceClicked[props.birdId - 1] === 2) {
      return(
        <li className="ChoicesElement" onClick={null}>
          <span class="ChoicesElement-dot ChoicesElement-dot--green"></span>
          {props.birdName} {props.correctAnswerId}
        </li>
      );
    } else {
      return null;
    }
  }
}

export default ChoicesElement;
