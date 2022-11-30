import React from 'react';
import {GasColumnReportWrapper} from "./GasColumnReport.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const GasColumnReport = () => {
  return (
    <GasColumnReportWrapper>
      <h3 className="title">Kolonkalar hisoboti</h3>
      <div className="filter">
        <div className="col-3">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle px-4" data-bs-toggle="dropdown"
                  aria-expanded="false" data-bs-auto-close="outside">
            Filtr
          </button>
          <form className="dropdown-menu p-3 col-6">
            <div className="row">
              <div className="select mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select className="form-select">
                  <option disabled selected value>Tanlang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="select mb-3 col-6">
                <label className="form-label">Gaz kolonkalari</label>
                <select className="form-select">
                  <option disabled selected value>Tanlang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">Davr</label>
                <input type="date" className="form-control"/>
              </div>
              <div className="mb-3 mt-2 col-6">
                <label className="form-label"></label>
                <input type="date" className="form-control"/>
              </div>
            </div>

            <div className="btns">
              <button className="btn btn-secondary">Bekor qilish</button>
              <button className="btn btn-success">Qo'llash</button>
            </div>
          </form>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "15%"}} className="row">ID</th>
          <th style={{width: "15%"}} className="col">Ko'rsatgich</th>
          <th style={{width: "15%"}} className="col">Oxirgi ko'rsatgich</th>
          <th style={{width: "15%"}} className="col">Farqi</th>
          <th style={{width: "15%"}} className="col">Sana</th>
          <th style={{width: "15%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "15%"}} className="row">1.</td>
          <td style={{width: "15%"}} className="col">0</td>
          <td style={{width: "15%"}} className="col">0</td>
          <td style={{width: "15%"}} className="col">0</td>
          <td style={{width: "15%"}} className="col">30.11.2022</td>
          <td style={{width: "15%"}} className="col">
            <div className="btns">
              <button>
                <EditSvg/>
              </button>
            </div>
          </td>
        </tr>

        </tbody>
      </table>
    </GasColumnReportWrapper>
  );
};

export default GasColumnReport;