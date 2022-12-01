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
        <h4>Statistika</h4>
        <div className="wrap">
          <div>
            <p>Summa</p>
            <span className="first">100 900 700.00 so'm</span>
          </div>
          <div>
            <p>Bonus</p>
            <span className="second">2 630 413.10 Ball</span>
          </div>
          <div>
            <p>To'langan ballar</p>
            <span className="third">9 280.00 Ball</span>
          </div>
        </div>
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