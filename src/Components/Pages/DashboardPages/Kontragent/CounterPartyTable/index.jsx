import React, {useState, useEffect} from 'react';
import Modal from "react-modal";
import {useForm} from "react-hook-form";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import {toast} from "react-toastify";
import {Avatar, Button, IconButton} from "@mui/material";
import {ModalContent, ModalHeader} from "./CounterParty.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import EditIcon from "@mui/icons-material/Edit";
import MinLoader from "../../../../Common/MinLoader";
import {CounterPartyWrapper} from "./CounterParty.style";
import CounterPartyProvider from "../../../../../Data/Providers/CounterPartyProvider";


const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        minHeight: 200,
        width: 600,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 0,
        overlay: {
            background: "red",
        },
    },
};

Modal.setAppElement("#__next");
const CounterParty = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue,
        reset,
        control,
    } = useForm({
        defaultValues: {},
    });
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [editingKontragent, setEditingKontragent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [counterParties, setCounterParties] = useState([]);
    const [forRender, setForRender] = useState(null);

    useEffect(() => {
        setLoading2(true);
        CounterPartyProvider.getAllCounterParty()
            .then((res) => {
                console.log(res);
                setCounterParties(res.data);
            })
            .catch((err) => {
                console.log(err);
                Message.serverError();
            })
            .finally(() => {
                setLoading2(false);
            });
    }, [forRender]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setEditingKontragent(null);
        setValue("name", "");
        setValue("login", "");
        setValue("pass", "");
    }

    const onSubmit = async (values) => {
        const body = {};
        body.fullName = values.name;
        body.username = values.login;
        body.password = values.pass;

        setLoading(true);
        if (editingKontragent) {
            try {
                body.id = editingKontragent.id;

                const { data } = await CounterPartyProvider.updateKontragent(body);
                setForRender(Math.random());
                toast.success("Muvaffaqiyatli o'zgartirildi");
                closeModal();
            } catch (err) {
                console.log(err);
                Message.serverError();
            }
        } else {
            try {
                const {data} = await CounterPartyProvider.createCounterParty(body);
                setForRender(Math.random());
                toast.success("Muvaffaqiyatli qo'shildi");
                closeModal();
            } catch (err) {
                console.log(err);
                Message.serverError();
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        if (editingKontragent) {
            setValue("name", editingKontragent.fullName);
            setValue("login", editingKontragent.username);
            setValue("pass", "");
        }
    }, [modalIsOpen]);

    const handleEdit = (obj) => {
        setEditingKontragent(obj);
        setIsOpen(true);
    };


    return (
        <CounterPartyWrapper>
            <div className="top">
                <h3 className="title">Qarama-qarshi tomonlar</h3>
                <div className="modal-wrapper">
                    <Button
                        variant="contained"
                        onClick={openModal}
                        style={{
                            fontFamily: "Inter",
                            color: "#fff",
                            background: "#787EFF",
                        }}
                    >
                        + Qo'shish
                    </Button>
                    {/*====MODAL====*/}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <ModalHeader className="modal-header">
                            <h2 className="title">Qo'shish</h2>
                            <button className="closeSvg" onClick={closeModal}>
                                <CloseSvg/>
                            </button>
                        </ModalHeader>
                        <ModalContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="label">
                                    <span className="label-text">To'liq ism</span>
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
                                    <span className="label-text">Login</span>
                                    {errors.login && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        {...register("login", {required: true})}
                                    />
                                </label>
                                <label className="label">
                                    <span className="label-text">Maxfiy so'z</span>
                                    {errors.pass && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        {...register("pass", {required: true})}
                                    />
                                </label>
                                <div className="btns">
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning"
                                        onClick={closeModal}
                                    >
                                        Bekor qilish
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        Saqlash {loading && <ButtonLoader/>}
                                    </button>
                                </div>
                            </form>
                        </ModalContent>
                    </Modal>
                </div>
            </div>
            <table className="table table-borderless table-hover">
                <thead>
                <tr>
                    <th style={{width: "40%"}} className="col">
                        To'liq ismi
                    </th>
                    <th style={{width: "30%"}} className="col">
                        Login
                    </th>
                    <th style={{width: "30%"}} className="col">
                        Amallar
                    </th>
                </tr>
                </thead>
                <tbody>
                {!loading2 ? (
                    counterParties.length ? (
                        counterParties.map((obj, index) => (
                            <tr key={obj.id}>
                                <td style={{width: "40%"}} className="col">
                                    {obj.id}. {obj.fullName}{" "}
                                </td>
                                <td style={{width: "30%"}} className="col">
                                    {obj.username}
                                </td>
                                <td style={{width: "30%"}} className="col">
                                    <div className="btns">
                                        <IconButton
                                            style={{background: "rgb(253, 181, 40, 0.12)"}}
                                            onClick={() => handleEdit(obj)}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <div
                            style={{
                                textAlign: "center",
                                padding: 30,
                            }}
                        >
                            <h3 style={{color: "rgba(0, 0, 0, 0.7)"}}>
                                Kassirlar mavjud emas!
                            </h3>
                        </div>
                    )
                ) : (
                    <MinLoader/>
                )}
                </tbody>
            </table>
        </CounterPartyWrapper>
    );
};

export default CounterParty;