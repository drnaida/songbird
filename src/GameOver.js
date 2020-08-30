import React, { Component } from 'react';
import congratulationsImage from './assets/images/congratulationsWithAbsoluteWin.jpg';

class GameOver extends Component {
  render() {
    const props = this.props;
    if (props.isTheEndOfGame) {
      if (props.score === 30) {
        return(
          <div className="GameOver">
            <h1>Поздравляем</h1>
            <span>Вы набрали максимальное количество баллов (30/30)!</span>
            <span>Теперь вы доктор птичьих наук!</span>
            <button onClick={props.click}>Попробовать ещё раз!</button>
            <img src={congratulationsImage} alt="Congratulations"/>
          </div>
        )
      } else {
        return(
          <div className="GameOver">
            <h1>Поздравляем</h1>
            <span>Вы прошли викторину и набрали {props.score} из 30 возможных баллов</span>

            <button onClick={props.click}>Попробовать ещё раз!</button>
          </div>
        )
      }
    } else {
      return null;
    }

  }
}

export default GameOver;
