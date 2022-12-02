import React from 'react';
import {DocumentsTableWrapper} from "./DocumentsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {DatePicker, Input, Space} from "antd";

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
            <div className="select">
              <label className="form-label">Savdo nuqtasi<span>*</span></label>
              <select className="form-select">
                <option disabled selected value>Tanlang</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="select">
              <label className="form-label">Hujjat turi<span>*</span></label>
              <select className="form-select">
                <option disabled selected value>Tanlang</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input">
              <label>Hujjat raqami<span>*</span></label>
              <Input size="large"/>
            </div>
              <div className="input">
                <label>Sana</label>
                <Input type="date" size="large"/>
              </div>
            <div className="input">
              <label>Amal qilish muddati</label>
              <Input type="date" size="large"/>
            </div>
            <div className="input">
              <label htmlFor="formFile" className="form-label">File<span>*</span></label>
              <Input className="form-control" type="file" id="formFile"/>
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

const DocumentsTable = () => {
  return (
    <DocumentsTableWrapper>
      <div className="top">
        <h3 className="title">Hujjatlar</h3>
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
          <th style={{width: "16%"}} className="row">Savdo nuqtasi</th>
          <th style={{width: "16%"}} className="col">Hujjat turi</th>
          <th style={{width: "16%"}} className="col">Hujjat raqami</th>
          <th style={{width: "16%"}} className="col">Berilgan sanasi</th>
          <th style={{width: "16%"}} className="col">Amal qilish muddati</th>
          <th style={{width: "16%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{width: "16%"}} className="row">Guliston Metan</td>
          <td style={{width: "16%"}} className="col">aaa</td>
          <td style={{width: "16%"}} className="col">124</td>
          <td style={{width: "16%"}} className="col">12.12.2022</td>
          <td style={{width: "16%"}} className="col">22.12.2023</td>
          <td style={{width: "16%"}} className="col">
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
          <td style={{width: "16%"}} className="row">Guliston Metan</td>
          <td style={{width: "16%"}} className="col">aaa</td>
          <td style={{width: "16%"}} className="col">124</td>
          <td style={{width: "16%"}} className="col">12.12.2022</td>
          <td style={{width: "16%"}} className="col">22.12.2023</td>
          <td style={{width: "16%"}} className="col">
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
    </DocumentsTableWrapper>
  );
};

export default DocumentsTable;