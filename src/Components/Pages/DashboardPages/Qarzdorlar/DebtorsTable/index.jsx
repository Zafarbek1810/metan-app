import React, {useEffect, useState} from 'react';
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {DebtorsTableWrapper} from "./DebtorsTable.style";
import PaymentProvider from "../../../../../Data/Providers/PaymentProvider";
import Message from "../../../../../utils/Message";
import MinLoader from "../../../../Common/MinLoader";
import Pagination from "rc-pagination";

const DebtorsTable = () => {
  const [deptors, setDeptors]=useState([])
  const [loading2, setLoading2] = useState(false)

  const [totalElements, setTotalElements]=useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };


  useEffect(()=>{
    setLoading2(true);
    PaymentProvider.getDeptors(currentPage-1, 10)
      .then(({data}) => {
        setDeptors(data.data)
        setTotalElements(data.count)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [currentPage])

  return (
    <DebtorsTableWrapper>
      <h3 className="title">Qarzdorlar</h3>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "10%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">Ism</th>
          <th style={{width: "10%"}} className="col">Telefon</th>
          <th style={{width: "8%"}} className="col">Avto raqami</th>
          <th style={{width: "8%"}} className="col">Balans</th>
          <th style={{width: "8%"}} className="col">Qarz</th>
          <th style={{width: "8%"}} className="col">Qaytarish kuni</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2?
            deptors.length ?
              deptors.map((obj, index)=>(
                <tr key={obj.id}>
                  <td style={{width: "10%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">{index+1}. {obj.fullName}</td>
                  <td style={{width: "10%"}} className="col">{obj.phoneNumber}</td>
                  <td style={{width: "10%"}} className="col">{obj.plateNumber}</td>
                  <td style={{width: "15%"}} className="col">{obj.balance}</td>
                  <td style={{width: "15%"}} className="col">
                    <span style={{color:"red", fontWeight:600}}>{obj.totalDebt}</span>
                  </td>
                  <td style={{width: "10%"}} className="col">{new Date(obj.lastVisit).toLocaleString("en-GB")}</td>

                </tr>
              ))
              :<div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3 style={{fontFamily:"Inter"}}>Qarzdorlar mavjud emas!</h3></div>
            : <MinLoader/>
        }
        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
      />
    </DebtorsTableWrapper>
  );
};

export default DebtorsTable;