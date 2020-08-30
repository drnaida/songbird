import React, { Component } from 'react';

class GameOver extends Component {
  render() {
    const props = this.props;
    return(
      <div className="GameOver">
        <h1>Поздравляем</h1>
        <span>Вы прошли викторину и набрали {props.score} из 30 возможных баллов</span>

        <button onClick={props.click}>Попробовать ещё раз!</button>
      </div>
    )
  }
}

export default GameOver;
