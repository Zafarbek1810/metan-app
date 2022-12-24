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


const Cards = () => {
    const [data, setData] = useState([])
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
                            <span>{data.amountOfAllExpenses ? data.amountOfAllExpenses : "Ma'lumot yo'q"}</span>
                            <p>Xarajatlar</p>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <DollarSvg/>
                        </div>
                        <div className="right">
                            <span>{data.amountOfAllPayments ? data.amountOfAllPayments : "Ma'lumot yo'q"}</span>
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
                    <div>
                        <div className="left">
                            <UsersSvg/>
                        </div>
                        <div className="right">
                            <p className="title">Yangi foydalanuvchilar</p>
                            <div className="bot">
                                <span>1000</span>
                                <span className="persent"><TopSvg/>25.8%</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <DollarSvg/>
                        </div>
                        <div className="right">
                            <p className="title">Jami daromad</p>
                            <div className="bot">
                                <span>3000000</span>
                                <span className="persent"><TopSvg/>25.8%</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <UsersSvg/>
                        </div>
                        <div className="right">
                            <p className="title">Xarajatlar</p>
                            <div className="bot">
                                <span>1000</span>
                                <span className="persent"><TopSvg/>25.8%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </CardsWrapper>
    );
};

export default Cards;