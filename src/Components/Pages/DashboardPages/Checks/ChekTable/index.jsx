import React, {useEffect, useState} from 'react';
import {ChekTableWrapper} from "./ChekTable.style";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import PaymentProvider from "../../../../../Data/Providers/PaymentProvider";
import MinLoader from "../../../../Common/MinLoader";


const ChekTable = () => {
  const [loading2, setLoading2] = useState(false);
  const [cheques, setCheques] = useState({})


  useEffect(() => {
    setLoading2(true);
    PaymentProvider.getAllCheques(0, 1000)
      .then(res => {
        console.log(res)
        setCheques(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [])


  console.log(cheques)
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
        {
          !loading2 ?
            cheques.length ?
              cheques.map((obj, index) => (
                <tr key={obj.id}>
                  <td style={{width: "10%"}} className="row">1.12.12.2022</td>
                  <td style={{width: "10%"}} className="col">{obj.amount}</td>
                  <td style={{width: "10%"}} className="col">0.00</td>
                  <td style={{width: "10%"}} className="col">{obj.giftedPoints}</td>
                  <td style={{width: "15%"}} className="col">{obj.client?.fullName}</td>
                  <td style={{width: "15%"}} className="col">{obj.cashier?.fullName}</td>
                  <td style={{width: "10%"}} className="col">{obj.outlet.title}</td>
                  <td style={{width: "10%"}} className="col">Muvaffaqiyatli</td>
                </tr>
              ))
              : <div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3>Cheklar mavjud emas!</h3></div>
            : <MinLoader/>
        }

        </tbody>
      </table>
    </ChekTableWrapper>
  );
};

export default ChekTable;
