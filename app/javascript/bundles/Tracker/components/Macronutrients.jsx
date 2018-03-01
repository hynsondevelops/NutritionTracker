import PropTypes from 'prop-types';
import React from 'react';


export default class Macronutrients extends React.Component {
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
    //reformating food to match USDA format
    
    this.state = { };
  }

  render() {
    //all in grams
    let calorieTotal = 0;
    let carbTotal = 0;
    let proteinTotal = 0;
    let fatTotal = 0;
    for (let i = 0; i < Object.keys(this.props.dailyDiet).length; i++){
      calorieTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[0].value) * parseFloat(this.props.dailyDiet[i][1])
      proteinTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[1].value) * parseFloat(this.props.dailyDiet[i][1])
      fatTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[2].value) * parseFloat(this.props.dailyDiet[i][1])
      carbTotal += parseFloat(this.props.dailyDiet[i][0].nutrients[3].value) * parseFloat(this.props.dailyDiet[i][1])
    }
    const calorie = calorieTotal;
    const carb = carbTotal;
    const protein = proteinTotal;
    const fat = fatTotal;
    return (
      <div>
        <h3> Calories: {calorie} kcal</h3>
        <h3> Protein: {protein} g</h3>
        <h3> Fat: {fat} g</h3>
        <h3> Carbohydrates: {carb} g</h3>
      </div>
    

    );
  }
}


