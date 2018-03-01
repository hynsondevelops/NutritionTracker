import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from 'react-dropdown';


export default class FoodRow extends React.Component {
  static propTypes = {
  	 searchedFood: PropTypes.object,
     searchOrDaily: PropTypes.bool, //true for search result, false for daily food
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    if (this.props.searchOrDaily){
      this.state = {searchedFood: this.props.searchedFood, quantity: 1}
    }
    else{
      this.state = {searchedFood: this.props.searchedFood[0], quantity: this.props.searchedFood[1] };
    }
  }

  handleAddFood = () => {
    //AJAX call to create a food database entry in user's daily foods
    $.ajax({
      url: '/food_portions',
      type: 'POST',
      data: {food: this.state.searchedFood, quantity: this.state.quantity},
    }).success(function(data){
      //rails controller reroutes back to home
    });
  }

  quantityUpdate = (event) => {
    this.setState({quantity: parseFloat(event.target.value)})
  }

  render() {
    //variables for finding calories and serving sizes
  	let findingEnergy = true;
  	let i = 0;
  	let caloriesTemp;
  	let servingSizesTemp = [];
    <input type="submit" onClick={this.handleAddFood} />

    let AddFoodButtonTemp = ""
    if (this.props.searchOrDaily){
      AddFoodButtonTemp = <input type="submit" value="Add" onClick={this.handleAddFood} />
    }

  	while (findingEnergy)
  	{
      if (i < Object.keys(this.state.searchedFood["nutrients"]).length){
        //looking for energy units of kcal
        if (this.state.searchedFood["nutrients"][i]["unit"] == "kcal")
        {
        	caloriesTemp = parseFloat(this.state.searchedFood["nutrients"][i]["value"]);
        	for (let j = 0; j < Object.keys(this.state.searchedFood["nutrients"][i]["measures"]).length; j++)
        	{	
        		servingSizesTemp.push(this.state.searchedFood["nutrients"][i]["measures"][j]["label"]);
        	}
        	findingEnergy = false;
        }
        i+=1;
      }
      //food didn't have data on kcals
      else {
        caloriesTemp = 0
        servingSizesTemp.push()
        findingEnergy = false;
      }
  	}
    //variables to be used in view
  	const calories = caloriesTemp * this.state.quantity;
  	const options = servingSizesTemp;
  	const defaultOption = options[0];
    const AddFoodButton = AddFoodButtonTemp;
    return (

		<tr>  
            <th scope="row">{this.state.searchedFood["name"]}</th>
            <td><input type="text" value={this.state.quantity} onChange={this.quantityUpdate} /></td>
            <td><Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></td>
            <td>{calories}</td>
            {AddFoodButton}
        </tr>
    );
  }
}
