import React from 'react';
import {DocumentsTableWrapper} from "./DocumentsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";

const DocumentsTable = () => {
  return (
    <DocumentsTableWrapper>
      <h3 className="title">Hujjatlar</h3>
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