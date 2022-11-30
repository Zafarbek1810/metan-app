import React from 'react';
import {ServicesTableWrapper} from "./ServicesTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const ServicesTable = () => {
  return (
    <ServicesTableWrapper>
      <h3 className="title">Keshbek</h3>
      <div className="filter">
        <div className="col-3 mb-2">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "10%"}} className="row">Nomi</th>
          <th style={{width: "50%"}} className="col">Faol savdo nuqtalari</th>
          <th style={{width: "10%"}} className="col">Boshlanish  sanasi</th>
          <th style={{width: "10%"}} className="col">To'xtash sanasi</th>
          <th style={{width: "10%"}} className="col">Status</th>
          <th style={{width: "10%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "10%"}} className="row">bonus</td>
          <td style={{width: "50%"}} className="col">Guliston Metan, Saidkent Metan, Propan Metan, 24/25 Avtobaza Metan, Ipadrom Metan, Zarangari Metan</td>
          <td style={{width: "10%"}} className="col">20.11.2022 22:06</td>
          <td style={{width: "10%"}} className="col"> </td>
          <td style={{width: "10%"}} className="col">Ishga tushirildi</td>
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
    </ServicesTableWrapper>
  );
};

export default ServicesTable;