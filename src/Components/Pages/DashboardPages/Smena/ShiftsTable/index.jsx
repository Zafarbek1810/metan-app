import React, {useEffect, useState} from 'react';
import {ModalContent, ShiftsTableWrapper} from "./ShiftsTable.style";
import {Button, Modal, Select} from 'antd';
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import {useForm} from "react-hook-form";
import ButtonLoader from "../../../../Common/ButtonLoader";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import MinLoader from "../../../../Common/MinLoader";
import {toast} from "react-toastify";


const ShiftsTable = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });

  //today date
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate()+1)
  const [date, setDate] = useState(defaultDate)
  const onSetDate = (event) => {
    setDate(new Date(event.target.value))
  }

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forRender, setForRender] = useState(null)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [outletId, setoutletId] = useState(null)
  const [outlet, setOutlet] = useState([])
  const [shifts, setShifts] = useState([])

  useEffect(() => {
    OutletProvider.getAllOutlets(0, 1000)
      .then(res => {
        console.log("outlet", res)
        setOutlet(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      })
  }, [])

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

  const onSubmit = async (values) => {
    const body = {}
    body.outletId = outletId
    body.expenses = +values.expence
    body.autopilot = +values.autopilot
    body.byCard = +values.terminal
    body.transfers = +values.money
    body.debt = +values.dept

    setLoading(true)
    try {
      const {data} = await OutletProvider.addShift(body)
      console.log(data)
      setForRender(Math.random());
      setValue("expence", "")
      setValue("autopilot", "")
      setValue("terminal", "")
      setValue("money", "")
      setValue("dept", "")
      toast.success("Muvaffaqoyatli!")
      handleCancel()
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading2(true)
    OutletProvider.getShifts(0, 1000)
      .then(res => {
        console.log(res)
        setShifts(res.data)
      })
      .catch(err => {
        console.log(err)
        toast.error(err?.response?.data?.message)
      }).finally(() => {
      setLoading2(false);
    })
  }, [forRender])


  return (
    <ShiftsTableWrapper>
      <div className="top">
        <h3 className="title">Smena</h3>
        <div className="modalWrapper">
          <button type="button" className="btn btn-primary" onClick={showModal}>
            + Qo'shish
          </button>
          <Modal
            style={{top: 10}}
            title="Qo'shish"
            open={isModalOpen}
            onCancel={handleCancel}
            width={550}
            footer={[null]}
          >
            <ModalContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label mb-1">
                  <span className="label-text">Savdo nuqtalari</span>
                  <Select
                    placeholder="Tanlang"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    onChange={handleOutletId}
                    options={optionExpense}
                    value={outletId}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Sana</span>
                  {errors.date && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="date" disabled value={date.toLocaleDateString('en-CA')} onChange={onSetDate}
                  />
                </label>

                <label className="label">
                  <span className="label-text">Xarajat</span>
                  {errors.expence && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="number"
                    {...register("expence", {required: true})}
                  />
                </label>

                <label className="label">
                  <span className="label-text">Autopilot</span>
                  {errors.autopilot && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="number"
                    {...register("autopilot", {required: true})}
                  />
                </label>

                <label className="label">
                  <span className="label-text">Terminal</span>
                  {errors.terminal && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="number"
                    {...register("terminal", {required: true})}
                  />
                </label>

                <label className="label">
                  <span className="label-text">Pul o'tkazma</span>
                  {errors.money && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="number"
                    {...register("money", {required: true})}
                  />
                </label>

                <label className="label">
                  <span className="label-text">Qarz</span>
                  {errors.dept && (
                    <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                    type="number"
                    {...register("dept", {required: true})}
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

      <div className="table-responsive">
        <table className="table">
          <thead>
          <tr>
            <th className="col">Sana</th>
            <th className="col">Kolonka</th>
            <th className="col">Avtopilot</th>
            <th className="col">Yo'qotish</th>
            <th className="col">Realizasiya</th>
            <th className="col">Kolonka Summa</th>
            <th className="col">Avtopilot Summa</th>
            <th className="col">Fakt</th>
            <th className="col">Naqd</th>
            <th className="col">Terminal</th>
            <th className="col">Pul o'tkazma</th>
            <th className="col">Jami</th>
            <th className="col">Qarz</th>
            <th className="col">Xarajat</th>
            <th className="col">Qoldiq</th>
            <th className="col">Bonus</th>
            <th className="col">To'langan ballar</th>
          </tr>
          </thead>
          <tbody>
          {
            !loading2 ?
              shifts.length
                ? shifts.map((obj, index) => (
                  <tr key={obj.id}>
                    <td className="col">{new Date(obj.date).getDate() + "-" + (new Date(obj.date).getMonth() + 1) + "-" + new Date(obj.date).getFullYear()} </td>
                    <td className="col">{obj.amountOfGasColumn}</td>
                    <td className="col">{obj.autopilot}</td>
                    <td className="col">{obj.loss}</td>
                      <td className="col" style={{color:"#FDD835", fontWeight:600}}>{obj.realization}</td>
                    <td className="col" style={{color:"#F4511E", fontWeight:600}}>{obj.gasColumnSumm}</td>
                    <td className="col" style={{color:"#7CB342", fontWeight:600}}>{obj.autopilotSumm}</td>
                    <td className="col">{obj.fact}</td>
                    <td className="col" style={{color:"#7CB342", fontWeight:600}}>{obj.byCash}</td>
                    <td className="col">{obj.byCard}</td>
                    <td className="col" style={{color:"#F4511E", fontWeight:600}}>{obj.transfers}</td>
                    <td className="col">{obj.total}</td>
                    <td className="col">{obj.debts}</td>
                    <td className="col">{obj.expenses}</td>
                    <td className="col" style={{color:"#FDD835", fontWeight:600}}>{obj.pnl}</td>
                    <td className="col" style={{color:"#F4511E", fontWeight:600}}>{obj.bonus}</td>
                    <td className="col" style={{color:"#7CB342", fontWeight:600}}>{obj.paidPoints}</td>
                  </tr>
                ))
                : <div style={
                  {
                    textAlign: "center",
                    padding: 30,
                  }
                }><h3>Gaz ballon mavjud emas!</h3></div>
              : <MinLoader/>
          }
          </tbody>
        </table>
      </div>
    </ShiftsTableWrapper>
  );
};

export default ShiftsTable;