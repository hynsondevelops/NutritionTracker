import PropTypes from 'prop-types';
import React from 'react';
import FoodManager from './FoodManager';


export default class Tracker extends React.Component {
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
    	<div class="row">
	    	<div class="col-md-6">
				<FoodManager searchedFoods={this.props.searchedFoods} />
			</div> 
		</div>
      
    );
  }
}


