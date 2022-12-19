import React from 'react';
import Link from "next/link";
import MinLoader from "../../../../Common/MinLoader";
import {TableWrapper} from "./Table.style";

const Table = () => {
  return (
    <TableWrapper>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "15%", display: "flex", justifyContent: "start", alignItems: "center", textAlign: "start"}}
              className="col">Sana
          </th>
          <th style={{width: "10%"}} className="col">Chek summa</th>
          <th style={{width: "10%"}} className="col">To'langan ballar</th>
          <th style={{width: "10%"}} className="col">Bonus</th>
          <th style={{width: "15%"}} className="col">Kassir</th>
          <th style={{width: "15%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "10%"}} className="col">Status</th>
        </tr>
        </thead>
        <tbody>
                <tr className="edit_row">
                  <td
                    style={{
                      width: "15%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      textAlign: "start",
                      fontWeight: 500,
                      fontFamily: "Inter"
                    }}
                    className="col">
                    03.12.2022 06:21
                    {/*{(currentPage - 1) * 20 + index + 1}. {new Date(obj.date).toLocaleString("en-GB")}*/}
                  </td>
                  <td style={{width: "10%", color: "#43A047", fontWeight: 600}} className="col">
                    42 000.00
                  </td>
                  <td style={{width: "10%"}} className="col">0.00</td>
                  <td style={{width: "10%"}} className="col">840.00</td>
                  <td style={{width: "15%", fontWeight: 600}} className="col">
                   Telmonov Timur
                  </td>
                  <td style={{width: "15%", fontWeight: 600}} className="col">Zarangari Metan</td>
                    <td style={{width: "10%"}} className="col">
                    <span style={{background: "#43A047", color: "white", borderRadius: 5, padding: 10}}>
                      Muvaffaqiyatli
                    </span>
                    </td>
                </tr>
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;