import PropTypes from 'prop-types';
import React from 'react';

export default class FoodManager extends React.Component {
  static propTypes = {
  	 searchedFood: PropTypes.string
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
		<tr>
            <th scope="row">{this.props.searchedFood["name"]}</th>
            <td>{this.props.searchedFood["ndbno"]}</td>
        </tr>
    );
  }
}

