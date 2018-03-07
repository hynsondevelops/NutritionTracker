import PropTypes from 'prop-types';
import React from 'react';
import FoodRow from './FoodRow.jsx';

export default class FoodSelector extends React.Component {
    static propTypes = {
    	 searchedFoods: PropTypes.array
    };

    /**
    * @param props - Comes from your rails view.
    */
    constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {searchedFoods: [], searchString: null};
    }

    getDefaultProps(){
      return { searchedFoods};
    }

    


    initialAjaxSuccess = (data) => {
      console.log("initial")
        this.setState({searchedFoods: []})
        //no result found
        if (data.list == null){
            let placeholderFood = {
              "ndbno": "0",
              "name": "Sorry, no results for that search.",
              "nutrients": [
                {
                  "nutrient_id": "208",
                  "name": "Energy",
                  "derivation": "LCCS",
                  "group": "Proximates",
                  "unit": "kcal",
                  "value": "N/A",
                  "measures": [
                    {
                      "label": "ONZ",
                      "eqv": 0,
                      "eunit": "g",
                      "qty": 0,
                      "value": "0"
                    }
                  ]
                }
                ]
            }
            this.setState({searchedFoods: [placeholderFood]})
        }
        //makes AJAX calls for detailed info on all foods found in results
        for (let i = 0; i < data.list.item.length; i++){
            let APIURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + data.list.item[i].ndbno + "&type=f&format=json&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7"
            $.get({
                url: APIURL,
                success: this.detailedAjaxSuccess
            })
        }
    }

    detailedAjaxSuccess = (data) => {
      console.log("Detailed")
        this.setState({searchedFoods: this.state.searchedFoods.concat([data.report.food])})

    }




    handleChange = (event) => {
      console.log(event.target.value)
        this.setState({searchString: event.target.value});
        //making call to USDA database 
        let APIURL = ("https://api.nal.usda.gov/ndb/search/?format=json&q=" + event.target.value + "&sort=n&max=25&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
        $.getJSON({
            url:APIURL, 
            success: this.initialAjaxSuccess
        })
    }

    render() {
      const foodRows = this.state.searchedFoods.map((food) =>
          <FoodRow key={food["ndbno"]} searchedFood={food} searchOrDaily={true} />
        );
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input className="food_search" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
      </div>
    );
    }
}
