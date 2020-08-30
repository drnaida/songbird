import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Choices from './Choices';
import NextButton from './NextButton';
import CurrentQuestion from './CurrentQuestion';
import CurrentBird from './CurrentBird';

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
      isTheEndOfGame: false,
      isAnyChoiceWasClicked: false
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
    this.setState({isAnyChoiceWasClicked: false});
    this.setCorrectAnswer();
  }

  checkCorrectness(clickedChoiceBirdName) {
    this.setState({isAnyChoiceWasClicked: true});
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
      <div className="App-wrapper">
        <Header score={this.state.score}/>
        <Navigation level={this.state.level}/>
        <CurrentQuestion data={birdsData[this.state.level]} isAnsweredCorrect={this.state.isAnsweredCorrect} correctAnswerId={this.state.correctAnswerId}/>
        <div className="choices-and-answer-wrapper">
          <Choices data={birdsData[this.state.level]} correctAnswerId={this.state.correctAnswerId} click={this.checkCorrectness} canUserClick={this.state.areChoicesClickable}/>
          <CurrentBird isAnyChoiceWasClicked={this.state.isAnyChoiceWasClicked}/>
        </div>
        <NextButton click={this.nextLevel} isAnsweredCorrect={this.state.isAnsweredCorrect} />
      </div>
    );
  }
}

export default App;
