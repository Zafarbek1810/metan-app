import React, {useState, useEffect} from 'react';
// import Chart from 'react-apexcharts'
import {ChartsWrapper} from "./Charts.style";
import dynamic from 'next/dynamic'
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";
import moment from "moment";
import UserProvider from "../../../../../Data/Providers/UserProvider";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

const Charts = () => {
    const [options, setOptions] = useState({
        stroke: {
            curve: 'smooth'
        },
        chart: {
            id: 'apexchart-example',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false,
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar"]
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    let val = Math.abs(value)
                    if (val >= 1000000) {
                        val = (val / 1000000).toFixed(0) + ' M'
                    } else if (val >= 1000) {
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
                gradientToColors: ['#95cce0'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
    })
    const [series, setSeries] = useState([{
        name: 'series-1',
        data: [10000000, 20000000, 35000000]
    }])

    useEffect(()=>{
        UserProvider.getStatistics()
            .then(res=>{
                console.log("zz",res.data)
                setOptions({
                    xaxis: {
                        categories: res.data?.amountOfPaymentsDays.map(item=>moment(new Date(item.date)).format('DD MMM'))
                    },
                })
                setSeries([{
                    data: res.data?.amountOfPaymentsDays.map(item=>item.sum)
                }])
            })
    }, [])

    return (

        <ChartsWrapper>
            <h4>Statistika</h4>
            {/*<div className="wrap">*/}
            {/*    <div>*/}
            {/*        <p>Summa</p>*/}
            {/*        <span className="first">100 900 700.00 so'm</span>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p>Bonus</p>*/}
            {/*        <span className="second">2 630 413.10 Ball</span>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p>To'langan ballar</p>*/}
            {/*        <span className="third">9 280.00 Ball</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {
                (typeof window !== 'undefined') &&
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    width="100%"
                    height={520}
                />
            }
        </ChartsWrapper>
    );
}

export default Charts;