import React, {useEffect, useState} from 'react';
import {GasColumnsWrapper} from "./GasColumns.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Modal, Select} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useForm} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import GasBallonsProvider from "../../../../../Data/Providers/GasBallonsProvider";
import MinLoader from "../../../../Common/MinLoader";


const GasColumns = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const [outletId, setoutletId] = useState(null)
  const [outlet, setOutlet] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [forRender, setForRender] = useState(null)
  const [ballons, setBallons] = useState([])

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
    GasBallonsProvider.getGasColums(0, 1000)
      .then(res => {
        setBallons(res.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [forRender])


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
    body.name = values.name;

    setLoading(true)
    try {
      const {data} = await GasBallonsProvider.addGasColumn(body);
      console.log(data)
      setForRender(Math.random());
      handleCancel()
    } catch (err) {
      console.log(err)
      Message.serverError();
    }
    setLoading(false)
  }


  return (
    <GasColumnsWrapper>
      <div className="top">
        <h3 className="title">Kolonkalar</h3>
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
      <table className="table">
        <thead>
        <tr>
          <th style={{width: "30%"}} className="row">Nomi</th>
          <th style={{width: "30%"}} className="col">Savdo nuqtasi</th>
          <th style={{width: "30%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            ballons.length
              ? ballons.map((obj, index) => (
                <tr key={obj.id}>
                  <td style={{width: "30%"}} className="row">{index+1}. {obj.name}</td>
                  <td style={{width: "30%"}} className="col">{obj.outlet.title}</td>
                  <td style={{width: "30%"}} className="col">
                    <div className="btns">
                      <button>
                        <EditSvg/>
                      </button>
                    </div>
                  </td>
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
    </GasColumnsWrapper>
  );
};

export default GasColumns;