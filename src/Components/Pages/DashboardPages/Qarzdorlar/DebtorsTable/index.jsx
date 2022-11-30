import React from 'react';
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {DebtorsTableWrapper} from "./DebtorsTable.style";

const DebtorsTable = () => {
  return (
    <DebtorsTableWrapper>
      <h3 className="title">Qarzdorlar</h3>
      <div className="filter ">
        <div className="col-3 mb-2">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
        <div className="select mb-2 ms-3 col-3">
          <select className="form-select">
            <option disabled selected value>Tanlang</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "10%"}} className="row">Ism</th>
          <th style={{width: "10%"}} className="col">Telefon</th>
          <th style={{width: "8%"}} className="col">Avto raqami</th>
          <th style={{width: "8%"}} className="col">Avto turi</th>
          <th style={{width: "8%"}} className="col">Balans</th>
          <th style={{width: "8%"}} className="col">Qarz</th>
          <th style={{width: "8%"}} className="col">Qaytarish kuni</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "10%"}} className="row">1.Zafarbek</td>
          <td style={{width: "10%"}} className="col">998914355612</td>
          <td style={{width: "10%"}} className="col">80T123TT</td>
          <td style={{width: "10%"}} className="col">Xetchbek</td>
          <td style={{width: "15%"}} className="col">120.000</td>
          <td style={{width: "15%"}} className="col">30.000</td>
          <td style={{width: "10%"}} className="col">29.11.2022</td>

        </tr>

        </tbody>
      </table>
    </DebtorsTableWrapper>
  );
};

export default DebtorsTable;