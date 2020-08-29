import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Choices from './Choices';
import NextButton from './NextButton';
import CurrentQuestion from './CurrentQuestion';

import './App.css';
import birdsData from './assets/quizData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      score: 0,
      correctAnswerId: 0,
      isAnsweredCorrect: false,
      currentLevelScore: 5,
      areChoicesClickable: true,
      isTheEndOfGame: false
    }
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.checkCorrectness = this.checkCorrectness.bind(this);
  }

  setCorrectAnswer() {
    const randomId = Math.floor(Math.random() * birdsData[this.state.level].length);
    this.setState({correctAnswerId: randomId});
  }

  nextLevel() {
    console.log('Next level!');
    this.setState({level: this.state.level + 1});
    this.setState({isAnsweredCorrect: false});
    this.setState({areChoicesClickable: true});
    this.setCorrectAnswer();
  }

  checkCorrectness(clickedChoiceBirdName) {
    if (clickedChoiceBirdName === birdsData[this.state.level][this.state.correctAnswerId].name) {
      this.setState({isAnsweredCorrect: true});
      this.setState({score: this.state.score + this.state.currentLevelScore});
      this.setState({areChoicesClickable: false});
      console.log('Right');
    } else {
      this.setState({currentLevelScore: this.state.currentLevelScore - 1});
      console.log('Wrong');
    }
  }

  render() {
    console.log(this.state.correctAnswerId);
    return (
      <div className="app-wrapper">
        <Header score={this.state.score}/>
        <Navigation level={this.state.level}/>
        <CurrentQuestion data={birdsData[this.state.level]} isAnsweredCorrect={this.state.isAnsweredCorrect} correctAnswerId={this.state.correctAnswerId}/>
        <div className="choices-and-answer-wrapper">
          <Choices data={birdsData[this.state.level]} correctAnswerId={this.state.correctAnswerId} click={this.checkCorrectness} canUserClick={this.state.areChoicesClickable}/>
          <Answer />
        </div>
        <NextButton click={this.nextLevel} disabled={!this.state.isAnsweredCorrect} className={this.state.isAnsweredCorrect ? 'NextButton--active' : null} />
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
