import PropTypes from 'prop-types';
import React from 'react';
import FoodSelector from './FoodSelector.jsx';

export default class FoodManager extends React.Component {
  static propTypes = {
  	 searchedFoods: PropTypes.string
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {  };
  }

  render() {
    return (
		<FoodSelector searchedFoods={this.props.searchedFoods} />
    );
  }
}

