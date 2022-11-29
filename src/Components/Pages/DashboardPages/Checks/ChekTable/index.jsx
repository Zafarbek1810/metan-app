import React, {useState} from 'react';
import {ChekTableWrapper} from "./ChekTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

// <div className="filter">
//   <input type="text"/>
//   {/*<Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>*/}
//   {/*  <DropdownToggle caret size="sm">*/}
//   {/*    Filtr*/}
//   {/*  </DropdownToggle>*/}
//   {/*  <DropdownMenu>*/}
//   {/*      <div className="select">*/}
//   {/*        <label>Savdo nuqtasi</label>*/}
//   {/*        <select className="form-select form-select-sm" aria-label=".form-select-sm example">*/}
//   {/*          <option selected>Open this select menu</option>*/}
//   {/*          <option value="1">One</option>*/}
//   {/*          <option value="2">Two</option>*/}
//   {/*          <option value="3">Three</option>*/}
//   {/*        </select>*/}
//   {/*      </div>*/}
//   {/*      <div className="select">*/}
//   {/*        <label>Status</label>*/}
//   {/*        <select className="form-select form-select-sm" aria-label=".form-select-sm example">*/}
//   {/*          <option selected>Open this select menu</option>*/}
//   {/*          <option value="1">One</option>*/}
//   {/*          <option value="2">Two</option>*/}
//   {/*          <option value="3">Three</option>*/}
//   {/*        </select>*/}
//   {/*      </div>*/}
//   {/*      <div className="input">*/}
//   {/*        <label>Mijoz</label>*/}
//   {/*        <input type="text"/>*/}
//   {/*      </div>*/}
//   {/*      <div className="select">*/}
//   {/*        <label>Kassir</label>*/}
//   {/*        <select className="form-select form-select-sm" aria-label=".form-select-sm example">*/}
//   {/*          <option selected>Open this select menu</option>*/}
//   {/*          <option value="1">One</option>*/}
//   {/*          <option value="2">Two</option>*/}
//   {/*          <option value="3">Three</option>*/}
//   {/*        </select>*/}
//   {/*      </div>*/}
//   {/*      <div className="input">*/}
//   {/*        <label>dan</label>*/}
//   {/*        <input type="date"/>*/}
//   {/*      </div>*/}
//   {/*      <div className="input">*/}
//   {/*        <label>gacha</label>*/}
//   {/*        <input type="date"/>*/}
//   {/*      </div>*/}
//
//   {/*      <div className="btns">*/}
//   {/*        <button type="button" className="btn btn-secondary btn-sm">Secondary</button>*/}
//   {/*        <button type="button" className="btn btn-success btn-sm">Success</button>*/}
//   {/*      </div>*/}
//   {/*  </DropdownMenu>*/}
//   {/*</Dropdown>*/}
// </div>



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
          {/*<th style={{width: "10%"}} className="col">Action</th>*/}
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
          {/*<td style={{width: "10%"}} className="col">*/}
          {/*  <div className="btns">*/}
          {/*    <button>*/}
          {/*      <DeleteSvg/>*/}
          {/*    </button>*/}
          {/*    <button>*/}
          {/*      <EditSvg/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</td>*/}

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
          {/*<td style={{width: "10%"}} className="col">*/}
          {/*  <div className="btns">*/}
          {/*    <button>*/}
          {/*      <DeleteSvg/>*/}
          {/*    </button>*/}
          {/*    <button>*/}
          {/*      <EditSvg/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</td>*/}

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
          {/*<td style={{width: "10%"}} className="col">*/}
          {/*  <div className="btns">*/}
          {/*    <button>*/}
          {/*      <DeleteSvg/>*/}
          {/*    </button>*/}
          {/*    <button>*/}
          {/*      <EditSvg/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</td>*/}

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
          {/*<td style={{width: "10%"}} className="col">*/}
          {/*  <div className="btns">*/}
          {/*    <button>*/}
          {/*      <DeleteSvg/>*/}
          {/*    </button>*/}
          {/*    <button>*/}
          {/*      <EditSvg/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</td>*/}

        </tr>
        </tbody>
      </table>
    </ChekTableWrapper>
  );
};

export default ChekTable;