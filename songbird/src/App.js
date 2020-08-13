import React from 'react';
import logo from './logo.svg';
import defaultBirdImage from './defaultBirdImage.jpg';
import './App.css';
import birdsData from './quizData';

console.log(birdsData);

class App extends React.Component {
  render() {
    return (
      <div class="app-wrapper">
        <Header />
        <Navigation />
        <CurrentQuestion />
        <div className="choices-and-answer-wrapper">
          <Choices />
          <Answer />
        </div>
        <button class="btn-next btn-next--active">Next Level</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Songbird logo" />
        <div className="header__score">
          <div className="header__score--text">Score: </div>
          <div className="header__score--value">11</div>
        </div>
      </header>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <span className="progress-bar__element progress-bar__element--active">Rock groups</span>
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
  state = {
    count: 0
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
    console.log(this.state.count);
    const rand = Math.floor(1 + Math.random() * (7 - 1));
    const rightAnswer = birdsData[0][rand];
    console.log(rightAnswer);
  }

  render() {
    return(
      <ul className="choices-list" onClick={() => this.handleClick()}>
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
