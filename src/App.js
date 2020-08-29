import React from 'react';
import logo from './assets/images/logo.svg';
import defaultBirdImage from './assets/images/defaultBirdImage.jpg';
import './App.css';
import birdsData from './assets/quizData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      score: 0
    }
  }
  render() {
    return (
      <div className="app-wrapper">
        <Header score={this.state.score}/>
        <Navigation level={this.state.score}/>
        <CurrentQuestion />
        <div className="choices-and-answer-wrapper">
          <Choices data={birdsData[this.state.level - 1]}/>
          <Answer />
        </div>
        <button className="btn-next btn-next--active">Next Level</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const props = this.props;
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Songbird logo" />
        <div className="header__score">
          <div className="header__score--text">Score: </div>
          <div className="header__score--value">{props.score}</div>
        </div>
      </header>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <span className="progress-bar__element">Разминка</span>
        <span className="progress-bar__element">Воробьиные</span>
        <span className="progress-bar__element">Лесные птицы</span>
        <span className="progress-bar__element">Певчие птицы</span>
        <span className="progress-bar__element">Хищные птицы</span>
        <span className="progress-bar__element">Морские птицы</span>
      </div>
    );
  }
}

class CurrentQuestion extends React.Component {
  render() {
    return(
      <div className="current-question-block">
        <img className="current-question-block__logo" src={defaultBirdImage} alt="Default bird"/>
        <div className="current-question-block__control-panel">
          <div className="current-question-block__bird-name">******</div>
          <div className="current-question-block__controls">Controls</div>
        </div>
      </div>
    );
  }
}

class Choices extends React.Component {
  render() {
    const props = this.props;
    console.log(props);
    return(
      <ul className="choices-list">
        <li className="choices-list__element">
          Something
        </li>
        <li className="choices-list__element">
          Something
        </li>
        <li className="choices-list__element">
          Something
        </li>
        <li className="choices-list__element">
          Something
        </li>
        <li className="choices-list__element">
          Something
        </li>
        <li className="choices-list__element">
          Something
        </li>
      </ul>
    );
  }
}

class Answer extends React.Component {
  render() {
    return(
      <div className="answer-block">
        <div className="answer-block__row">
          <div className="answer-block__logo">

          </div>
          <div className="answer-block__information">
            <div className="answer-block__information--name">
              Something
            </div>
            <div className="answer-block__information--latin-name">
              sdfsdf
            </div>
            <div className="answer-block__information--audio">
              Audio
            </div>
          </div>
        </div>
        <div className="answer-block__row">
          <div className="answer-block__description">
            lorem lorem lorem lorem lorem lodsfsdfsdfsdddddddddddddddddddddddddddddddddd
          </div>
        </div>
      </div>
    );
  }
}
export default App;
