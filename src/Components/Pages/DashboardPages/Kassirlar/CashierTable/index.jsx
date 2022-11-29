import React from 'react';
import {CashierTableWrapper} from "./CashierTable.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const CashierTable = () => {
  return (
    <CashierTableWrapper>
      <h3 className="title">Kassirlar</h3>
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
    </CashierTableWrapper>
  );
};

export default CashierTable;