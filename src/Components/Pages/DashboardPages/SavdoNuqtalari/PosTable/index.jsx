import React from 'react';
import {PosTableWrapper} from "./PosTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const PosTable = () => {
  return (
    <PosTableWrapper>
      <h3 className="title">Savdo nuqtalari</h3>
      <div className="filter">
        <div className="col-3 mb-2">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "3%"}} className="row">ID</th>
          <th style={{width: "10%"}} className="col">Rasm</th>
          <th style={{width: "10%"}} className="col">Savdo nuqtasi nomi</th>
          <th style={{width: "8%"}} className="col">Ochiq</th>
          <th style={{width: "8%"}} className="col">Faollashtirilgan</th>
          <th style={{width: "10%"}} className="col">Balans</th>
          <th style={{width: "10%"}} className="col">Tarif</th>
          <th style={{width: "30%"}} className="col">Kalit</th>
          <th style={{width: "10%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "3%"}} className="row">1</td>
          <td style={{width: "10%"}} className="col"><img src="/img/metan.png" alt=""/></td>
          <td style={{width: "10%"}} className="col">Guliston Metan</td>
          <td style={{width: "8%"}} className="col">Ha</td>
          <td style={{width: "8%"}} className="col">Ha</td>
          <td style={{width: "10%"}} className="col">0.00</td>
          <td style={{width: "10%"}} className="col">500.000</td>
          <td style={{width: "30%"}} className="col">946b1920-68ab-11ed-87b8-0242ac12000c</td>
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
    </PosTableWrapper>
  );
};

export default PosTable;