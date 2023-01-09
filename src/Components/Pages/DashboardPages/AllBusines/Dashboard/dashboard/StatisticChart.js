import React, {Component, useState} from 'react';
// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic'
import {ChartsWrapper} from "../../../Home/Charts/Charts.style";
import {Divider} from "antd";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Charts =()=> {

    const [options, setOptions] = useState({
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar"]
        },
        yaxis: {
            labels: {
                formatter: function(value) {
                    let val = Math.abs(value)
                    if (val >= 1000000) {
                        val = (val / 1000000).toFixed(0) + ' M'
                    }else if(val >= 1000){
                        val = (val / 1000).toFixed(0) + ' K'
                    }
                    return val
                }
            }
        },
        colors: ['#546E72']
    })

    const [series, setSeries] = useState( [{
        name: 'series-1',
        data: [10000000, 20000000, 35000000]
    }])

        return (
            <ChartsWrapper>
                <h4>Kirim</h4>
                {
                    (typeof window !== 'undefined') &&
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="100%"
                    />
                }
                <Divider/>
                <h4>Chiqim</h4>
                {
                    (typeof window !== 'undefined') &&
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="100%"
                    />
                }
                <Divider/>
                <h4>Qoldiq</h4>
                {
                    (typeof window !== 'undefined') &&
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="100%"
                    />
                }

            </ChartsWrapper>
        );
}

export default Charts;