import React from 'react';
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {DebtorsTableWrapper} from "./DebtorsTable.style";

const DebtorsTable = () => {
  return (
    <DebtorsTableWrapper>
      <h3 className="title">Qarzdorlar</h3>
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
          <td style={{width: "15%"}} className="col">
            <span style={{color:"red", fontWeight:600}}>30.000</span>
          </td>
          <td style={{width: "10%"}} className="col">29.11.2022</td>

        </tr>
        <tr>
          <td style={{width: "10%"}} className="row">1.Zafarbek</td>
          <td style={{width: "10%"}} className="col">998914355612</td>
          <td style={{width: "10%"}} className="col">80T123TT</td>
          <td style={{width: "10%"}} className="col">Xetchbek</td>
          <td style={{width: "15%"}} className="col">120.000</td>
          <td style={{width: "15%"}} className="col">
            <span style={{color:"red", fontWeight:600}}>30.000</span>
          </td>
          <td style={{width: "10%"}} className="col">29.11.2022</td>

        </tr>

        </tbody>
      </table>
    </DebtorsTableWrapper>
  );
};

export default DebtorsTable;