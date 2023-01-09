import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic'
import {ChartsWrapper} from "../../../Home/Charts/Charts.style";
import ProjectsProvider from "../../../../../../Data/Providers/ProjectsProvider";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});


const PieChartDash = () => {
    const [optionsOutcome, setOptionsOutcome] = useState({
        series: [2, 1],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['Arenda ofis', 'Boshqa'],
    })


    useEffect(()=>{
        ProjectsProvider.getOutcomesStructure()
            .then(res=>{
                console.log(res.data)
                setOptionsOutcome({
                    series: res.data.map((i)=>+i.sum),
                    labels: res.data.map((i)=>i.articleTitle),
                })
            })
    }, [])

    return (
        <ChartsWrapper>
            <h4>Chiqim</h4>
            {
                (typeof window !== 'undefined') &&
                <Chart
                    options={optionsOutcome}
                    series={optionsOutcome.series}
                    type="pie"
                    width="360"
                />
            }

        </ChartsWrapper>
    );
}

export default PieChartDash;
