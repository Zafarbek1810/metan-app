import React, {useEffect, useState} from 'react';
import {ChekTableWrapper} from "./ChekTable.style";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import PaymentProvider from "../../../../../Data/Providers/PaymentProvider";
import MinLoader from "../../../../Common/MinLoader";
import Link from "next/link";
import Pagination from "rc-pagination";


const ChekTable = () => {
  const [loading2, setLoading2] = useState(false);
  const [cheques, setCheques] = useState({})
  const [totalElements, setTotalElements]=useState(10)

  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };


  useEffect(() => {
    setLoading2(true);
    PaymentProvider.getAllCheques(currentPage-1, 10)
      .then(res => {
        console.log("chek", res)
        setCheques(res.data.data)
        setTotalElements(res.data.count)
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

      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "15%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">Sana</th>
          <th style={{width: "10%"}} className="col">Summa</th>
          <th style={{width: "10%"}} className="col">To'langan ballar</th>
          <th style={{width: "10%"}} className="col">Bonus</th>
          <th style={{width: "15%"}} className="col">Mijoz</th>
          <th style={{width: "15%"}} className="col">Kassir</th>
          <th style={{width: "15%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "10%"}} className="col">Status</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            cheques.length ?
              cheques.map((obj, index) => (
                <tr key={obj.id} className="edit_row">
                  <td style={{width: "15%", display:"flex", justifyContent:"start", alignItems:"center", textAlign:"start", fontWeight:500, fontFamily:"Inter"}} className="col">{index+1}. {new Date(obj.date).toLocaleString("en-GB")}</td>
                  <td style={{width: "10%",color: "#43A047", fontWeight: 600}} className="col"
                      >{obj.amount}</td>
                  <td style={{width: "10%"}} className="col">0.00</td>
                  <td style={{width: "10%"}} className="col">{obj.giftedPoints}</td>
                  <td style={{width: "15%",fontWeight: 600}} className="col" >
                    <Link href="#" className="link" style={{
                      fontWeight: 600,
                      textDecoration: "none",
                      color: "#43A047"
                    }}>{obj.client?.fullName}</Link>
                  </td>
                  <td style={{width: "15%", fontWeight: 600}} className="col" >{obj.cashier?.fullName}</td>
                  <td style={{width: "15%", fontWeight: 600}} className="col" >{obj.outlet.title}</td>
                  {obj.type === "PAID_BY_MONEY" ?
                    <td style={{width: "10%"}} className="col">
                    <span style={{background: "#43A047", color: "white", borderRadius: 5, padding: 10}}>
                      To'langan
                    </span>
                    </td>
                    : obj.type === "PAID_BY_POINTS" ?
                      <td style={{width: "10%"}} className="col">
                    <span style={{background: "#FB8C00", color: "white", borderRadius: 5, padding: 10}}>
                      Ballar orqali
                    </span>
                      </td>
                      : obj.type === "PAID_POINTS" ?
                        <td style={{width: "10%"}} className="col">
                    <span style={{background: "#3949AB", color: "white", borderRadius: 5, padding: 10}}>
                      Ballar chiqarilgan
                    </span>
                        </td>
                        : <td style={{width: "10%"}} className="col">
                    <span style={{background: "#E53935", color: "white", borderRadius: 5, padding: 10}}>
                      Qarzga
                    </span>
                        </td>
                  }

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
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
      />
    </ChekTableWrapper>
  );
};

export default ChekTable;
