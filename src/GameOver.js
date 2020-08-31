import React, { Component } from 'react';
import congratulationsImage from './assets/images/congratulationsWithAbsoluteWin.jpg';

class GameOver extends Component {
  render() {
    const props = this.props;
    if (props.isTheEndOfGame) {
      if (props.score === 30) {
        return(
          <div className="GameOver">
            <h1 className="GameOver-heading">Поздравляем!</h1>
            <span className="GameOver-text">Вы набрали максимальное количество баллов (30/30)!</span>
            <span className="GameOver-text">Теперь вы доктор птичьих наук!</span>
            <button className="GameOver-button" onClick={props.click}>Попробовать ещё раз!</button>
            <img className="GameOver-image" src={congratulationsImage} alt="Congratulations"/>
          </div>
        )
      } else {
        return(
          <div className="GameOver">
            <h1 className="GameOver-heading">Поздравляем</h1>
            <span className="GameOver-text">Вы прошли викторину и набрали {props.score} из 30 возможных баллов</span>

            <button className="GameOver-button" onClick={props.click}>Попробовать ещё раз!</button>
          </div>
        )
      }
    } else {
      return null;
    }

  }
}

export default GameOver;
