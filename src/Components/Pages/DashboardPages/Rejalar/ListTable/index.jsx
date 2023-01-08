import React, {useEffect, useState} from 'react';
import {Button, Chip, Drawer, IconButton} from "@mui/material";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import EditIcon from "@mui/icons-material/Edit";
import MinLoader from "../../../../Common/MinLoader";
import {TableWrapper} from "../../Projects/Table/Table.style";
import Pagination from "rc-pagination";
import OperationProvider from "../../../../../Data/Providers/OperationProvider";
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";
import Select from "react-select";
import {Controller, useForm} from "react-hook-form";
import ArticleProvider from "../../../../../Data/Providers/ArticleProvider";
import {toast} from "react-toastify";
import {NumericFormat} from "react-number-format";
import {WRAPPER} from "../../Operatsiyalar/components/style";
import CounterPartyProvider from "../../../../../Data/Providers/CounterPartyProvider";
import TodoProvider from "../../../../../Data/Providers/TodoProvider";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import OutletProvider from "../../../../../Data/Providers/OutletProvider";


const ListTable = ({RefObj, setIsOpen1}) => {
    const {register, handleSubmit, control, reset} = useForm();
    const projectForm = useForm();
    const articleForm = useForm();
    const filterForm = useForm();
    const [forRender, setForRender] = useState(null)

    const [page, setPage] = useState(1)

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenArticleDrawer, setIsOpenArticleDrawer] = useState(false);
    const [isOpenProjectDrawer, setIsOpenProjectDrawer] = useState(false);
    const [todos, setTodos] = useState([])
    const [operationLoading, setOperationLoading] = useState(false);
    const [checked, setChecked] = React.useState([0]);
    const [projects, setProjects] = useState([]);
    const [counterParty, setCounterParty] = useState([]);

    // SELECT OPTIONSLARI
    const projectOptions = [{label: "Loyiha qo'shish +", value: "ADD_PROJECT"}, ...projects.map(i => ({
        label: i.title, value: i.id
    }))];
    const filterProjectOptions = [{label: "Tanlang", value: "nullForProjects"}, ...projects.map(i => ({
        label: i.title, value: i.id
    }))]

    const counterPartyOptions = [...counterParty.map(i => ({
        label: i.fullName, value: i.fullName
    }))];
    const filterCounterPartyOptions = [...counterParty.map(i => ({
        label: i.fullName, value: i.fullName
    }))]

    // FILTER STATE
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterState, setFilterState] = useState({});

    const toggleFilter = () => {
        setIsFilterOpen(p => !p);
    }

    const onFilterClear = () => {
        if (Object.keys(filterState).length) {
            setFilterState({});
        }
        filterForm.setValue("project", filterProjectOptions[0]);
        filterForm.setValue("article", filterArticleOptions[0]);
        filterForm.setValue("startDate", "");
        filterForm.setValue("endDate", "");
        setIsFilterOpen(false);
    };

    const onFilterSubmit = filterForm.handleSubmit((values) => {
        const obj = {
            projectId: values.project?.value === "nullForProjects" ? "" : values.project?.value,
            articleId: values.article?.value === "nullForArticles" ? "" : values.article?.value,
            operationType: values.operationType?.value === "nullForOperationType" ? "" : values.operationType?.value,
            startDate: values.startDate?.split("-").reverse().join("-"),
            endDate: values.endDate?.split("-").reverse().join("-"),
            currency: values.currency?.value === "nullForCurrency" ? "" : values.currency?.value
        }
        setFilterState(obj);
        setIsFilterOpen(false);
    })

    useEffect(() => {
        onFilterSubmit(filterForm.getValues());
    }, [filterForm.watch("project"), filterForm.watch("article"), filterForm.watch("startDate"), filterForm.watch("endDate")])


    // ASOSIY DRAWER
    const openModal = (type) => {
        setIsOpenModal(true);
    }
    const onCloseModal = () => {
        setIsOpenModal(false);
    }


    // PROJECT QO'SHISH DRAWER
    const handleOpenProjectDrawer = () => {
        setIsOpenProjectDrawer(true);
    }
    const handleCloseProjectDrawer = () => {
        setIsOpenProjectDrawer(false);
    }


    // GET QILUVCHI FUNKSIYALAR
    function getProjects() {
        ProjectsProvider.getAllProjects().then(res => {
            setProjects(res.data.data);
        }, err => {
            console.log(err);
        })
    }

    function getCounterParty() {
        CounterPartyProvider.getAllCounterParty().then(res => {
            console.log("cou", res.data)
            setCounterParty(res.data);
        }, err => {
            console.log(err);
        })
    }

    function getOperations() {
        setOperationLoading(true);
        TodoProvider.getTodo(page, filterState).then(res => {
            setTodos(res.data.data);
            console.log("z", res.data.data)
            setModalSum("")
        }, err => {
            console.log(err);
        }).finally(() => setOperationLoading(false))
    }

    useEffect(() => {
        getProjects();
        getCounterParty();
    }, [])

    useEffect(() => {
        getOperations();
    }, [filterState, forRender, page])


    // DRAWERDAGI FORMA SUBMIT HANDLERLARI

    const onSubmitPlan = handleSubmit((values) => {
        const body = {
            projectId: values.projectId?.value,
            counterpartyId: values.counterPartyId?.label,
            title: values.title,
            amount: +modalSum,
            dueDate: values.dueDate,
        }

        TodoProvider.addToDo(body).then(res => {
            console.log(res);
            reset();
            getOperations();
            toast.success("Qo'shildi")
            onCloseModal();
        }, err => {
            console.log(err);
            toast.error(err?.response?.data?.message);
        })
    });

    const submitAddProject = projectForm.handleSubmit((values) => {
        ProjectsProvider.addProject(values).then(res => {
            console.log(res);
            projectForm.reset();
            getProjects();
            handleCloseProjectDrawer();
        }, err => {
            console.log(err)
        })
    })


    const [modalSum, setModalSum] = useState(null)

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

    const changeCheckStatus = (event, id) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                let newArr = [...todos]; // copying the old datas array
                // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
                newArr[i].isFinished = event.target.checked; // replace e.target.value with whatever you want to change it to
                setTodos(newArr);
            }
        }

        console.log(event.target.checked + " " + id);
        TodoProvider.changeTodoStatus(+id, event.target.checked ? "CHECK" : "UNCHECK").then((_) => {
            // for(let i=0; i<todos.length; i++){
            //     if(todos[i].id === id){
            //         let newArr = [...todos]; // copying the old datas array
            //         // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
            //         newArr[i].isFinished = !event.target.checked; // replace e.target.value with whatever you want to change it to
            //         setTodos(newArr);   
            //     }
            // }
            // setTodos(todos);


            toast.success("Muvaffaqiyatli");
        }).catch((err) => {

            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === id) {
                    let newArr = [...todos]; // copying the old datas array
                    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
                    newArr[i].isFinished = !event.target.checked; // replace e.target.value with whatever you want to change it to
                    setTodos(newArr);
                }
            }
            console.log(err);
            toast.error(err?.response?.data?.message);
        });

        // setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleDeleteTodo = (id) => {
        RefObj.current.textContent = `Rostdan ham o'chirishni xoxlaysizmi?`;
        setIsOpen1(true);
        new Promise((res, rej) => {
            RefObj.current.resolve = res;
            RefObj.current.reject = rej;
        })
            .then(async () => {
                await TodoProvider.deleteToDo(id);
                setTodos((pre) =>
                    pre.filter((mod) => {
                        return mod.id !== id;
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <WRAPPER>
            <TableWrapper>
                <h3 className="title">Rejalar</h3>

                <div className="bottom">
                    <div>
                        <form className="filter-content" onSubmit={onFilterSubmit}>
                            <div className="row">
                                <div className="mb-3 col-3">
                                    <div>Proyekt</div>
                                    <Controller
                                        control={filterForm.control}
                                        name="project"
                                        render={({
                                                     field: {onChange, onBlur, value, name, ref},
                                                     fieldState: {invalid, isTouched, isDirty, error},
                                                     formState,
                                                 }) => (<Select
                                            value={value}
                                            options={filterProjectOptions}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            ref={ref}
                                        />)}
                                    />
                                </div>
                                <div className="mb-3 col-3">
                                    <div>Qarama-qarshi tomonlar</div>
                                    <Controller
                                        control={filterForm.control}
                                        name="article"
                                        render={({
                                                     field: {onChange, onBlur, value, name, ref},
                                                     fieldState: {invalid, isTouched, isDirty, error},
                                                     formState,
                                                 }) => (<Select
                                            value={value}
                                            options={filterCounterPartyOptions}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            ref={ref}
                                        />)}
                                    />
                                </div>
                                <div className="mb-3 col-3">
                                    <div>Boshlanish sana</div>
                                    <input className="form-control" type="date" {...filterForm.register("startDate")}/>
                                </div>
                                <div className="mb-3 col-3">
                                    <div>Oxirgi sana</div>
                                    <input className="form-control" type="date" {...filterForm.register("endDate")}/>
                                </div>
                            </div>
                            <div className="row  justify-content-between mx-1">
                                <button className="btn btn-danger col-3" type="button"
                                        onClick={onFilterClear}>Bekor qilish
                                </button>
                                {/*<div className="modal-wrapper d-flex col-8">*/}
                                    <Button
                                        className="col-3"
                                        variant="contained"
                                        onClick={() => openModal()}
                                        style={{
                                            fontFamily: "Inter", color: "#fff", background: "#787EFF",
                                        }}
                                    >
                                        + Reja qo'shish
                                    </Button>
                                {/*</div>*/}
                            </div>
                        </form>
                    </div>
                </div>

                {todos.map((obj, index) => (
                    <div key={obj.id} style={{background: "#e9e9e9"}}>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments" onClick={() => handleDeleteTodo(obj.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            }
                            // disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(obj.id)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={obj.isFinished}
                                        onChange={(value) => {
                                            changeCheckStatus(value, obj.id);
                                        }}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': "{obj.id}"}}
                                    />
                                </ListItemIcon>
                                <ListItemText style={{minWidth: "100"}} id={obj.id} primary={obj.title}/>
                                <ListItemText style={{minWidth: "100"}} id={obj.id}
                                              primary={moment(new Date(obj.addedDate)).format('DD.MM.YYYY')}/>
                                <ListItemText style={{minWidth: "100"}} id={obj.id}
                                              primary={moment(new Date(obj.dueDate)).format('DD.MM.YYYY')}/>

                            </ListItemButton>
                        </ListItem>
                    </div>
                ))}
                {/*<Pagination*/}
                {/*    onChange={(p) => {*/}
                {/*        setPage(p)*/}
                {/*    }}*/}
                {/*    current={page}*/}
                {/*    total={todos?.count}*/}
                {/*    pageSize={20}*/}
                {/*/>*/}
            </TableWrapper>
            {/*-----------------------------------------*/}
            <Drawer
                anchor={"right"}
                open={isOpenModal}

                onClose={() => {
                    onCloseModal();
                }}
            >
                <ModalHeader className="modal-header">
                    <h2 className="title">Reja qo'shish</h2>
                    <button className="closeSvg" onClick={onCloseModal}>
                        <CloseSvg/>
                    </button>
                </ModalHeader>
                <form className="p-3" style={{width: 500}} onSubmit={onSubmitPlan}>
                    <Controller
                        control={control}
                        name="projectId"
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (<Select
                            value={value}
                            placeholder="Proyektni tanlang"
                            options={projectOptions}
                            onBlur={onBlur}
                            onChange={(v) => {
                                if (v.value === "ADD_PROJECT") {
                                    handleOpenProjectDrawer();
                                    onChange(value);
                                    return;
                                }
                                onChange(v);
                            }}
                            ref={ref}
                        />)}
                    />
                    <br/>
                    <Controller
                        control={control}
                        name="counterPartyId"
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (<Select
                            value={value}
                            placeholder="kontragentni tanlang"
                            options={counterPartyOptions}
                            onBlur={onBlur}
                            ref={ref}
                        />)}
                    />
                    <br/>
                    <input autoComplete="off" className="form-control"
                           placeholder={"Reja nomi"} {...register("title", {required: true})}/>
                    <br/>
                    <input autoComplete="off" className="form-control" type="date"
                           placeholder={"Sana"} {...register("dueDate", {required: true})}/>
                    <br/>
                    <NumericFormat
                        className="form-control"
                        value={+modalSum}
                        placeholder="Qiymati"
                        autoComplete="off"
                        onValueChange={(e) => {
                            console.log(e.floatValue);
                            setModalSum(e.floatValue)
                        }}
                        allowLeadingZeros thousandSeparator=" "
                        {...register("amount", {required: false})}
                    />
                    <br/>
                    <button type="submit" className="btn btn-primary">Qo'shish</button>
                </form>
            </Drawer>

            <Drawer
                anchor={"left"}
                open={isOpenProjectDrawer}
                onClose={() => {
                    handleCloseProjectDrawer();
                }}
            >
                <ModalHeader className="modal-header">
                    <h2 className="title">Loyiha qo'shish</h2>
                    <button className="closeSvg" onClick={handleCloseProjectDrawer}>
                        <CloseSvg/>
                    </button>
                </ModalHeader>
                <ModalContent>
                    <form onSubmit={projectForm.handleSubmit(submitAddProject)}>
                        <input type="text" placeholder="Proyekt nomi"
                               className="form-control" {...projectForm.register("title")}/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Qo'shish</button>
                    </form>
                </ModalContent>
            </Drawer>
        </WRAPPER>
    );
};

function pad(n) {
    return n < 10 ? '0' + n : n
}

export default ListTable;
