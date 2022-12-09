import React from 'react';
import {ClientsTableWrapper} from "./ClientsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Input} from "antd";

const Modal=()=>{
  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Barcha mijozlarga push-xabarnoma yuborish</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            <div className="input">
              <label>Nomi<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="input">
              <label>Ta'rif<span>*</span></label>
              <Input size="large"/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Bekor qilish</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ClientsTable = () => {
  return (
    <ClientsTableWrapper>
      <div className="top">
        <h3 className="title">Mijozlar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Barcha mijozlarga push-xabarnoma yuborish
          </button>
          {/*====MODAL====*/}
          <Modal/>
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