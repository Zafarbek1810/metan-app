import React from 'react';
import {CashierTableWrapper} from "./CashierTable.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Input} from "antd";

const Modal=()=>{
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
              <label>Ism<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="input">
              <label>Login<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="input">
              <label>Maxfiy so'z<span>*</span></label>
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

const CashierTable = () => {
  return (
    <CashierTableWrapper>
      <div className="top">
        <h3 className="title">Kassirlar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            + Qo'shish
          </button>
          {/*====MODAL====*/}
          <Modal/>
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
    </CashierTableWrapper>
  );
};

export default CashierTable;