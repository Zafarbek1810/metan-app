import React, {useEffect, useRef, useState} from 'react';
import {ExpensesTableWrapper, FilterWrapper, ModalContent} from "./ExpensesTable.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import Message from "../../../../../utils/Message";
import {Controller, useForm} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {Modal, Select} from "antd";
import MinLoader from "../../../../Common/MinLoader";
import {toast} from "react-toastify";
import Pagination from "rc-pagination";


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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({});
  const filSelectRef = useRef();
  const filDateRef = useRef();

  const [totalElements, setTotalElements]=useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };

  const [summ, setSumm] = useState([])

  useEffect(() => {
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        setOutlet(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })
    OutletProvider.getExpensesSum()
      .then(res => {
        console.log("sum",res)
        setSumm(res.data)
      })
  }, [forRender])

  useEffect(() => {
    setLoading2(true);
    OutletProvider.getExpenses(currentPage-1, 10, filterState)
      .then(({data}) => {
        console.log("setExpenses", data);
        setExpenses(data.data);
        setTotalElements(data.count)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [filterState, forRender])

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
    if (editingExpence) {
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
    } else {
      try {
        const {data} = await OutletProvider.addExpence(body);
        console.log(data.res)
        toast.success("Muvaffaqiyatli yaratildi!")
        setForRender(Math.random());
        handleCancel()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    if (editingExpence) {
      setValue("outlet", editingExpence.expenseId)
      setValue("name", editingExpence.name)
      setValue("summ", editingExpence.amount)
    }
  }, [isModalOpen])

  const optionExpense = outlet.map((i) => (
    {
      label: i.title,
      value: i.id
    }
  ))

  const handleOutletId = (value) => {
    setoutletId(value)
    console.log("setoutletId", value)
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setValue("outlet", '')
    setValue("name", "")
    setValue("summ", "")
  };

  const onOnFilter = () => {
    const date = filDateRef.current?.value?.split("-").reverse().join("-");
    const outletId = filSelectRef.current?.value
    setFilterState({date, outletId});
    setIsFilterOpen(false);
  }

  const onOffFilter = () => {
    if(Object.keys(filterState).length) {
      setFilterState({});
    }
    filDateRef.current.value = "";
    filSelectRef.current.value = "";
    setIsFilterOpen(false);
  }

  return (
    <ExpensesTableWrapper>
      <div className="top">
        <h3 className="title">Xarajatlar</h3>
          <div className="summ" >
            <h3>Umumiy summa:</h3>
            <h3 style={{color:"red"}}>{summ?.expensesAmountSum}</h3>
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
                                 field: {onChange, onBlur, value, name, ref},
                                 fieldState: {invalid, isTouched, isDirty, error},
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
                    <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Bekor qilish
                    </button>
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
        <FilterWrapper>
          <button className="btn btn-primary" onClick={() => setIsFilterOpen(p => !p)}>Filtr</button>
          <div className="filter-content" style={{visibility: isFilterOpen ? "visible" : "hidden"}}>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select ref={filSelectRef} className="form-control">
                  <option value={"null"} disabled>Tanlang</option>
                  {
                    optionExpense.map(i => (
                      <option value={i.value} key={i.value}>{i.label}</option>
                    ))
                  }
                </select>
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">Davr</label>
                <input ref={filDateRef} name="startDate" type="date" className="form-control"/>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-danger" onClick={onOffFilter}>Bekor qilish</button>
                <button className="btn btn-primary" onClick={onOnFilter}>Qo'llash</button>
              </div>
            </div>
          </div>
        </FilterWrapper>
        {
          !!Object.keys(filterState).length && (
            <div className="filter-state col-12">
              <div className="filter-state__inner">
                <span>Filtrlangan</span>
                <button className="btn btn-secondary" onClick={onOffFilter}>O'chirish</button>
              </div>
            </div>
          )
        }
      </div>

      <table className="table table-striped table-hover">
        <thead>
        <tr style={{width: "100%"}}>
          <th style={{width: "30%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">Nomi</th>
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
                  <td style={{width: "30%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">{index + 1}. {obj.name}</td>
                  <td style={{width: "30%"}} className="col">{obj.outlet.title}</td>
                  <td style={{width: "10%"}} className="col" title={obj.admin.fullName}>{obj.admin.fullName}</td>
                  <td style={{width: "10%"}} className="col">{new Date(obj.date).toLocaleString("en-GB")}</td>
                  <td style={{width: "20%", color: "red", fontWeight: 600}} className="col">
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
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
      />

    </ExpensesTableWrapper>
  );
};

export default ExpensesTable;
