import React, {useState} from 'react';
import {CashboxWrapper, Tab1Wrapper, Tab2Wrapper, Tab3Wrapper} from "./Cashbox.style";
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
import {Modal, Select, Tabs} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {useForm} from "react-hook-form";

const Tab1 = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  return (
    <Tab1Wrapper>
      <div className="row">
        <div className="col-md-6">
          <label className="label ">
            <span className="label-text">Mijoz kodi</span>
            {errors.name && (
              <span className="err-text">Majburiy maydon</span>
            )}
            <input
              placeholder="Izlash..."
              type="number"
              {...register("name", {required: true})}
            />
          </label>
        </div>
        <div className="col-md-6">
          <label className="label col-md-6 col-12">
            <span className="label-text">Avto raqami</span>
            {errors.carNum && (
              <span className="err-text">Majburiy maydon</span>
            )}
            <input
              type="text"
              {...register("carNum", {required: true})}
            />
          </label>
        </div>
      </div>
      <div className="col-md-12">
        <label className="label ">
          <span className="label-text">Summa</span>
          {errors.summa && (
            <span className="err-text">Majburiy maydon</span>
          )}
          <input
            placeholder="Izlash..."
            type="number"
            {...register("summa", {required: true})}
          />
        </label>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button type="button" className="btn btn-danger w-100">
            Hisobdan o'chirish [summa]
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" className="btn btn-success w-100">
            To'lash
          </button>
        </div>
      </div>
    </Tab1Wrapper>
  )
}
const Tab2 = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  return (
    <Tab2Wrapper>
      <div className="col-md-12">
        <label className="label ">
          <span className="label-text">Mijoz kodi</span>
          {errors.name && (
            <span className="err-text">Majburiy maydon</span>
          )}
          <input
            placeholder="Izlash..."
            type="number"
            {...register("name", {required: true})}
          />
        </label>
      </div>
      <div className="col-md-12">
        <button className="btn btn-danger w-100">Yechib olish</button>
      </div>
    </Tab2Wrapper>
  )
}
const Tab3 = () => {
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  return (
    <Tab3Wrapper>
      <div className="col-md-12">
        <label className="label ">
          <span className="label-text">Mijoz kodi</span>
          {errors.name && (
            <span className="err-text">Majburiy maydon</span>
          )}
          <input
            placeholder="Izlash..."
            type="number"
            {...register("name", {required: true})}
          />
        </label>
      </div>
      <div className="col-md-12">
        <label className="label ">
          <span className="label-text">Qarz</span>
          {errors.qarz && (
            <span className="err-text">Majburiy maydon</span>
          )}
          <input
            placeholder="Izlash..."
            type="number"
            {...register("qarz", {required: true})}
          />
        </label>
        <label className="label ">
          <span className="label-text">Sana</span>
          {errors.date && (
            <span className="err-text">Majburiy maydon</span>
          )}
          <input
            placeholder="Izlash..."
            type="date"
            {...register("date", {required: true})}
          />
        </label>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button type="button" className="btn btn-danger w-100">
            Qarz olish
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" className="btn btn-success w-100">
            Qarz
          </button>
        </div>
      </div>
    </Tab3Wrapper>
  )
}

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

  const onSubmit = () => {
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
          <div className="bottom">
            <div className="box">
              <div className="head">
                <h3>Balans: 0</h3>
                <button onClick={showModal}><EditSvg/></button>
              </div>
              <div className="body">
                <div className="wrapper">
                  <div className="col">
                    <div className="left">
                      <UserSvg/>
                      <h4>Mijoz</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <PhoneSvg/>
                      <h4>Telefon raqami</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <CarNumberSvg/>
                      <h4>Avto raqami</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <CarSvg/>
                      <h4>Avto turi</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <CheckSvg/>
                      <h4>Maksimal summa</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <StatusSvg/>
                      <h4>Status</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <AwardSvg/>
                      <h4>Bonus</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <CashSvg/>
                      <h4>Qarz</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
                      <CalendarSvg/>
                      <h4>Qaytarish kuni</h4>
                    </div>
                    <div className="right"><p>jsjs</p></div>
                  </div>
                  <div className="col">
                    <div className="left">
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
              <tr style={{width: "100%"}}>
                <th style={{width: "30%"}} className="row">Savdo nuqtasi</th>
                <th style={{width: "20%"}} className="col">Summa</th>
                <th style={{width: "10%"}} className="col">Hisobdan o'chirish</th>
                <th style={{width: "10%"}} className="col">Sana</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{width: "30%"}} className="row">1.</td>
                <td style={{width: "30%"}} className="col">11</td>
                <td style={{width: "10%"}} className="col">00</td>
                <td style={{width: "10%"}} className="col">12.12.2022</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <Tabs
            defaultActiveKey="1"
            type="card"
            size="large"
            items={[
              {
                label: `Kassa`,
                key: '1',
                children: <Tab1/>,
              },
              {
                label: `Hisobdan o'chirish`,
                key: '2',
                children: <Tab2/>,
              },
              {
                label: `Qarz`,
                key: '3',
                children: <Tab3/>,
              },
            ]}
          />
        </div>
      </div>
    </CashboxWrapper>
  );
};

export default Cashbox;