import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Choices from './Choices';
import defaultBirdImage from './assets/images/defaultBirdImage.jpg';
import './App.css';
import birdsData from './assets/quizData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      score: 0,
      correctAnswerId: 0
    }
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
  }

  setCorrectAnswer() {
    const randomId = Math.floor(Math.random() * birdsData[this.state.level].length);
    console.log(randomId);
    this.setState({correctAnswerId: randomId});
  }

  nextLevel() {
    console.log('Next level!');
  }

  render() {
    console.log(this.state.correctAnswerId);
    return (
      <div className="app-wrapper">
        <Header score={this.state.score}/>
        <Navigation level={this.state.level}/>
        <CurrentQuestion />
        <div className="choices-and-answer-wrapper">
          <Choices data={birdsData[this.state.level]} correctAnswerId={this.state.correctAnswerId} click={this.nextLevel}/>
          <Answer />
        </div>
        <button className="btn-next btn-next--active">Next Level</button>
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
