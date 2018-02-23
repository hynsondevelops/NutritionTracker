import PropTypes from 'prop-types';
import React from 'react';
import FoodRow from './FoodRow.jsx';

export default class FoodSelector extends React.Component {
  static propTypes = {
  	 dailyDiet: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {dailyDiet: []};
  }

  getInitialState(){
      return {dailyDiet: this.props.dailyDiet};
  }

  render() {
    const foodRows = this.state.dailyDiet.map((food) =>
        <FoodRow key={food["ndbno"]} searchedFood={food} />
      );
    return (
    	<table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Serving Size</th>
            <th scope="col">Calories</th>
          </tr>
        </thead>
        <tbody>
          {foodRows }
          
        </tbody>
      </table>
    );
  }
}
