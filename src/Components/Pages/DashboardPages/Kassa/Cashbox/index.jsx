import React, {useEffect, useRef, useState} from 'react';
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
import {message, Modal, Select, Spin, Tabs} from "antd";
import {ModalContent} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {Controller, useForm} from "react-hook-form";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../../../Context/UserContext";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import PaymentProvider from "../../../../../Data/Providers/PaymentProvider";
import {toast} from "react-toastify";
import CashbackProvider from "../../../../../Data/Providers/CashbackProvider";
import GasBallonsProvider from "../../../../../Data/Providers/GasBallonsProvider";
import Message from "../../../../../utils/Message";
import EditIcon from "@mui/icons-material/Edit";
import {IconButton} from "@mui/material";

const Tab1 = ({outletId, setMijozObj, setSpinning}) => {
    const [data, setData] = useState({});
    const [miniLoading, setMiniLoading] = useState(false)
    const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
        defaultValues: {}
    });

    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [isPayPoints, setIsPayPoints] = useState(false)

    const handleFetchMijozByCode = (e) => {
        if (e.code === "Enter" && e.target.value.length > 0) {
            setSpinning(true)
            PaymentProvider.getQrInfo(e.target.value)
                .then(({data}) => {
                    console.log(data)
                    setMijozObj(data);
                    setData(data);
                    setValue("carNum", data.plateNumber);
                }, err => {
                    setMijozObj({})
                    toast.error(err?.response?.data?.message);
                }).finally(() => {
                setSpinning(false)
            })
        }
    }

    const handleFetchMijozByAuto = (e) => {
        if (e.code === "Enter" && e.target.value.length > 0) {
            setSpinning(true)
            PaymentProvider.getQrInfo(0, e.target.value)
                .then(({data}) => {
                    console.log(data)
                    setMijozObj(data);
                    setData(data);
                }, err => {
                    toast.error(err?.response?.data?.message);
                }).finally(() => {
                setSpinning(false)
            })
        }
    }

    const onSubmit = (values) => {
        const body = {
            amount: +values.summa,
            clientId: data.id,
            outletId: +outletId
        }

        setTimeout(() => {
            console.log(isPayPoints);
            if (isPayPoints) {
                setLoading(true)
                PaymentProvider.payByPoints(body)
                    .then(({data}) => {
                        console.log(data);
                        toast.success("Muvaffaqiyatli yaratildi!")
                        setValue("summa", "")
                    }).catch(err => {
                    toast.error(err?.response?.data?.message)
                    console.log(err)
                }).finally(() => {
                    setIsPayPoints(false)
                    setLoading(false)
                })
            } else {
                setLoading2(true)
                PaymentProvider.pay(body)
                    .then(({data}) => {
                        console.log(data);
                        toast.success("Muvaffaqiyatli yaratildi!")
                        setValue("summa", "")
                    }, err => {
                        toast.error(err?.response?.data?.message)
                        console.log(err);
                    }).finally(() => {
                    setLoading2(false)
                })
            }
        }, 100)
    }

    return (
        <Tab1Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Spin spinning={miniLoading}>
                <div className="row">
                    <div className="col-md-6">
                        <label className="label ">
                            <span className="label-text">Mijoz kodi</span>
                            {errors.name && (
                                <span className="err-text">Majburiy maydon</span>
                            )}
                            <input
                                autoComplete="off"
                                placeholder="Izlash..."
                                type="number"
                                {...register("name", {required: false})}
                                onKeyDown={handleFetchMijozByCode}
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
                                autoComplete="off"
                                type="text"
                                {...register("carNum", {required: false})}
                                onKeyDown={handleFetchMijozByAuto}
                            />
                        </label>
                    </div>
                </div>
                <div className="col-md-12">
                    <label className="label ">
                        <span className="label-text">Summa</span>
                        {errors.summa && (
                            <span className="err-text"></span>
                        )}
                        <input
                            autoComplete="off"
                            placeholder=""
                            type="number"
                            {...register("summa", {required: true})}
                        />
                    </label>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button type="submit" onClick={() => setIsPayPoints(true)} disabled={loading}
                                className="btn btn-danger w-100 d-flex justify-content-center">
                            Hisobdan o'chirish {loading && <ButtonLoader/>}
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" onClick={() => setIsPayPoints(false)} disabled={loading2}
                                className="btn btn-success w-100 d-flex justify-content-center">
                            To'lash{loading2 && <ButtonLoader/>}
                        </button>
                    </div>
                </div>
            </Spin>
        </Tab1Wrapper>
    )
}
const Tab3 = ({outletId, setMijozObj}) => {
    const [data, setData] = useState({});
    const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
        defaultValues: {}
    });
    const [subtractDebt, setSubtractDebt] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const handleFetchMijozByCode = (e) => {
        if (e.code === "Enter" && e.target.value.length > 0) {
            PaymentProvider.getQrInfo(e.target.value)
                .then(({data}) => {
                    console.log(data)
                    setMijozObj(data);
                    setData(data);
                }, err => {
                    toast.error(err?.response?.data?.message);
                    setMijozObj({})
                })
        }
    }

    const onSubmit = (values) => {
        console.log(777);
        const body = {
            amount: +values.qarz,
            clientId: data.id,
            outletId: +outletId,
            returnDate: values.sana
        }

        setTimeout(() => {
            if (subtractDebt) {
                console.log("11")
                setLoading(true)
                PaymentProvider.subtractDebt(body)
                    .then(({data}) => {
                        console.log(data);
                        toast.success("Muvaffaqiyatli yaratildi!")
                        setValue("summa", "")
                    }).catch(err => {
                    toast.error(err?.response?.data?.message)
                    console.log(err)
                }).finally(() => {
                    setSubtractDebt(false)
                    setLoading(false)
                })
            } else {
                setLoading2(true)
                PaymentProvider.addDebt(body)
                    .then(({data}) => {
                        console.log(data);
                        toast.success("Muvaffaqiyatli yaratildi!")
                        setValue("qarz", "")
                    }, err => {
                        console.log(err);
                    }).finally(() => {
                    setLoading2(false)
                })
            }
        }, 100)
    }

    return (
        <Tab3Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
                <label className="label ">
                    <span className="label-text">Mijoz kodi</span>
                    {errors.name && (
                        <span className="err-text"></span>
                    )}
                    <input
                        autoComplete="off"
                        placeholder="Izlash..."
                        type="number"
                        {...register("name", {required: true})}
                        onKeyDown={handleFetchMijozByCode}
                    />
                </label>
            </div>
            <div className="col-md-12">
                <label className="label ">
                    <span className="label-text">Qarz</span>
                    {errors.qarz && (
                        <span className="err-text"></span>
                    )}
                    <input
                        autoComplete="off"
                        placeholder=""
                        type="number"
                        {...register("qarz", {required: true})}
                    />
                </label>
                <label className="label ">
                    <span className="label-text">Sana</span>
                    {errors.sana && (
                        <span className="err-text"></span>
                    )}
                    <input
                        autoComplete="off"
                        type="date"
                        {...register("sana", {required: true})}
                    />
                </label>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button type="submit" onClick={() => setSubtractDebt(true)} className="btn btn-success w-100"
                            disabled={loading}>
                        Qarzni olish
                    </button>
                </div>
                <div className="col-md-6">
                    <button type="submit" onClick={() => setSubtractDebt(false)} className="btn btn-danger w-100"
                            disabled={loading2}>
                        Qarzga berish
                    </button>
                </div>
            </div>
        </Tab3Wrapper>
    )
}

