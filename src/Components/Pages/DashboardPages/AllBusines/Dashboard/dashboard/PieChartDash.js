import React, {Component} from 'react';
import dynamic from 'next/dynamic'
import {ChartsWrapper} from "../../../Home/Charts/Charts.style";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

class PieChartDash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                series: [44, 55, 13, 43, 22],
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }

        }
    }

        render()
        {
            return (
                <ChartsWrapper>
                    <h4>Statistika</h4>
                    {
                        (typeof window !== 'undefined') &&
                        <Chart
                            options={this.state.options}
                            series={this.state.options.series}
                            type="pie"
                            width="380"
                        />
                    }

                </ChartsWrapper>
            );
        }
}

export default PieChartDash;
