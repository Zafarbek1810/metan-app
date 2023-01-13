import React, {useEffect, useState} from 'react';
import {CardsWrapper} from "./Cards.style";
import UsersSvg from "../../../../Common/Svgs/UsersSvg";
import GenMaleSvg from "../../../../Common/Svgs/GenMaleSvg";
import GenFemaleSvg from "../../../../Common/Svgs/GenFemaleSvg";
import CardSvg from "../../../../Common/Svgs/CardSvg";
import DollarSvg from "../../../../Common/Svgs/DollarSvg";
import DollarSvg2 from "../../../../Common/Svgs/DollarSvg2";
import AwardSvg from "../../../../Common/Svgs/AwardSvg";
import CheckSvg from "../../../../Common/Svgs/CheckSvg";
import UserCardSvg from "../../../../Common/Svgs/UserCardSvg";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import {toast} from "react-toastify";
import TopSvg from "../../../../Common/Svgs/TopSvg";
import dynamic from "next/dynamic";
import moment from "moment/moment";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const Cards = () => {
    const [data, setData] = useState([])
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

    useEffect(() => {
        UserProvider.getStatistics()
            .then(res => {
                console.log(res)
                setData(res.data)
                console.log(data)
            }).catch(err => {
            console.log(err)
            toast.warning("Ma'lumotlar olinmadi")
        })
    }, [])
    useEffect(()=>{
        UserProvider.getStatistics()

            .then(res=>{
                console.log("zz",res.data)
                // console.log(moment(new Date(res.data[0].date)).format('DD-MM'))
                setOptions({
                    xaxis: {
                        categories: res.data?.amountOfExpensesDays.map(item=>moment(new Date(item.date)).format('DD MMM'))
                    },
                })
                setSeries([{
                    data: res.data?.amountOfExpensesDays.map(item=>item.sum)
                }])
            })
    }, [])

    return (
        <CardsWrapper>
            <div className="top">
                <h3 className="title">Statistika</h3>
            </div>
            <div className="wrapper">
                <div className="cards">
                    <div>
                        <div className="left">
                            <UsersSvg/>
                        </div>
                        <div className="right">
                            <span>{data.numberOfClients}</span>
                            <p>Umumiy mijozlar</p>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <CardSvg/>
                        </div>
                        <div className="right">
                            <span>{data.amountOfAllExpenses ? data.amountOfAllExpenses.toLocaleString().replaceAll(',', ' ') : "Ma'lumot yo'q"}</span>
                            <p>Xarajatlar</p>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <DollarSvg/>
                        </div>
                        <div className="right">
                            <span>{data.amountOfAllPayments ? data.amountOfAllPayments.toLocaleString().replaceAll(',', ' ') : "Ma'lumot yo'q"}</span>
                            <p>To'langan summa</p>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <DollarSvg2/>
                        </div>
                        <div className="right">
                            <span>{data.amountOfAllPaidPoints ? data.amountOfAllPaidPoints : "Ma'lumot yoq"}</span>
                            <p>To'langan ballar</p>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <AwardSvg/>
                        </div>
                        <div className="right">
                            <span>{data.amountOfAllClientPoints ? data.amountOfAllClientPoints : "Ma'lumot yoq"}</span>
                            <p>Mijoz ballari</p>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <CheckSvg/>
                        </div>
                        <div className="right">
                            <span>{data.amountOfAverageCheque ? data.amountOfAverageCheque : "Ma'lumot yo'q"}</span>
                            <p>O'rtacha chek</p>
                        </div>
                    </div>
                </div>
                <div className="statistic">
                    {
                        (typeof window !== 'undefined') &&
                        <Chart
                            options={options}
                            series={series}
                            type="line"
                            width="100%"
                            height={250}
                        />
                    }
                </div>
            </div>

        </CardsWrapper>
    );
};

export default Cards;