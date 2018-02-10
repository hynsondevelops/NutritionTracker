import PropTypes from 'prop-types';
import React from 'react';
import FoodRow from './FoodRow.jsx';

export default class FoodSelector extends React.Component {
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
    	<table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Serving Size</th>
          </tr>
        </thead>
        <tbody>
          < FoodRow searchedFood={this.props.searchedFoods[0]} />
          
        </tbody>
      </table>
    );
  }
}
