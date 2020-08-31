import React, { Component } from 'react';
import logo from './assets/images/logo.svg';

class Header extends Component {
  render() {
    const props = this.props;
    return (
      <header className="Header">
        <img className="Header-logo" src={logo} alt="Songbird logo" />
        <div className="Header-score">
          Score: {props.score}
        </div>
      </header>
    );
  }
}

export default Header;
