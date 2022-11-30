import React from 'react';
import {GasColumnsWrapper} from "./GasColumns.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const GasColumns = () => {
  return (
    <GasColumnsWrapper>
      <h3 className="title">Kolonkalar</h3>
      <div className="filter">
        <div className="select mb-3 col-3">
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
          <th style={{width: "30%"}} className="row">To'liq ismi</th>
          <th style={{width: "30%"}} className="col">Login</th>
          <th style={{width: "30%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "30%"}} className="row">1. Abulfayz</td>
          <td style={{width: "30%"}} className="col">abulfayz</td>
          <td style={{width: "30%"}} className="col">
            <div className="btns">
              <button>
                <EditSvg/>
              </button>
            </div>
          </td>
        </tr>

        </tbody>
      </table>
    </GasColumnsWrapper>
  );
};

export default GasColumns;