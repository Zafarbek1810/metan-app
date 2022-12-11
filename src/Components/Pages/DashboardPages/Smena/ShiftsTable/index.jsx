import React, {useEffect, useState} from 'react';
import {ModalContent, ShiftsTableWrapper} from "./ShiftsTable.style";
import {Button, Modal, Select} from 'antd';
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import {useForm} from "react-hook-form";
import ButtonLoader from "../../../../Common/ButtonLoader";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import MinLoader from "../../../../Common/MinLoader";


const ShiftsTable = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOutletId = (value) => {
    console.log(`selected ${value}`);
  };

  const [outletId, setoutletId] = useState(null)
  const [outlet, setOutlet] = useState([])


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

  const onSubmit = () => {
    console.log("click")
  }
  const handler = (e) => {
    console.log(e.target.value)
  }

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
                  <span className="label-text">Savdo nuqtalasi</span>
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
                    type="date"
                    {...register("date", {required: true})}
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
            <th  className="col">Sana</th>
            <th  className="col">Kolonka</th>
            <th  className="col">Avtopilot</th>
            <th  className="col">Yo'qotish</th>
            <th  className="col">Realizasiya</th>
            <th  className="col">Kolonka Summa</th>
            <th  className="col">Avtopilot Summa</th>
            <th  className="col">Fakt</th>
            <th  className="col">Naqd</th>
            <th  className="col">Terminal</th>
            <th  className="col">Pul o'tkazma</th>
            <th  className="col">Jami</th>
            <th  className="col">Qarz</th>
            <th  className="col">Xarajat</th>
            <th  className="col">Qoldiq</th>
            <th  className="col">Bonus</th>
            <th  className="col">To'langan ballar</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td  className="col">zadssdza</td>
            <td  className="col">zadsdsdza</td>
            <td  className="col">zadsdsza</td>
            <td  className="col">zsdsdaza</td>
            <td  className="col">zasdsza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
            <td  className="col">zaza</td>
          </tr>
          </tbody>
        </table>
      </div>
    </ShiftsTableWrapper>
  );
};

export default ShiftsTable;