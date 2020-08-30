import React, { Component } from 'react';

class NextButton extends Component {
  render() {
    const props = this.props;
    return(
      <button onClick={props.click} disabled={!props.isAnsweredCorrect} className={props.isAnsweredCorrect ? 'NextButton NextButton--active' : 'NextButton'}>Next Level</button>
    )
  }
}

export default NextButton;
