import React, {useEffect, useState} from 'react';
import {ExpensesTableWrapper, ModalContent, ModalFooter, ModalHeader} from "./ExpensesTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import Message from "../../../../../utils/Message";
import {useForm, Controller} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {Select, Modal} from "antd";
import MinLoader from "../../../../Common/MinLoader";
import {toast} from "react-toastify";


const ExpensesTable = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState([])
  const [loading2, setLoading2] = useState(false);
  const [editingExpence, setEditingExpence] = useState(null)
  const [forRender, setForRender] = useState(null)
  const [expenses, setExpenses] = useState([])
  const [outletId, setoutletId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEdit = (obj) => {
    setEditingExpence(obj)
    setIsModalOpen(true)
  }


  const onSubmit = async (values) => {
    const body = {}
    body.outletId = outletId
    body.title = values.name;
    body.amount = +values.summ;

    setLoading(true)
    if(editingExpence){
      try {
        body.expenseId = editingExpence.id
        const {data} = await OutletProvider.updateExpense(body);
        console.log(data.res)
        toast.success("Muvaffaqiyatli o'zgartirildi!")
        setForRender(Math.random());
        handleCancel()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }else{
      try {
        const {data} = await OutletProvider.addExpence(body);
        console.log(data.res)
        setForRender(Math.random());
        handleCancel()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(editingExpence){
      setValue("outlet", editingExpence.expenseId)
      setValue("name", editingExpence.name)
      setValue("summ", editingExpence.amount)
    }
  },[isModalOpen])

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
        <div className="summ">
          <h3>Umumiy summa:</h3>
          <p>48 411 960.00</p>
        </div>
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
                    <span className="label-text">Savdo nuqtalari</span>
                    <Controller
                      control={control}
                      name="outlet"
                      render={({
                                 field: { onChange, onBlur, value, name, ref },
                                 fieldState: { invalid, isTouched, isDirty, error },
                                 formState,
                               }) => (
                        <Select
                          placeholder="Tanlang"
                          size="large"
                          allowClear
                          style={{
                            width: "100%",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                          onChange={handleOutletId}
                          options={optionExpense}
                          value={outletId}
                        />
                      )}
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
                      type="number"
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
                  <td style={{width: "10%"}} className="col" title={obj.admin.fullName}>{obj.admin.fullName}</td>
                  <td style={{width: "10%"}} className="col">12.12.2022</td>
                  <td style={{width: "20%",color:"red", fontWeight:600}} className="col">
                      {obj.amount}
                  </td>
                  <td style={{width: "10%"}} className="col">
                    <div className="btns">
                      <button onClick={() => handleEdit(obj)}>
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
              }><h3>Xarajatlar mavjud emas!</h3></div>
            : <MinLoader/>
        }


        </tbody>
      </table>
    </ExpensesTableWrapper>
  );
};

export default ExpensesTable;