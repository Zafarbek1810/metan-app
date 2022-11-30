import React, {useState} from 'react';
import {ChekTableWrapper} from "./ChekTable.style";


const ChekTable = () => {
  return (
    <ChekTableWrapper>
      <h3 className="title">Cheklar</h3>
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
                <label className="form-label">Status</label>
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
                <label className="form-label">Mijoz</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="select mb-3 col-6">
                <label className="form-label">Kassir</label>
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
                <label className="form-label">dan</label>
                <input type="date" className="form-control"/>
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">gacha</label>
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
          <th style={{width: "10%"}} className="row">Sana</th>
          <th style={{width: "10%"}} className="col">Summa</th>
          <th style={{width: "10%"}} className="col">To'langan ballar</th>
          <th style={{width: "10%"}} className="col">Bonus</th>
          <th style={{width: "15%"}} className="col">Mijoz</th>
          <th style={{width: "15%"}} className="col">Kassir</th>
          <th style={{width: "10%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "10%"}} className="col">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "10%"}} className="row">1.12.12.2022</td>
          <td style={{width: "10%"}} className="col">50000</td>
          <td style={{width: "10%"}} className="col">0.00</td>
          <td style={{width: "10%"}} className="col">1200</td>
          <td style={{width: "15%"}} className="col">Zafar</td>
          <td style={{width: "15%"}} className="col">Javokhir</td>
          <td style={{width: "10%"}} className="col">Ippodrom GAS</td>
          <td style={{width: "10%"}} className="col">Muvaffaqiyatli</td>
        </tr>
        <tr>
          <td style={{width: "10%"}} className="row">1.12.12.2022</td>
          <td style={{width: "10%"}} className="col">50000</td>
          <td style={{width: "10%"}} className="col">0.00</td>
          <td style={{width: "10%"}} className="col">1200</td>
          <td style={{width: "15%"}} className="col">Zafar</td>
          <td style={{width: "15%"}} className="col">Javokhir</td>
          <td style={{width: "10%"}} className="col">Ippodrom GAS</td>
          <td style={{width: "10%"}} className="col">Muvaffaqiyatli</td>
        </tr>
        <tr>
          <td style={{width: "10%"}} className="row">1.12.12.2022</td>
          <td style={{width: "10%"}} className="col">50000</td>
          <td style={{width: "10%"}} className="col">0.00</td>
          <td style={{width: "10%"}} className="col">1200</td>
          <td style={{width: "15%"}} className="col">Zafar</td>
          <td style={{width: "15%"}} className="col">Javokhir</td>
          <td style={{width: "10%"}} className="col">Ippodrom GAS</td>
          <td style={{width: "10%"}} className="col">Muvaffaqiyatli</td>
        </tr>
        <tr>
          <td style={{width: "10%"}} className="row">1.12.12.2022</td>
          <td style={{width: "10%"}} className="col">50000</td>
          <td style={{width: "10%"}} className="col">0.00</td>
          <td style={{width: "10%"}} className="col">1200</td>
          <td style={{width: "15%"}} className="col">Zafar</td>
          <td style={{width: "15%"}} className="col">Javokhir</td>
          <td style={{width: "10%"}} className="col">Ippodrom GAS</td>
          <td style={{width: "10%"}} className="col">Muvaffaqiyatli</td>
        </tr>
        </tbody>
      </table>
    </ChekTableWrapper>
  );
};

export default ChekTable;