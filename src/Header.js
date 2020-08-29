import React, { Component } from 'react';
import logo from './assets/images/logo.svg';

class Header extends Component {
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

export default Header;
