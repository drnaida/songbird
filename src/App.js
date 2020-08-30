import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Choices from './Choices';
import NextButton from './NextButton';
import CurrentQuestion from './CurrentQuestion';
import CurrentBird from './CurrentBird';
import GameOver from './GameOver';

import './App.css';
import birdsData from './assets/quizData';
import correctSound from './assets/sounds/success.mp3';
import errorSound from './assets/sounds/failure.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      score: 0,
      correctAnswerId: Math.floor(Math.random() * 6),
      isAnsweredCorrect: false,
      currentLevelScore: 5,
      areChoicesClickable: true,
      isTheEndOfGame: false,
      isAnyChoiceWasClicked: false,
      currentBird: null,
      isTheChoiceClicked: [0, 0, 0, 0, 0, 0],
    }
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.checkCorrectness = this.checkCorrectness.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  setCorrectAnswer() {
    const randomId = Math.floor(Math.random() * birdsData[this.state.level].length);
    this.setState({correctAnswerId: randomId});
  }

  nextLevel() {
    this.setState({level: this.state.level + 1});
    if (this.state.level === 5) {
      this.setState({isTheEndOfGame: true});
    } else {
      this.setState({currentLevelScore: 5});
      this.setState({isAnsweredCorrect: false});
      this.setState({areChoicesClickable: true});
      this.setState({isAnyChoiceWasClicked: false});
      this.setState({isTheChoiceClicked: [0, 0, 0, 0, 0, 0]});
      this.setCorrectAnswer();
    }
  }

  checkCorrectness(clickedChoiceBirdName, clickedChoiceBirdId) {
    this.setState({isAnyChoiceWasClicked: true});
    this.setState({currentBird: clickedChoiceBirdId});
    if (clickedChoiceBirdName === birdsData[this.state.level][this.state.correctAnswerId].name) {
      const audio = new Audio(correctSound);
      audio.play();
      this.setState({isAnsweredCorrect: true});
      this.setState({score: this.state.score + this.state.currentLevelScore});
      this.setState({areChoicesClickable: false});
      const {isTheChoiceClicked} = this.state;
      isTheChoiceClicked[clickedChoiceBirdId - 1] = 2;
      this.setState({isTheChoiceClicked});
    } else {
      const audio = new Audio(errorSound);
      audio.play();
      this.setState({currentLevelScore: this.state.currentLevelScore - 1});
      const {isTheChoiceClicked} = this.state;
      isTheChoiceClicked[clickedChoiceBirdId - 1] = 1;
      this.setState({isTheChoiceClicked});
    }
  }

  restartGame() {
    this.setState({score: 0});
    this.setState({level: 0});
    this.setState({isAnsweredCorrect: false});
    this.setState({currentLevelScore: 5});
    this.setState({areChoicesClickable: true});
    this.setState({isTheEndOfGame: false});
    this.setState({isAnyChoiceWasClicked: false});
    this.setState({correctAnswerId: Math.floor(Math.random() * 6)});
    this.setState({isTheChoiceClicked: [0, 0, 0, 0, 0, 0]});
  }

  render() {
    return (
      <div className="App-wrapper">
        <Header score={this.state.score}/>
        <Navigation level={this.state.level}/>
        <CurrentQuestion data={this.state.level < 6 ? birdsData[this.state.level] : birdsData[4]} isAnsweredCorrect={this.state.isAnsweredCorrect} correctAnswerId={this.state.correctAnswerId} isTheEndOfGame={this.state.isTheEndOfGame}/>
        <div className="choices-and-answer-wrapper">
          <Choices isTheChoiceClicked={this.state.isTheChoiceClicked} data={this.state.level < 6 ? birdsData[this.state.level] : birdsData[4]} correctAnswerId={this.state.correctAnswerId} click={this.checkCorrectness} canUserClick={this.state.areChoicesClickable} isTheEndOfGame={this.state.isTheEndOfGame}/>
          <CurrentBird isAnyChoiceWasClicked={this.state.isAnyChoiceWasClicked} isTheEndOfGame={this.state.isTheEndOfGame} currentBird={this.state.level < 6 ? birdsData[this.state.level][this.state.currentBird - 1] : birdsData[4][this.state.currentBird - 1]} />
        </div>
        <NextButton click={this.nextLevel} isAnsweredCorrect={this.state.isAnsweredCorrect} isTheEndOfGame={this.state.isTheEndOfGame}/>
        <GameOver score={this.state.score} click={this.restartGame} isTheEndOfGame={this.state.isTheEndOfGame}/>
      </div>
    );
  }
}

export default App;
