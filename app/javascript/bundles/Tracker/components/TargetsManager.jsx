import PropTypes from 'prop-types';
import React from 'react';

export default class TargetsManager extends React.Component {
  static propTypes = {
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
				<h1>Hello, World!</h1>
			</div> 
		</div>
      
    );
  }
}

