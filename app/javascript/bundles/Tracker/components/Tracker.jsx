import PropTypes from 'prop-types';
import React from 'react';
import FoodManager from './FoodManager';
import DailyFoods from './DailyFoods';
import Macronutrients from './Macronutrients';
import Micronutrients from './Micronutrients';


export default class Tracker extends React.Component {
  static propTypes = {
  	searchedFoods: PropTypes.array,
    dailyDiet: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //reformating food to match USDA format
    let JSONfoods = []
    for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++)
    {
      let jsonReady = this.props.dailyDiet[i].name.replace(/=>/g, ":")
      let JSONfood = JSON.parse(jsonReady)
      JSONfoods.push(JSONfood)
    }
    this.state = {dailyDiet: JSONfoods};
    console.log(JSONfoods)
  }

  render() {
    return (
      <div>
      	<div className="row">
  				  <FoodManager searchedFoods={this.props.searchedFoods} />
  		  </div>
        <div className="row">
            <DailyFoods dailyDiet={this.state.dailyDiet} />
        </div>
        <div className="row">
          <Macronutrients dailyDiet={this.state.dailyDiet} />
        </div>
        <div className="row">
          <Micronutrients dailyDiet={this.state.dailyDiet} />
        </div>
      </div>

    

    );
  }
}


