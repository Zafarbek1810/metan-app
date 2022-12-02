import React from 'react';
import {ExpensesTableWrapper} from "./ExpensesTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Input, Select} from "antd";

const Modal=()=>{
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Qo'shish</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            <div className="select">
              <label className="form-label">Savdo nuqtasi<span>*</span></label>
              <select className="form-select">
                <option disabled selected value>Tanlang</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input">
              <label>Nomi<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="input">
              <label>Summa<span>*</span></label>
              <Input size="large"/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Bekor qilish</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Saqlash</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExpensesTable = () => {
  return (
    <ExpensesTableWrapper>
      <div className="top">
        <h3 className="title">Xarajatlar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            + Qo'shish
          </button>
          {/*====MODAL====*/}
          <Modal/>
        </div>

      </div>
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
              <div className="mb-3 col-6">
                <label className="form-label">Sana</label>
                <input type="date" className="form-control"/>
              </div>
            </div>
            <div className="btns">
              <button className="btn btn-secondary">Bekor qilish</button>
              <button className="btn btn-success">Qo'llash</button>
            </div>
          </form>
        </div>
        <div className="summ col-4">
          <h3>Umumiy summa:</h3>
          <p>48 411 960.00</p>
        </div>
      </div>
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