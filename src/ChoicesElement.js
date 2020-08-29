import React, { Component } from 'react';

class ChoicesElement extends Component {
  render() {
    const props = this.props;
    return(
      <li className="ChoicesElement" onClick={props.canUserClick ? () => {props.click(props.birdName)} : null}> {props.birdName} {props.correctAnswerId}</li>
    );
  }
}

export default ChoicesElement;
