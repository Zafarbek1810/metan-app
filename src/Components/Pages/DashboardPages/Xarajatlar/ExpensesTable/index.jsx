import React from 'react';
import {ExpensesTableWrapper} from "./ExpensesTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const ExpensesTable = () => {
  return (
    <ExpensesTableWrapper>
      <h3 className="title">Xarajatlar</h3>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "10%"}} className="row">Nomi</th>
          <th style={{width: "10%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "8%"}} className="col">Sana</th>
          <th style={{width: "8%"}} className="col">Summa</th>
          <th style={{width: "8%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "10%"}} className="row">1.bla bla</td>
          <td style={{width: "10%"}} className="col">Ippodrom</td>
          <td style={{width: "10%"}} className="col">12.12.2022</td>
          <td style={{width: "15%"}} className="col">120.000</td>
          <td style={{width: "10%"}} className="col">
            <div className="btns">
              <button>
                <DeleteSvg/>
              </button>
              <button>
                <EditSvg/>
              </button>
            </div>
          </td>
        </tr>

        </tbody>
      </table>
    </ExpensesTableWrapper>
  );
};

export default ExpensesTable;