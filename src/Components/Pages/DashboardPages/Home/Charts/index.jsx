import React, {Component} from 'react';
import Chart from 'react-apexcharts'

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 30, 90]
      }]
    }
  }
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="area" width="100%" height={520} />
    );
  }
}

export default Charts;