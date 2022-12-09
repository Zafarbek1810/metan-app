import React, {useState} from 'react';
import {CashboxWrapper} from "./Cashbox.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import UserSvg from "../../../../Common/Svgs/UserSvg";
import PhoneSvg from "../../../../Common/Svgs/PhoneSvg";
import CarNumberSvg from "../../../../Common/Svgs/CarNumberSvg";
import CarSvg from "../../../../Common/Svgs/CarSvg";
import CheckSvg from "../../../../Common/Svgs/CheckSvg";
import StatusSvg from "../../../../Common/Svgs/StatusSvg";
import AwardSvg from "../../../../Common/Svgs/AwardSvg";
import CashSvg from "../../../../Common/Svgs/CashSvg";
import CalendarSvg from "../../../../Common/Svgs/CalendarSvg";
import GasBallonSvg from "../../../../Common/Svgs/GasBallonSvg";
import {Modal, Select} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useForm} from "react-hook-form";
import MinLoader from "../../../../Common/MinLoader";

const Cashbox = () => {
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

  const onSubmit=()=>{
    console.log("click")
  }

  return (
    <CashboxWrapper>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="top">
            <div className="modal-wrapper">
              <button className="btn btn-primary mb-3" onClick={showModal}>
                + Mijoz
              </button>
              <Modal
                style={{
                  top: 20,
                }}
                title="Qo'shish"
                open={isModalOpen}
                onCancel={handleCancel}
                width={600}
                footer={[null]}
              >
                <ModalContent>
                  <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="label">
                      <span className="label-text">Ismi</span>
                      {errors.name && (
                        <span className="err-text">Majburiy maydon</span>
                      )}
                      <input
                        type="text"
                        {...register("name", {required: true})}
                      />
                    </label>
                    <label className="label">
                      <span className="label-text">Login</span>
                      {errors.login && (
                        <span className="err-text">Majburiy maydon</span>
                      )}
                      <input
                        type="number"
                        {...register("login", {required: true})}
                      />
                    </label>
                    <label className="label">
                      <span className="label-text">Avto raqami</span>
                      {errors.avtoNum && (
                        <span className="err-text">Majburiy maydon</span>
                      )}
                      <input
                        placeholder="01X000XX"
                        type="number"
                        {...register("avtoNum", {required: true})}
                      />
                    </label>
                    <label className="label">
                      <span className="label-text">Avto turi</span>
                      <Select
                        placeholder="Tanlang"
                        size="large"
                        allowClear
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                        // onChange={handleOutletId}
                        // options={optionExpense}
                        // value={outletId}
                      />
                    </label>
                    <label className="label">
                      <span className="label-text">Karta raqami</span>
                      {errors.cardNum && (
                        <span className="err-text">Majburiy maydon</span>
                      )}
                      <input
                        type="number"
                        {...register("cardNum", {required: true})}
                      />
                    </label>
                    <label className="label">
                      <span className="label-text">Maxfiy so'z</span>
                      {errors.password && (
                        <span className="err-text">Majburiy maydon</span>
                      )}
                      <input
                        type="text"
                        {...register("password", {required: true})}
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
          <div className="bottom">
            <div className="box">
              <div className="head">
                <h3>Balans: 0</h3>
                <button onClick={showModal}><EditSvg/></button>
              </div>
              <div className="body">
                <div className="wrapper">
                  <div className="col">
                    <div className="left" >
                      <UserSvg/>
                      <h4>Mijoz</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <PhoneSvg/>
                      <h4>Telefon raqami</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <CarNumberSvg/>
                      <h4>Avto raqami</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <CarSvg/>
                      <h4>Avto turi</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <CheckSvg/>
                      <h4>Maksimal summa</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <StatusSvg/>
                      <h4>Status</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <AwardSvg/>
                      <h4>Bonus</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <CashSvg/>
                      <h4>Qarz</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <CalendarSvg/>
                      <h4>Qaytarish kuni</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left" >
                      <GasBallonSvg/>
                      <h4>Gaz ballon</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                </div>
              </div>
            </div>
            <table className="table">
              <thead>
              <tr style={{width:"100%"}}>
                <th style={{width: "30%"}} className="row">Savdo nuqtasi</th>
                <th style={{width: "20%"}} className="col">Summa</th>
                <th style={{width: "10%"}} className="col">Hisobdan o'chirish</th>
                <th style={{width: "10%"}} className="col">Sana</th>
              </tr>
              </thead>
              <tbody>
                      <tr >
                        <td style={{width: "30%"}} className="row">1.</td>
                        <td style={{width: "30%"}} className="col">11</td>
                        <td style={{width: "10%"}} className="col" >00</td>
                        <td style={{width: "10%"}} className="col">12.12.2022</td>
                      </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 col-12">

        </div>
      </div>
    </CashboxWrapper>
  );
};

export default Cashbox;