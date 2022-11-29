import React from 'react';
import {DirectorTableWrapper} from "./DirectorTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const DirectorTable = () => {
  return (
    <DirectorTableWrapper>
      <h3 className="title">Ish boshqaruvchi</h3>
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
    </DirectorTableWrapper>
  );
};

export default DirectorTable;