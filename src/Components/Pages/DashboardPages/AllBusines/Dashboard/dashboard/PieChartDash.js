import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic'
import ProjectsProvider from "../../../../../../Data/Providers/ProjectsProvider";
import {PieChartWrapper} from "./PieChart.style";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

const PieChartDash = () => {
    const [optionsIncome, setOptionsIncome] = useState({
        series: [2, 1],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['Arenda ofis', 'Boshqa'],
    })

    useEffect(()=>{
        ProjectsProvider.getIncomesStructure()
            .then(res=>{
                console.log(res.data)
                setOptionsIncome({
                    series: res.data.map((i)=>+i.sum),
                    labels: res.data.map((i)=>i.articleTitle),
                })
            })
    }, [])

    return (
        <PieChartWrapper>
            <h4>Kirim</h4>
            {
                (typeof window !== 'undefined') &&
                <Chart
                    options={optionsIncome}
                    series={optionsIncome.series}
                    type="pie"
                    width="360"
                />
            }

        </PieChartWrapper>
    );
}

export default PieChartDash;
