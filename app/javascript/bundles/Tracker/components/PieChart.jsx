import PropTypes from 'prop-types';
import React from 'react';

export default class PieChart extends React.Component {
  static propTypes = {
     macros: PropTypes.array
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {};
  }


  render() {
    let PieChart = require("react-chartjs").Pie;
    let chartData = [
      {
        value: this.props.macros[1],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Protein"
      },
      {
        value: this.props.macros[2],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Fat"
      },
      {
        value: this.props.macros[3],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Carbohydrates"
      }
    ]
    let chartOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,

      //String - The colour of each segment stroke
      segmentStrokeColor : "#fff",

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 0, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : "easeOutBounce",

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
    }
    return (<PieChart data={chartData} options={chartOptions} width="600" height="250"/>    
    );
  }
}

