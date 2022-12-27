import React, {useEffect, useState} from 'react';
import {TableWrapper} from "./Table.style";
import {Button, Chip, IconButton} from "@mui/material";
import Modal from "react-modal";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import DeleteIcon from "@mui/icons-material/Delete";
import MinLoader from "../../../../Common/MinLoader";
import {useForm} from "react-hook-form";
import {useContextSelector} from "use-context-selector";
import GlobalContext from "../../../../../Context/GlobalContext/Context";
import {useRouter} from "next/router";
import CashbackProvider from "../../../../../Data/Providers/CashbackProvider";
import Message from "../../../../../utils/Message";
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";


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


const TablePage = ({RefObj, setIsOpen}) => {
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

    const cash_edit = useContextSelector(
        GlobalContext,
        (state) => state.keshbek_edit
    );

    const router = useRouter();
    const [modalIsOpen, setIsModalOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [forRender, setForRender] = useState(null);
    const [project, setProject] = useState([]);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setValue("title", "");
    }

    useEffect(() => {
        setLoading2(true);
        ProjectsProvider.getAllProjects()
            .then((res) => {
                console.log(res.data);
                setProject(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                Message.serverError();
            })
            .finally(() => {
                setLoading2(false);
            });
    }, [forRender]);

    const onSubmit = async (values) => {
        const body = {};
        body.title = values.title;

        setLoading(true);
        try {
            const {data} = await ProjectsProvider.addProject(body);
            setForRender(Math.random());
            closeModal();
        } catch (err) {
            console.log(err);
            Message.serverError();
        }
        setLoading(false);
    };

    const handleDeleteOutlet = (id) => {
        RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`;
        setIsOpen(true);
        new Promise((res, rej) => {
            RefObj.current.resolve = res;
            RefObj.current.reject = rej;
        })
            .then(async () => {
                await ProjectsProvider.deleteProject(id);
                setProject((pre) =>
                    pre.filter((mod) => {
                        return mod.id !== id;
                    })
                );
                setForRender(Math.random());
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <TableWrapper>
            <div className="top">
                <h3 className="title">Proyektlar</h3>
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
                        + Proyekt Qo'shish
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
                                    <span className="label-text">Proyekt nomi</span>
                                    {errors.title && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        {...register("title", {required: true})}
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
                                        Qo'shish {loading && <ButtonLoader/>}
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
                    <th style={{minWidth: "80%"}} className="col">
                        Nomi
                    </th>
                    <th style={{minWidth: "20%"}} className="col">
                        Amallar
                    </th>
                </tr>
                </thead>
                <tbody>
                {!loading2 ? (
                    project.length ? (
                        project.map((obj, index) => (
                            <tr key={obj.id}>
                                <td style={{minWidth: "80%"}} className="col">
                                    {obj.title}
                                </td>
                                <td style={{minWidth: "20%"}} className="col">
                                    <div className="btns">
                                        <IconButton
                                            style={{background: "rgb(255, 77, 73, 0.12)"}}
                                            // onClick={() => handleEditCash(obj.id)}
                                        >
                                            <DeleteIcon onClick={() => handleDeleteOutlet(obj.id)}/>
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
                                Proyektlar mavjud emas
                            </h3>
                        </div>
                    )
                ) : (
                    <MinLoader/>
                )}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default TablePage;