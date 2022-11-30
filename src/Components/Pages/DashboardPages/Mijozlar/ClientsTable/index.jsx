import React from 'react';
import {ClientsTableWrapper} from "./ClientsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const ClientsTable = () => {
  return (
    <ClientsTableWrapper>
      <h3 className="title">Mijozlar</h3>
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
                <label className="form-label">Jinsi</label>
                <select className="form-select">
                  <option disabled selected value>Tanlang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row">

              <div className="select mb-3 col-6">
                <label className="form-label">Avto turi</label>
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
                <label className="form-label">Yoshdan</label>
                <input type="number" className="form-control"/>
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">Yoshgacha</label>
                <input type="number" className="form-control"/>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">Davr</label>
                <input type="date" className="form-control"/>
              </div>
              <div className="mb-3 mt-2 col-6">
                <label className="form-label"> </label>
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
          <th style={{width: "10%"}} className="row">Mijoz</th>
          <th style={{width: "10%"}} className="col">Telefon</th>
          <th style={{width: "8%"}} className="col">Avto turi</th>
          <th style={{width: "8%"}} className="col">Avto raqami</th>
          <th style={{width: "8%"}} className="col">Chek summasi</th>
          <th style={{width: "8%"}} className="col">Balans</th>
          <th style={{width: "8%"}} className="col">Status</th>
          <th style={{width: "8%"}} className="col">Qarz</th>
          <th style={{width: "8%"}} className="col">Oxirgi faoliyat</th>
          <th style={{width: "8%"}} className="col">Umumiy ballar</th>
          <th style={{width: "8%"}} className="col">Tashriflar soni</th>
          <th style={{width: "8%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "10%"}} className="row">1.Zafarbek</td>
          <td style={{width: "10%"}} className="col">998914355612</td>
          <td style={{width: "10%"}} className="col">Xetchbek</td>
          <td style={{width: "10%"}} className="col">80T123TT</td>
          <td style={{width: "15%"}} className="col">120.000</td>
          <td style={{width: "15%"}} className="col">30.000</td>
          <td style={{width: "10%"}} className="col">Silver</td>
          <td style={{width: "10%"}} className="col">0</td>
          <td style={{width: "10%"}} className="col">29.11.2022</td>
          <td style={{width: "10%"}} className="col">7000</td>
          <td style={{width: "10%"}} className="col">7</td>
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
        <tr>
          <td style={{width: "10%"}} className="row">1.Zafarbek</td>
          <td style={{width: "10%"}} className="col">998914355612</td>
          <td style={{width: "10%"}} className="col">Xetchbek</td>
          <td style={{width: "10%"}} className="col">80T123TT</td>
          <td style={{width: "15%"}} className="col">120.000</td>
          <td style={{width: "15%"}} className="col">30.000</td>
          <td style={{width: "10%"}} className="col">Silver</td>
          <td style={{width: "10%"}} className="col">0</td>
          <td style={{width: "10%"}} className="col">29.11.2022</td>
          <td style={{width: "10%"}} className="col">7000</td>
          <td style={{width: "10%"}} className="col">7</td>
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
        <tr>
          <td style={{width: "10%"}} className="row">1.Zafarbek</td>
          <td style={{width: "10%"}} className="col">998914355612</td>
          <td style={{width: "10%"}} className="col">Xetchbek</td>
          <td style={{width: "10%"}} className="col">80T123TT</td>
          <td style={{width: "15%"}} className="col">120.000</td>
          <td style={{width: "15%"}} className="col">30.000</td>
          <td style={{width: "10%"}} className="col">Silver</td>
          <td style={{width: "10%"}} className="col">0</td>
          <td style={{width: "10%"}} className="col">29.11.2022</td>
          <td style={{width: "10%"}} className="col">7000</td>
          <td style={{width: "10%"}} className="col">7</td>
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
    </ClientsTableWrapper>
  );
};

export default ClientsTable;