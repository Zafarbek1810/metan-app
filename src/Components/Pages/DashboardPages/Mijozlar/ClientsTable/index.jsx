import React, {useEffect, useState} from 'react';
import {ClientsTableWrapper, ModalContent} from "./ClientsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Input, Modal, Select} from "antd";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import Pagination from "rc-pagination";
import MinLoader from "../../../../Common/MinLoader";
import MyLink from "../../../../Common/MyLink";
import Link from "next/link";
import {useContextSelector} from "use-context-selector";
import GlobalContext from "../../../../../Context/GlobalContext/Context";
import {useRouter} from "next/router";
import {Controller, useForm} from "react-hook-form";
import ButtonLoader from "../../../../Common/ButtonLoader";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {toast} from "react-toastify";


const ClientsTable = () => {
  const router = useRouter();
  const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
    defaultValues: {}
  });
  const client_about = useContextSelector(GlobalContext, (state)=>state.client_about)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [user, setUser] = useState([])
  const [loading2, setLoading2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(null)
  const [forRender, setForRender] = useState(null)

  const [totalElements, setTotalElements]=useState(20)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };

  const handleClickAbout = (clientId) => {
    client_about(clientId)
    router.push("/dashboard/aboutClient/");
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setValue("message", "")
  };

  const handleSend = (obj) => {
    setSending(obj)
    setIsModalOpen(true)
  }


  useEffect(()=>{
    setLoading2(true)
    UserProvider.getClients(currentPage-1, 20)
      .then(({data})=>{
        console.log("clients",data)
        setUser(data.data)
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
    body.message = values.message;

    setLoading(true)
    if (sending) {
      try {
        body.clientId = sending.id
        const {data} = await UserProvider.sendNotification(body);
        console.log(data.res)
        toast.success("Muvaffaqiyatli yuborildi!")
        setForRender(Math.random());
        handleCancel()
      } catch (err) {
        console.log(err)
        Message.serverError();
      }
    }
    // else {
    //   try {
    //     const {data} = await UserProvider.sendNotification(body);
    //     console.log(data.res)
    //     toast.success("Muvaffaqiyatli yaratildi!")
    //     setForRender(Math.random());
    //     handleCancel()
    //   } catch (err) {
    //     console.log(err)
    //     Message.serverError();
    //   }
    // }
    setLoading(false)
  }

  return (
    <ClientsTableWrapper>
      <div className="top">
        <h3 className="title">Mijozlar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary"onClick={showModal} style={{fontFamily:"Inter"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Barcha mijozlarga push-xabarnoma yuborish
          </button>
          {/*====MODAL====*/}
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
                  <span className="label-text">Xabar nomi</span>
                  {errors.message && (
                      <span className="err-text">Majburiy maydon</span>
                  )}
                  <input
                      type="text"
                      {...register("message", {required: true})}
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

      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "15%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">Mijoz</th>
          <th style={{width: "15%"}} className="col">Telefon</th>
          <th style={{width: "8%"}} className="col">Avto raqami</th>
          <th style={{width: "8%"}} className="col">Chek summasi</th>
          <th style={{width: "8%"}} className="col">Balans</th>
          <th style={{width: "8%"}} className="col">Qarz</th>
          <th style={{width: "15%"}} className="col">Oxirgi faoliyat</th>
          <th style={{width: "8%"}} className="col">Umumiy ballar</th>
          <th style={{width: "8%"}} className="col">Tashriflar soni</th>
          <th style={{width: "8%"}} className="col">Amallar</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            user.length ?
              user.map((obj, index)=>(
                <tr key={obj.id}>
                  <td style={{width: "15%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}}
                      className="col">
                    <button onClick={()=>handleClickAbout(obj.id)} className="link" style={{
                      fontWeight: 600,
                      textDecoration: "none",
                      color: "#43A047"
                    }}>{(currentPage - 1) * 20 + index + 1}.{obj.fullName}
                    </button>
                    {/*<MyLink className="link" to="/dashboard/aboutClient"></MyLink>*/}
                  </td>
                  <td style={{width: "15%"}} className="col">{obj.phoneNumber}</td>
                  <td style={{width: "8%"}} className="col">{obj.plateNumber}</td>
                  <td style={{width: "8%"}} className="col">{obj.totalSpendings}</td>
                  <td style={{width: "8%"}} className="col">{obj.balance}</td>
                  <td style={{width: "8%"}} className="col">{obj.totalDebt}</td>
                  <td style={{width: "15%"}} className="col">{new Date(obj.lastVisit).toLocaleString("en-GB")}</td>
                  <td style={{width: "8%"}} className="col">{obj.totalPoints}</td>
                  <td style={{width: "8%"}} className="col">{obj.numberOfVisits}</td>
                  <td style={{width: "8%"}} className="col">
                    <div className="btns">
                      <button  onClick={() => handleSend(obj)}>
                        <img src="/img/message.gif" alt=""/>
                      </button>
                    </div>
                  </td>
                </tr>
              )): <div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3 style={{fontFamily:"Inter"}}>Mijozlar mavjud emas!</h3></div>
            : <MinLoader/>
        }

        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
        pageSize={20}
      />
    </ClientsTableWrapper>
  );
};

export default ClientsTable;