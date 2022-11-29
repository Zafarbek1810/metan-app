import React, {Component} from 'react';
// import Chart from 'react-apexcharts'
import {ChartsWrapper} from "./Charts.style";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
      <ChartsWrapper>
        <h3 className="title">Statistika</h3>
        {
          (typeof window !== 'undefined') &&
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height={520}
            />
        }

      </ChartsWrapper>
    );
  }
}

export default Charts;