import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from 'react-dropdown';


export default class FoodManager extends React.Component {
  static propTypes = {
  	 searchedFood: PropTypes.object,
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

  handleAddFood = () => {
    //AJAX call to create a food database entry in user's daily foods
    $.ajax({
      url: '/foods',
      type: 'POST',
      data: this.props.searchedFood,
    }).success(function(data){
      //rails controller reroutes back to home
    });
  }

  render() {
    //variables for finding calories and serving sizes
  	let findingEnergy = true;
  	let i = 0;
  	let caloriesTemp;
  	let servingSizesTemp = [];

  	while (findingEnergy)
  	{
      if (i < Object.keys(this.props.searchedFood["nutrients"]).length){
        //looking for energy units of kcal
        if (this.props.searchedFood["nutrients"][i]["unit"] == "kcal")
        {
        	caloriesTemp = this.props.searchedFood["nutrients"][i]["value"];
        	for (let j = 0; j < Object.keys(this.props.searchedFood["nutrients"][i]["measures"]).length; j++)
        	{	
        		servingSizesTemp.push(this.props.searchedFood["nutrients"][i]["measures"][j]["label"]);
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
  	const calories = caloriesTemp;
  	const options = servingSizesTemp;
  	const defaultOption = options[0];
    return (

		<tr>  
            <th scope="row">{this.props.searchedFood["name"]}</th>
            <td>{this.props.searchedFood["nutrients"][0]["value"]}</td>
            <td><Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></td>
            <td>{calories}</td>
              <input type="submit" onClick={this.handleAddFood} />
          
        </tr>
    );
  }
}
