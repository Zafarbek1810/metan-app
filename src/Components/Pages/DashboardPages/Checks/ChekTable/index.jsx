import React, {useEffect, useRef, useState} from 'react';
import {ChekTableWrapper, FilterWrapper} from "./ChekTable.style";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import PaymentProvider from "../../../../../Data/Providers/PaymentProvider";
import MinLoader from "../../../../Common/MinLoader";
import Link from "next/link";
import Pagination from "rc-pagination";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../../../Context/UserContext";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {toast} from "react-toastify";


const ChekTable = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({});
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [activeOutlet, setActiveOutlet] = useState(null);
  const [outlets, setOutlets] = useState([]);
  const [cashiers, setCashiers] = useState([]);
  const [activeCashiers, setActiveCashiers] = useState(null);


  const [loading2, setLoading2] = useState(false);
  const [cheques, setCheques] = useState([])

  const user = useContextSelector(UserContext, ctx => ctx.state.user)

  const [totalElements, setTotalElements] = useState(20)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };

  console.log(totalElements)
  console.log(user)

  useEffect(() => {
    OutletProvider.getAllOutlets()
      .then(({data}) => {
        setOutlets(data.map(i => ({label: i.title, value: i.id})));
      }, err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    if(activeOutlet){
      OutletProvider.getOneOutlet(+activeOutlet)
        .then(({data}) => {
          console.log("data", data)
          setCashiers(data.map(i => ({label: i.fullName, value: i.id})));
        }, err => {
          console.log(err);
        })
    }
  }, [currentPage])

  useEffect(() => {
    setLoading2(true);
    let params = {outletId: user?.outletAsCashier?.id, cashierId: user.id};
    if(user?.role==="SUPER_ADMIN"){
      params={}
    }
      PaymentProvider.getAllCheques(currentPage - 1, 20, filterState)
        .then(({data}) => {
          console.log("chek", data)
          setCheques(data.data)
          setTotalElements(data.count)
        })
        .catch(err => {
          console.log(err)
          toast.error(err?.response?.data?.message);
        }).finally(() => {
        setLoading2(false);
      })
  }, [currentPage, filterState])

  const handleOutletFilter = (e) => {
    setActiveOutlet(e.target.value);
  }

  const handleCashiersFilter = (e) => {
    setActiveCashiers(e.target.value);
  }

  const onFilterSubmit = () => {
    const startDate = startDateRef.current.value.split("-").reverse().join("-");
    const endDate = endDateRef.current.value.split("-").reverse().join("-");

    const body = {
      outletId: activeOutlet,
      cashierId: activeCashiers,
      startDate,
      endDate
    }

    setIsFilterOpen(false);
    setFilterState(body);
  }

  const onFilterClear = () => {
    setActiveOutlet(null);
    setActiveCashiers(null);
    // setCashiers([]);
    startDateRef.current.value = "";
    endDateRef.current.value = "";
    setFilterState({});
    setIsFilterOpen(false);
  }

  return (
    <ChekTableWrapper>
      <h3 className="title">Cheklar</h3>
      {/*filter*/}
      <div className="filter">
        <FilterWrapper>
          <button className="btn btn-primary" onClick={() => setIsFilterOpen(p => !p)} style={{fontFamily:"Inter"}}>
            Filter
          </button>
          <div className="filter-content" style={{visibility: isFilterOpen ? "visible" : "hidden"}}>
            <div className="row">
              <div className="select mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select className="form-select" value={activeOutlet} onChange={handleOutletFilter}>
                  <option value="null" disabled>Tanlang</option>
                  {
                    outlets.map(out => (
                      <option value={out.value} key={out.value}>{out.label}</option>
                    ))
                  }
                </select>
              </div>
              <div className="select mb-3 col-6">
                <label className="form-label">Kassirlar</label>
                <select className="form-select" value={activeCashiers} onChange={handleCashiersFilter}>
                  <option value="null" disabled>Tanlang</option>
                  {
                    cashiers.map(out => (
                      <option value={out.value} key={out.value}>{out.label}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">Davr</label>
                <input ref={startDateRef} name="startDate" type="date" className="form-control"/>
              </div>
              <div className="mb-3 mt-2 col-6">
                <label className="form-label"></label>
                <input ref={endDateRef} name="endDate" type="date" className="form-control"/>
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="btn btn-secondary" onClick={onFilterClear}>Bekor qilish</div>
              <div className="btn btn-success" onClick={onFilterSubmit}>Qo'llash</div>
            </div>
          </div>
        </FilterWrapper>
      </div>
      <div className="filter-state col-12">
        {
          !!Object.keys(filterState).length && <div className="filter-state__inner">
            <span>Filtrlangan</span>
            <button className="btn btn-secondary" onClick={onFilterClear}>O'chirish</button>
          </div>
        }
      </div>

      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "15%", display: "flex", justifyContent: "start", alignItems: "center", textAlign: "start"}}
              className="col">Sana
          </th>
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
                    {(currentPage - 1) * 20 + index + 1}. {new Date(obj.date).toLocaleString("en-GB")}
                  </td>
                  <td style={{width: "10%", color: "#43A047", fontWeight: 600}} className="col">
                    {obj.amount}
                  </td>
                  <td style={{width: "10%"}} className="col">0.00</td>
                  <td style={{width: "10%"}} className="col">{obj.giftedPoints}</td>
                  <td style={{width: "15%", fontWeight: 600}} className="col">
                    {obj.client?.fullName}
                  </td>
                  <td style={{width: "15%", fontWeight: 600}} className="col">{obj.cashier?.fullName}</td>
                  <td style={{width: "15%", fontWeight: 600}} className="col">{obj.outlet.title}</td>
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
              }><h3 style={{fontFamily: "Inter"}}>Cheklar mavjud emas!</h3></div>
            : <MinLoader/>
        }

        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
        pageSize={20}
        style={{textAlign:"center"}}
      />
    </ChekTableWrapper>
  );
};

export default ChekTable;
