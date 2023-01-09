import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic'
import {ChartsWrapper} from "../../../Home/Charts/Charts.style";
import ProjectsProvider from "../../../../../../Data/Providers/ProjectsProvider";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

const PieChartDash = () => {
    const [options, setOptions] = useState({
        series: [2, 1, 5],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['Arenda ofis', 'Bank komissiyasi', 'Boshqa'],
    })

    useEffect(()=>{
        ProjectsProvider.getOutcomesStructure()
            .then(res=>{
                console.log(res.data)
                setOptions({
                    series: [2, 1, 5],
                    chart: {
                        width: 400,
                        type: 'pie',
                    },
                    labels: ['Arenda ofis', 'Bank komissiyasi', 'Boshqa'],
                })
            })
    }, [])

    return (
        <ChartsWrapper>
            <h4>Statistika</h4>
            {
                (typeof window !== 'undefined') &&
                <Chart
                    options={options}
                    series={options.series}
                    type="pie"
                    width="360"
                />
            }
            <br/><br/>
            {
                (typeof window !== 'undefined') &&
                <Chart
                    options={options}
                    series={options.series}
                    type="pie"
                    width="360"
                />
            }

        </ChartsWrapper>
    );
}

export default PieChartDash;
