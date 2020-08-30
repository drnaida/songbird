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
      isAnyChoiceWasClicked: false
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
      this.setState({isAnsweredCorrect: false});
      this.setState({areChoicesClickable: true});
      this.setState({isAnyChoiceWasClicked: false});
      this.setCorrectAnswer();
    }
  }

  checkCorrectness(clickedChoiceBirdName) {
    this.setState({isAnyChoiceWasClicked: true});
    if (clickedChoiceBirdName === birdsData[this.state.level][this.state.correctAnswerId].name) {
      this.setState({isAnsweredCorrect: true});
      this.setState({score: this.state.score + this.state.currentLevelScore});
      this.setState({areChoicesClickable: false});
    } else {
      this.setState({currentLevelScore: this.state.currentLevelScore - 1});
    }
  }

  restartGame() {
    console.log('Restart');
    this.setState({score: 0});
    this.setState({level: 0});
    this.setState({isAnsweredCorrect: false});
    this.setState({currentLevelScore: 5});
    this.setState({areChoicesClickable: true});
    this.setState({isTheEndOfGame: false});
    this.setState({isAnyChoiceWasClicked: false});
    this.setCorrectAnswer();
  }

  render() {
    return (
      <div className="App-wrapper">
        <Header score={this.state.score}/>
        <Navigation level={this.state.level}/>
        <CurrentQuestion data={this.state.level < 6 ? birdsData[this.state.level] : birdsData[4]} isAnsweredCorrect={this.state.isAnsweredCorrect} correctAnswerId={this.state.correctAnswerId} isTheEndOfGame={this.state.isTheEndOfGame}/>
        <div className="choices-and-answer-wrapper">
          <Choices data={this.state.level < 6 ? birdsData[this.state.level] : birdsData[4]} correctAnswerId={this.state.correctAnswerId} click={this.checkCorrectness} canUserClick={this.state.areChoicesClickable} isTheEndOfGame={this.state.isTheEndOfGame}/>
          <CurrentBird isAnyChoiceWasClicked={this.state.isAnyChoiceWasClicked} isTheEndOfGame={this.state.isTheEndOfGame}/>
        </div>
        <NextButton click={this.nextLevel} isAnsweredCorrect={this.state.isAnsweredCorrect} isTheEndOfGame={this.state.isTheEndOfGame}/>
        <GameOver score={this.state.score} click={this.restartGame}/>
      </div>
    );
  }
}

export default App;
