import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {Button} from "@mui/material";
import {Modal, Select} from "antd";
import {ModalContent} from "../../Smena/ShiftsTable/ShiftsTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import {ListTableWrapper} from "./ListTable.style";
import {useForm} from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import {toast} from "react-toastify";
import TodoProvider from "../../../../../Data/Providers/TodoProvider";

const ListTable = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset,
        control,
    } = useForm({
        defaultValues: {},
    });

    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 1);
    const [date, setDate] = useState(defaultDate);
    const onSetDate = (event) => {
        setDate(new Date(event.target.value));
        console.log(date.toLocaleDateString("en-CA"))
    };
    const [forRender, setForRender] = useState(null);

    const [checked, setChecked] = React.useState([0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [todos, setTodos] = useState([])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(()=>{
        TodoProvider.getTodo(0,20)
            .then(({ data }) => {
                console.log(data);
                setTodos(data?.data)
                console.log(todos)
            })
            .catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.message);
            })
    },[forRender])

    const onSubmit = async (values) => {
        const body = {};
        body.title = values.namePlan;
        body.dueDate = date.toLocaleDateString("en-CA");

        try {
            const { data } = await TodoProvider.addToDo(body);
            console.log(data?.res);
            setValue("title", "");
            setValue("date", "");
            setForRender(Math.random());
            toast.success("Muvaffaqiyatli!");
            handleCancel();
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message);
        }
    };




    return (
        <ListTableWrapper>
            <div className="modalWrapper">
                <Button
                    variant="contained"
                    onClick={showModal}
                    style={{
                        fontFamily: "Inter",
                        color: "#fff",
                        background: "#787EFF",
                    }}
                >
                    + Qo'shish
                </Button>
                <Modal
                    style={{ top: 10 }}
                    title="Qo'shish"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    width={550}
                    footer={[null]}
                >
                    <ModalContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text">Reja nomi</span>
                                {errors.namePlan && (
                                    <span className="err-text">Majburiy maydon</span>
                                )}
                                <input
                                    autoComplete="off"
                                    type="text"
                                    {...register("namePlan", { required: true })}
                                />
                            </label>
                            <label className="label">
                                <span className="label-text">Sana</span>
                                {errors.sana && (
                                    <span className="err-text">Majburiy maydon</span>
                                )}
                                <input
                                    autoComplete="off"
                                    type="date"
                                    // disabled
                                    value={date.toLocaleDateString("en-CA")}
                                    onChange={onSetDate}
                                />
                            </label>

                            <div className="btns">
                                <button
                                    type="button"
                                    className="btn btn-outline-warning"
                                    onClick={handleCancel}
                                >
                                    Bekor qilish
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    // disabled={loading}
                                >
                                    Saqlash
                                </button>
                            </div>
                        </form>
                    </ModalContent>
                </Modal>
            </div>
            {todos.map((obj,index)=>(
                <div key={obj.id} style={{background:"#e9e9e9"}}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <PlaylistAddCheckIcon/>
                            </IconButton>
                        }
                        // disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle({index})} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(obj.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': "{obj.id}"}}
                                />
                            </ListItemIcon>
                            <ListItemText id={obj.id} primary={obj.title}/>
                            <div className="sana">{new Date(obj.dueDate).toLocaleString("en-GB")}</div>
                        </ListItemButton>
                    </ListItem>
                </div>
            ))}

        </ListTableWrapper>
    );
};

export default ListTable;