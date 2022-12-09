import React, {useState} from 'react';
import {ChekTableWrapper} from "./ChekTable.style";


const ChekTable = () => {
  return (
    <ChekTableWrapper>
      <h3 className="title">Cheklar</h3>

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