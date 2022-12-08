import React, {useEffect, useState} from 'react';
import {ExpensesTableWrapper, ModalContent, ModalFooter, ModalHeader} from "./ExpensesTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import Message from "../../../../../utils/Message";
import {useForm} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {Select, Modal} from "antd";
import MinLoader from "../../../../Common/MinLoader";


const ExpensesTable = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });

  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState([])
  const [loading2, setLoading2] = useState(false);
  const [editingExpence, setEditingExpence] = useState(null)
  const [forRender, setForRender] = useState(null)
  const [expenses, setExpenses] = useState([])
  const [outletId, setoutletId] = useState(null)

  useEffect(() => {
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        setOutlet(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })
  }, [])

  useEffect(() => {
    setLoading2(true);
    OutletProvider.getExpenses(0, 1000)
      .then(res => {
        console.log("setExpenses",res.data)
        setExpenses(res.data)
        console.log("expenses",expenses)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [forRender])


  const onSubmit = async (values) => {
    const body = {}
    body.outletId = outletId
    body.title = values.name;
    body.amount = +values.summ;

    setLoading(true)
    try {
      const {data} = await OutletProvider.addExpence(body);
      console.log(data.res)
      setForRender(Math.random());
      handleCancel()
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setLoading(false)
  }

  const optionExpense = outlet.map((i) => (
    {
      label: i.title,
      value: i.id
    }
  ))

  const handleOutletId = (value) => {
    setoutletId(value)
    console.log("setoutletId",value)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };




  return (
    <ExpensesTableWrapper>
      <div className="top">
        <h3 className="title">Xarajatlar</h3>
        <div className="modal-wrapper">
          {/*====MODAL====*/}
          <div className="modal-wrapper">
            <button className="btn btn-primary" onClick={showModal}>
              + Qo'shish
            </button>
            <Modal
              title="Qo'shish"
              open={isModalOpen}
              onCancel={handleCancel}
              width={700}
              footer={[null]}
            >
              <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="label">
                    <span className="label-text">Savdo nuqtalasi</span>
                    <Select
                      placeholder="Tanlang"
                      allowClear
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginBottom: "10px"
                      }}
                      onChange={handleOutletId}
                      options={optionExpense}
                      value={outletId}
                    />
                  </label>
                  <label className="label">
                    <span className="label-text">Nomi</span>
                    {errors.name && (
                      <span className="err-text">Majburiy maydon</span>
                    )}
                    <input
                      type="text"
                      {...register("name", {required: true})}
                    />
                  </label>
                  <label className="label">
                    <span className="label-text">Summa</span>
                    {errors.summ && (
                      <span className="err-text">Majburiy maydon</span>
                    )}
                    <input
                      type="text"
                      {...register("summ", {required: true})}
                    />
                  </label>
                  <div className="btns">
                    <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Bekor qilish</button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>Saqlash {loading &&
                    <ButtonLoader/>}</button>
                  </div>
                </form>
              </ModalContent>
            </Modal>
          </div>
        </div>

      </div>
      <div className="filter">
        <div className="col-3">
          <input type="text" className="form-control" placeholder="Izlash"/>
        </div>
        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle px-4" data-bs-toggle="dropdown"
                  aria-expanded="false" data-bs-auto-close="outside">
            Filtr
          </button>
          <form className="dropdown-menu p-3 col-6">
            <div className="row">
              <div className="select mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select className="form-select">
                  <option disabled selected value>Tanlang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">Sana</label>
                <input type="date" className="form-control"/>
              </div>
            </div>
            <div className="btns">
              <button className="btn btn-secondary">Bekor qilish</button>
              <button className="btn btn-success">Qo'llash</button>
            </div>
          </form>
        </div>
        <div className="summ col-4">
          <h3>Umumiy summa:</h3>
          <p>48 411 960.00</p>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr style={{width:"100%"}}>
          <th style={{width: "30%"}} className="row">Nomi</th>
          <th style={{width: "20%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "10%"}} className="col">Admin</th>
          <th style={{width: "10%"}} className="col">Sana</th>
          <th style={{width: "20%"}} className="col">Summa</th>
          <th style={{width: "10%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            expenses.length
              ? expenses.map((obj, index) => (
                <tr key={obj.id}>
                  <td style={{width: "30%"}} className="row">{index+1}. {obj.name}</td>
                  <td style={{width: "30%"}} className="col">{obj.outlet.title}</td>
                  <td style={{width: "10%"}} className="col" title={obj.admin.fullName}>{obj.admin.username}</td>
                  <td style={{width: "10%"}} className="col">12.12.2022</td>
                  <td style={{width: "20%"}} className="col">{obj.amount}</td>
                  <td style={{width: "10%"}} className="col">
                    <div className="btns">
                      <button>
                        <EditSvg/>
                      </button>
                    </div>
                  </td>
                </tr>
              )) : <div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3>Savdo nuqtasi mavjud emas!</h3></div>
            : <MinLoader/>
        }


        </tbody>
      </table>
    </ExpensesTableWrapper>
  );
};

export default ExpensesTable;