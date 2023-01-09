import React, {Component, useEffect, useState} from 'react';
// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic'
import {ChartsWrapper} from "../../../Home/Charts/Charts.style";
import {Divider} from "antd";
import ProjectsProvider from "../../../../../../Data/Providers/ProjectsProvider";
import moment from "moment/moment";

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
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#06065a'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
    })
    const [series, setSeries] = useState( [{
        name: 'series-1',
        data: [10000000, 20000000, 35000000]
    }])


    const [options2, setOptions2] = useState({
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
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#06065a'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
    })
    const [series2, setSeries2] = useState( [{
        name: 'series-1',
        data: [20000000, 23000000, 15000000]
    }])


    const [options3, setOptions3] = useState({
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
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#06065a'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
    })
    const [series3, setSeries3] = useState( [{
        name: 'series-1',
        data: [10000000, 30000000, 35000000]
    }])

    useEffect(()=>{
        ProjectsProvider.getShiftsForGraph()
            .then(res=>{
                console.log(res.data)
                console.log(moment(new Date(res.data[0].date)).format('DD-MM'))
                setOptions({
                    xaxis: {
                        categories: res.data.map(item=>moment(new Date(item.date)).format('DD-MM')).reverse()
                    },
                })
                setOptions2({
                    xaxis: {
                        categories: res.data.map(item=>moment(new Date(item.date)).format('DD-MM')).reverse()
                    },
                })
                setOptions3({
                    xaxis: {
                        categories: res.data.map(item=>moment(new Date(item.date)).format('DD-MM')).reverse()
                    },
                })
                setSeries([{
                    data: res.data.map(item=>item.totalIncome)
                }])
                setSeries2([{
                    data: res.data.map(item=>item.totalOutcome)
                }])
                setSeries3([{
                    data: res.data.map(item=>item.totalPnl)
                }])
            })
    }, [])

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
                        height={200}
                    />
                }
                <Divider style={{marginTop:0}}/>
                <h4>Chiqim</h4>
                {
                    (typeof window !== 'undefined') &&
                    <Chart
                        options={options2}
                        series={series2}
                        type="line"
                        width="100%"
                        height={200}
                    />
                }
                <Divider style={{marginTop:0}}/>
                <h4>Qoldiq</h4>
                {
                    (typeof window !== 'undefined') &&
                    <Chart
                        options={options3}
                        series={series3}
                        type="line"
                        width="100%"
                        height={200}
                    />
                }

            </ChartsWrapper>
        );
}

export default Charts;