const Cashbox = () => {
    const [outletId, setOutletId] = useState(null);
    const [mijozObj, setMijozObj] = useState({});
    const {register, formState: {errors}, handleSubmit, setValue, reset, control} = useForm({
        defaultValues: {}
    });
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isspinning, setSpinning] = useState(false)
    const [carType, setCarType] = useState([])
    const [carid, setCarid] = useState(null)

    const [editingClient, setEditingClient] = useState(null)

    useEffect(() => {
        UserProvider.getMe()
            .then(({data}) => {
                setOutletId(data.outletAsCashier?.id);
            }, err => {
                console.log(err);
            })
    })

    useEffect(() => {
        CashbackProvider.getCarTypes()
            .then(res => {
                console.log("car", res)
                setCarType(res.data.map(type => ({label: type, value: type})))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleEdit = (obj) => {
        setEditingClient(obj);
        console.log("ss", editingClient);
        setIsModalOpen(true);
    };

    const onSubmit = async (values) => {
        const body = {}
        body.fullName = values.name
        body.password = values.password
        body.phoneNumber = values.phoneNumber
        body.plateNumber = values.avtoNum
        body.carType = values.carType


        if (editingClient) {
            try {
                body.clientId = editingClient.id
                const {data} = await UserProvider.editClient(body);
                toast.success("Muvaffaqiyatli o'zgartirildi!")
                handleCancel()
            } catch (err) {
                console.log(err)
                Message.serverError();
            }
        } else {
            try {
                const {data} = await UserProvider.addClient(body);
                console.log(data)
                toast.success("Muvaffaqiyatli yaratildi!")
                handleCancel()
            } catch (err) {
                console.log(err)
                Message.serverError();
            }
        }
    }

    useEffect(() => {
        if (editingClient) {
            setValue("name", editingClient.fullName)
            setValue("phoneNumber", editingClient.phoneNumber)
            setValue("avtoNum", editingClient.plateNumber)
            setValue("carType", editingClient.cartype?.title)
        }
    }, [isModalOpen])

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
                                                autoComplete="off"
                                                type="text"
                                                {...register("name", {required: true})}
                                            />
                                        </label>
                                        <label className="label">
                                            <span className="label-text">Telefon</span>
                                            {errors.phoneNumber && (
                                                <span className="err-text">Majburiy maydon</span>
                                            )}
                                            <input
                                                autoComplete="off"
                                                type="number"
                                                {...register("phoneNumber", {required: true})}
                                            />
                                        </label>
                                        <label className="label">
                                            <span className="label-text">Avto raqami</span>
                                            {errors.avtoNum && (
                                                <span className="err-text">Majburiy maydon</span>
                                            )}
                                            <input
                                                autoComplete="off"
                                                placeholder="01X000XX"
                                                type="text"
                                                {...register("avtoNum", {required: true})}
                                            />
                                        </label>
                                        <label className="label">
                                            <span className="label-text">Avto turi</span>
                                            <Controller
                                                control={control}
                                                name="carType"
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
                                                        onChange={onChange}
                                                        options={carType}
                                                        value={value}
                                                    />
                                                )}
                                            />
                                        </label>
                                        <label className="label">
                                            <span className="label-text">Maxfiy so'z</span>
                                            {errors.password && (
                                                <span className="err-text">Majburiy maydon</span>
                                            )}
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                {...register("password", {required: false})}
                                            />
                                        </label>
                                        <div className="btns">
                                            <button type="button" className="btn btn-outline-warning"
                                                    onClick={handleCancel}>Bekor qilish
                                            </button>
                                            <button type="submit" className="btn btn-primary"
                                                    disabled={loadingBtn}>Saqlash {loadingBtn &&
                                                <ButtonLoader/>}</button>
                                        </div>
                                    </form>
                                </ModalContent>
                            </Modal>
                        </div>
                    </div>
                    <Spin spinning={isspinning}>
                        <div className="bottom">
                            <div className="box">
                                <div className="head">
                                    <h3 style={{color: "rgba(0, 0, 0, 0.7)"}}>Balans: {mijozObj.balance}</h3>
                                    <IconButton style={{background: "rgb(253, 181, 40, 0.12)"}}
                                                onClick={() => handleEdit(mijozObj)}>
                                        <EditIcon/>
                                    </IconButton>
                                </div>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="col">
                                            <div className="left">
                                                <UserSvg/>
                                                <h4>Mijoz</h4>
                                            </div>
                                            <div className="right"><p>{mijozObj.fullName}</p></div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <PhoneSvg/>
                                                <h4>Telefon raqami</h4>
                                            </div>
                                            <div className="right"><p>{mijozObj.phoneNumber}</p></div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <CarNumberSvg/>
                                                <h4>Avto raqami</h4>
                                            </div>
                                            <div className="right"><p>{mijozObj.plateNumber}</p></div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <CarSvg/>
                                                <h4>Avto turi</h4>
                                            </div>
                                            <div className="right"><p>{mijozObj.cartype?.title}</p></div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <CheckSvg/>
                                                <h4>Maksimal summa</h4>
                                            </div>
                                            <div className="right"><p>-</p></div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <StatusSvg/>
                                                <h4>Status</h4>
                                            </div>
                                            <div className="right"><p>{mijozObj.status}</p></div>
                                        </div>
                                        {/*<div className="col">*/}
                                        {/*  <div className="left">*/}
                                        {/*    <AwardSvg/>*/}
                                        {/*    <h4>Bonus</h4>*/}
                                        {/*  </div>*/}
                                        {/*  <div className="right"><p>{mijozObj.fullName}</p></div>*/}
                                        {/*</div>*/}
                                        <div className="col">
                                            <div className="left">
                                                <CashSvg/>
                                                <h4>Qarz</h4>
                                            </div>
                                            <div className="right"><p>{mijozObj.totalDebt}</p></div>
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
                                {
                                    mijozObj?.cheques?.map((check, index) => (
                                        <tr key={check.id}>
                                            {/* TODO */}
                                            <td style={{width: "30%"}} className="row">{index + 1}.</td>
                                            <td style={{width: "30%"}} className="col">{check.amount}</td>
                                            <td style={{width: "10%"}} className="col">00</td>
                                            <td style={{width: "10%"}} className="col">12.12.2022</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </Spin>
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
                                children: <Tab1 setSpinning={setSpinning} setMijozObj={setMijozObj}
                                                outletId={outletId}/>,
                            },
                            {
                                label: `Qarz`,
                                key: '3',
                                children: <Tab3 setMijozObj={setMijozObj} outletId={outletId}/>,
                            },
                        ]}
                    />
                </div>
            </div>
        </CashboxWrapper>
    );
};

export default Cashbox;
