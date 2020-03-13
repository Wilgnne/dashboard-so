import React from 'react';
import { Chart } from 'react-chartjs-2';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      data: this.props.data,
      options: {
        tooltips: {
          // Disable the on-canvas tooltip
          enabled: false,
        },
        hover: {
          animationDuration: 0 
        },
        responsiveAnimationDuration: 0,
        scales: {
          yAxes: [{
            ticks: {
              max: 100,
              min: 0
            }
          }]
        }
      }
    });
  }

  componentDidUpdate() {
    this.myChart.update();
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    );
  }
}

export default LineChart;
