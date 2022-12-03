import React from 'react';
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

const cardsData = [
  {
    icon: <UsersSvg/>,
    span: "1 552.00",
    p: "Umumiy mijozlar",
  },
  {
    icon: <GenMaleSvg/>,
    span: "70.00",
    p: "Erkak",
  },
  {
    icon: <GenFemaleSvg/>,
    span: "1.00",
    p: "Ayol",
  },
  {
    icon: <CardSvg/>,
    span: "100 976 605.00",
    p: "Xaridlar",
  },
  {
    icon: <DollarSvg/>,
    span: "100 967 325.00",
    p: "To'langan summa",
  },
  {
    icon: <DollarSvg2/>,
    span: "9 280.00",
    p: "To'langan ballar",
  },
  {
    icon: <AwardSvg/>,
    span: "2 621 133.10",
    p: "Mijoz ballari",
  },
  {
    icon: <CheckSvg/>,
    span: "35 555.00",
    p: "O'rtacha chek",
  },
  {
    icon: <UserCardSvg/>,
    span: "26.00",
    p: "O'rtacha yosh",
  },

]

const Cards = () => {
  return (
    <CardsWrapper>
      <div className="top">
        <h3 className="title">Statistika</h3>
        <div className="filter row">
          <div className="select mb-3 col-md-3 col-sm-6 col-12 col ">
            <select className="form-select">
              <option disabled selected value>Tanlang</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3 col-md-3 col-sm-6 col-12 col">
            <input type="date" className="form-control"/>
          </div>
          <div className="mb-3 col-md-3 col-sm-6 col-12 col">
            <input type="date" className="form-control"/>
          </div>
          <button className="btn btn-primary mb-3 col-md-2 col-sm-6 col-12 col px-4">Filtr</button>
        </div>
      </div>
      <div className="cards">
        {
          cardsData.map((item, index) => (
            <div key={index}>
              <div className="left">
                {item.icon}
              </div>
              <div className="right">
                <span>{item.span}</span>
                <p>{item.p}</p>
              </div>
            </div>
          ))
        }
      </div>
    </CardsWrapper>
  );
};

export default Cards;