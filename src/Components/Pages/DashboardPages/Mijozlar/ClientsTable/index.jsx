import React from 'react';
import {ClientsTableWrapper} from "./ClientsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const ClientsTable = () => {
  return (
    <ClientsTableWrapper>
      <h3 className="title">Mijozlar</h3>
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