import React, { Component } from 'react';

class NavigationElement extends Component {
  render() {
    const props = this.props;
    return (
        <span className={props.isActive ? 'NavigationElement NavigationElement--active' : 'NavigationElement'}>{props.categoryName}</span>
    );
  }
}

export default NavigationElement;
