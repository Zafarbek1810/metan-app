import React from 'react';
import {GasColumnsWrapper} from "./GasColumns.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Input} from "antd";

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
            <div className="input">
              <label>Nomi<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="select">
              <label className="form-label">Savdo nuqtasi<span>*</span></label>
              <select className="form-select">
                <option disabled selected value>Tanlang</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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


const GasColumns = () => {
  return (
    <GasColumnsWrapper>
      <div className="top">
        <h3 className="title">Kolonkalar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            + Qo'shish
          </button>
          {/*====MODAL====*/}
          <Modal/>
        </div>

      </div>
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