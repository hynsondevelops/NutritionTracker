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

  render() {
    console.log(this.props.searchedFood)
  	var findingEnergy = true;
  	var i = 0;
  	var caloriesTemp;
  	var servingSizesTemp = [];
  	while (findingEnergy)
  	{
  	    if (this.props.searchedFood["nutrients"][i]["unit"] == "kcal")
  	    {
  	    	caloriesTemp = this.props.searchedFood["nutrients"][i]["value"];
  	    	for (var j = 0; j < this.props.searchedFood["nutrients"][i]["measures"].length; j++)
  	    	{	
  	    		servingSizesTemp.push(this.props.searchedFood["nutrients"][i]["measures"][j]["label"]);
  	    	}
  	    	findingEnergy = false;
  	    }
  	    i+=1;
  	}
  	const calories = caloriesTemp;
  	const options = servingSizesTemp;
  	const defaultOption = options[0];
    return (

		<tr>
            <th scope="row">{this.props.searchedFood["name"]}</th>
            <td>{this.props.searchedFood["nutrients"][0]["value"]}</td>
            <td><Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></td>
            <td>{calories}</td>

        </tr>
    );
  }
}

