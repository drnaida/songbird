import React, { Component } from 'react';
import NavigationElement from './NavigationElement';

class Navigation extends Component {
  static defaultProps = {
    categoryNames: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
  };
  render() {
    const props = this.props;
    return (
      <div className="Navigation">
        {props.categoryNames.map((name, index) => (
          <NavigationElement categoryName={name} isActive={index === props.level} />
        ))}
      </div>
    );
  }
}

export default Navigation;
