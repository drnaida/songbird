import React, { Component } from 'react';

class NextButton extends Component {
  render() {
    const props = this.props;
    return(
      <button className="NextButton" onClick={props.click}>Next Level</button>
    )
  }
}

export default NextButton;
