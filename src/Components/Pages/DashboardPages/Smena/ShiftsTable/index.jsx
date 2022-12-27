import React, {useEffect, useRef, useState} from "react";
import {ModalContent, ShiftsTableWrapper} from "./ShiftsTable.style";
import {Modal, Select} from "antd";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import {useForm} from "react-hook-form";
import ButtonLoader from "../../../../Common/ButtonLoader";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import MinLoader from "../../../../Common/MinLoader";
import {toast} from "react-toastify";
import Pagination from "rc-pagination";
import {FilterWrapper} from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import {Button} from "@mui/material";
import CardSvg from "../../../../Common/Svgs/CardSvg";
import DollarSvg2 from "../../../../Common/Svgs/DollarSvg2";
import {NumericFormat} from 'react-number-format';

const ShiftsTable = () => {
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

    //today date
    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate());

    const [date, setDate] = useState(defaultDate);

    const onSetDate = (event) => {
        setDate(new Date(event.target.value));
        console.log(date.toLocaleDateString("en-CA"))
        onFilterSum()
    };

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [forRender, setForRender] = useState(null);

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterState, setFilterState] = useState({});
    const [filterStateSum, setFilterStateSum] = useState({date: new Date(), outletId: 1});
    const filSelectRef = useRef();
    const filDateRef = useRef();
    const filModDateRef = useRef();
    const filModOutletRef = useRef();

    const showModal = () => {
        onFilterSum()
        // handleOutletFilter()

        setIsModalOpen(true);

    };
    const handleCancel = () => {
        console.log("Modal closed");
        setIsModalOpen(false);
    };

    const [outletId, setoutletId] = useState(null);
    const [outlet, setOutlet] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [expence, setExpence] = useState([]);
    const [pnl, setPnl] = useState([]);

    const [exSum, setExSum] = useState(-1);
    const [render, setRender] = useState(null)
    const [totalElements, setTotalElements] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const onChange = (page) => {
        setCurrentPage(page);
    };


    const [numDept, setNumDept] = useState(null)
    const [numTerminal, setNumTerminal] = useState(null)
    const [numTransfer, setNumTransfer] = useState(null)
    const [numCash, setNumCash] = useState(null)


    useEffect(() => {
        async function fn() {
            console.log("OUTLETSGA REQUEST JONATILDI");
            await OutletProvider.getAllOutlets(0, 1000)
                .then((res) => {
                    console.log("outlet came from server", res.data);
                    setOutlet(res.data);
                    console.log("outlet after setting: ", outlet);
                    onFilterSum()
                    onOpenFilterSum();

                })
                .catch((err) => {
                    console.log(err);
                    Message.serverError();
                });
            console.log("OUTLETSDAN REQUEST OLINDI");
        }

        fn()
    }, []);

    useEffect(() => {
        setActiveOutlet(outlet[0]?.id);
        // const today = new Date();
        // const yyyy = today.getFullYear();
        // let mm = today.getMonth() + 1; // Months start at 0!
        // let dd = today.getDate();
        //
        // if (dd < 10) dd = '0' + dd;
        // if (mm < 10) mm = '0' + mm;
        //
        // const formattedToday = dd + '-' + mm + '-' + yyyy;
        //
        // setFilterStateSum( prev=> ({
        //     ...filterStateSum,
        //     date: filterStateSum.date?filterStateSum.date:formattedToday,
        //     outletId: +outlet[0]?.id
        // }));
        // setoutletId(+outlet[0]?.id);
        // +filterStateSum?.outletId
        onOpenFilterSum();
    }, [outlet])


    const optionExpense = outlet.map((i) => ({
        label: i.title,
        value: i.id,
    }));

    const handleOutletId = (value) => {
        setoutletId(value);
    };

    const [activeOutlet, setActiveOutlet] = useState(null);


    const onSubmit = async (values) => {
        const body = {};
        if (outlet.length === 1) {
            body.outletId = +outlet[0].id;
        } else {
            body.outletId = +activeOutlet;
        }

        body.expenses = +exSum;
        body.autopilot = +values.autopilot;
        body.byCard = +numTerminal;
        body.transfers = +numTransfer;
        body.debt = +numDept;
        body.cash = +numCash;
        body.date = date.toLocaleDateString("en-CA");
        setLoading(true);
        try {
            const {data} = await OutletProvider.addShift(body);
            console.log(data);
            setForRender(Math.random());
            setValue("xarajat", "");
            setValue("autopilot", "");
            setNumDept("")
            setNumTerminal("")
            setNumTransfer("")
            setNumCash("")
            // setValue("numTerminal", "");
            // setValue("numCash", "");
            // setValue("numDept", "");
            // setValue("numCash", "");
            setValue("date", "");
            toast.success("Muvaffaqiyatli!");
            handleCancel();
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        setLoading2(true);
        OutletProvider.getShifts(currentPage - 1, 20, filterState)
            .then(({data}) => {
                console.log(data);
                setShifts(data.data);
                setExpence(data.totalExpenses);
                setPnl(data.totalPnl);
                console.log("setStatistic", data);
                setTotalElements(data.count);
            })
            .catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.message);
            })
            .finally(() => {
                setLoading2(false);
            });
    }, [filterState, forRender, currentPage]);

    useEffect(() => {
        async function fn() {
            console.log("MODAL HOLATI O'ZGARDI", isModalOpen);
            // setExSum(777);
        }

        fn()
    }, [isModalOpen])


    useEffect(() => {
        async function fn() {
            console.log("New active outlet", activeOutlet);
            setoutletId(activeOutlet)
            // setExSum(777);
        }

        fn()
    }, [activeOutlet])


    useEffect(() => {
        async function fn() {
            console.log("Yangi outlet tanlandi", activeOutlet);
            //
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = dd + '-' + mm + '-' + yyyy;

            setFilterStateSum(prev => ({
                ...filterStateSum,
                date: filterStateSum.date ? filterStateSum.date : formattedToday,
                outletId: activeOutlet
            }));
            // setExSum(777);
        }

        fn()
    }, [activeOutlet])


    // useEffect(() => {
    //     async function fn() {
    //
    //         console.log("Outlet keldimi? ", outlet);
    //         console.log("Filter state sum bormi ?", filterStateSum);
    //         console.log("EXPENSES GA REQUEST JONATILDI");
    //         await OutletProvider.getExpensesSum(0, 1000, filterStateSum)
    //             .then((res) => {
    //                 console.log("expensessum", res)
    //                 setExSum(res.data.expensesAmountSum);
    //                 console.log("Expenses sum joylandi");
    //                 setTimeout(()=>{
    //                     console.log("expensessum", exSum);
    //
    //                 }, 3000)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //                 // Message.serverError()
    //             })
    //
    //         console.log("EXPENSESDAN RESPONSE OLINDI");
    //     }
    //
    //     fn()
    // }, [filterStateSum, isModalOpen, outlet])
    //

    useEffect(() => {
        async function fn() {
            console.log("777 filter state sum o'zgardi", filterStateSum);
            if (filterStateSum.date && filterStateSum.outletId) {
                await OutletProvider.getExpensesSum(0, 1000, filterStateSum)
                    .then((res) => {
                        console.log("expensessum", res)
                        setExSum(res.data.expensesAmountSum);
                        console.log("Expenses sum joylandi");
                    })
                    .catch((err) => {
                        console.log(err)
                        // Message.serverError()
                    })
            }

            // setExSum(777);
        }

        fn()
    }, [filterStateSum])


    useEffect(() => {
        console.log("qiymat berdi", exSum)
    }, [exSum])

    const onFilterSum = () => {
        const date = filModDateRef.current?.value?.split("-").reverse().join("-");
        const outletId = filModOutletRef.current?.value;
        setFilterStateSum(prev => ({
            ...filterStateSum,
            date: date,
            outletId: outletId
        }));

        console.log("-----")
        console.log(date);
        console.log(outletId);
    }

    const onOpenFilterSum = () => {
        // const date = filModDateRef.current?.value?.split("-").reverse().join("-");
        // const outletId = filModOutletRef.current?.value;
        console.log("tesss", outlet);
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;


        setFilterStateSum(prev => ({
            ...filterStateSum,
            date: formattedToday,
            outletId: outlet ? outlet[0] ? outlet[0].id : 1 : 1
        }));
        console.log("-----")
        console.log(date);
        console.log(outletId);
    }

    const onOnFilter = () => {
        const date = filDateRef.current?.value?.split("-").reverse().join("-");
        const outletId = filSelectRef.current?.value;
        setFilterState({date, outletId});
        setIsFilterOpen(false);
    };

    const handleOutletFilter = (e) => {
        console.log("wtf", e?.target?.value);
        setActiveOutlet(e?.target?.value);

        console.log("asasa", activeOutlet)
    };

    const textChanged = (e) => {
        console.log("text changed", +e?.target?.value);
        // setActiveOutlet(e?.target?.value);
        setExSum(+e?.target?.value);
        // console.log("asasa", activeOutlet)
    };

    const onOffFilter = () => {
        if (Object.keys(filterState).length) {
            setFilterState({});
        }
        filDateRef.current.value = "";
        filSelectRef.current.value = "";
        setIsFilterOpen(false);
    };


    return (
        <ShiftsTableWrapper>
            <div className="top">
                <h3 className="title">Smena</h3>


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
                                    {/*<span className="label-text">Savdo nuqtalari</span>*/}
                                    {/*    <Select*/}
                                    {/*        placeholder="Tanlang"*/}
                                    {/*        allowClear*/}
                                    {/*        style={{*/}
                                    {/*          width: "100%",*/}
                                    {/*        }}*/}
                                    {/*        ref={filModOutletRef}*/}
                                    {/*        value={outletId}*/}
                                    {/*        onChange={handleOutletId}*/}
                                    {/*        options={optionExpense}*/}
                                    {/*    />*/}
                                    <label className="form-label">Savdo nuqtasi</label>
                                    <select value={activeOutlet} ref={filModOutletRef} onChange={handleOutletFilter}
                                            className="form-control">
                                        <option value="null" disabled>
                                            Tanlang
                                        </option>
                                        {optionExpense.map((i) => (
                                            <option value={i.value} key={i.value}>
                                                {i.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                <label className="label">
                                    <span className="label-text">Sana</span>
                                    {errors.sana && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        ref={filModDateRef}
                                        autoComplete="off"
                                        type="date"
                                        // disabled
                                        value={date.toLocaleDateString("en-CA")}
                                        onChange={onSetDate}
                                    />
                                </label>

                                <label className="label">
                                    <span className="label-text">Xarajat</span>
                                    {errors.xarajat && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        autoComplete="off"
                                        type="number"
                                        value={exSum}
                                        onChange={event => setExSum(event.target.value)}
                                    />
                                    {/*<input*/}
                                    {/*    autoComplete="off"*/}
                                    {/*    type="number"*/}
                                    {/*    defaultValue={exSum}*/}
                                    {/*    // onChange={textChanged}*/}
                                    {/*    onChange={ event => setExSum(event.target.value)}*/}
                                    {/*    {...register("xarajat", {required: true})*/}
                                    {/*    }*/}
                                    {/*/>*/}
                                </label>

                                <label className="label">
                                    <span className="label-text">Autopilot</span>
                                    {errors.autopilot && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        autoComplete="off"
                                        type="number"
                                        {...register("autopilot", {required: true})}
                                    />
                                </label>

                                <label className="label">
                                    <span className="label-text">Terminal</span>
                                    {errors.terminal && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <NumericFormat
                                        value={+numTerminal}
                                        autoComplete="off"
                                        onValueChange={(e) => {
                                            console.log(e.floatValue);
                                            setNumTerminal(e.floatValue)
                                        }
                                        }
                                        allowLeadingZeros thousandSeparator=" "
                                        {...register("terminal", {required: false})}
                                    />
                                </label>

                                <label className="label">
                                    <span className="label-text">Pul o'tkazma</span>
                                    {errors.money && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <NumericFormat
                                        value={+numTransfer}
                                        autoComplete="off"
                                        onValueChange={(e) => {
                                            console.log(e.floatValue);
                                            setNumTransfer(e.floatValue)
                                        }
                                        }
                                        allowLeadingZeros thousandSeparator=" "
                                        {...register("money", {required: false})}
                                    />
                                </label>

                                <label className="label">
                                    <span className="label-text">Kelgan pul</span>
                                    {errors.cash && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <NumericFormat
                                        value={+numCash}
                                        autoComplete="off"
                                        onValueChange={(e) => {
                                            console.log(e.floatValue);
                                            setNumCash(e.floatValue)
                                        }
                                        }
                                        allowLeadingZeros thousandSeparator=" "
                                        {...register("cash", {required: false})}
                                    />
                                </label>

                                <label className="label">
                                    <span className="label-text">Qarz</span>
                                    {errors.dept && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <NumericFormat
                                        value={+numDept}
                                        autoComplete="off"
                                        onValueChange={(e) => {
                                            console.log(e.floatValue);
                                            setNumDept(e.floatValue)
                                        }
                                        }
                                        allowLeadingZeros thousandSeparator=" "
                                        {...register("dept", {required: false})}
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

            <div className="statistika">
                <div className="card">
                    <h5>Statistika</h5>
                    <div className="wrap">
                        <div className="left">
                            <div className="icon">
                                <CardSvg/>
                            </div>
                            <div className="bot">
                                <span>{(+expence).toLocaleString().replaceAll(',', ' ')}</span>
                                <p>Xarajat</p>
                            </div>
                        </div>

                        <div className="right">
                            <div className="icon">
                                <DollarSvg2/>
                            </div>
                            <div className="bot">
                                <span>{(+pnl).toLocaleString().replaceAll(',', ' ')}</span>
                                <p>Qoldiq</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter">
                <FilterWrapper>
                    <Button
                        variant="contained"
                        onClick={() => setIsFilterOpen((p) => !p)}
                        style={{
                            fontFamily: "Inter",
                            color: "#fff",
                            background: "#787EFF",
                        }}
                    >
                        Filter
                    </Button>

                    <div
                        className="filter-content"
                        style={{visibility: isFilterOpen ? "visible" : "hidden"}}
                    >
                        <div className="row">
                            <div className="mb-3 col-6">
                                <label className="form-label">Savdo nuqtasi</label>
                                <select ref={filSelectRef} className="form-control">
                                    <option value={"null"} disabled>
                                        Tanlang
                                    </option>
                                    {optionExpense.map((i) => (
                                        <option value={i.value} key={i.value}>
                                            {i.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Davr</label>
                                <input
                                    autoComplete="off"
                                    ref={filDateRef}
                                    name="startDate"
                                    type="date"
                                    className="form-control"
                                />
                            </div>
                            <div className="d-flex gap-2">
                                <Button variant="outlined" onClick={onOffFilter}>
                                    Bekor qilish
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={onOnFilter}
                                >
                                    Qo'llash
                                </Button>
                            </div>
                        </div>
                    </div>
                </FilterWrapper>
                {!!Object.keys(filterState).length && (
                    <div className="filter-state col-12">
                        <div className="filter-state__inner">
                            <span>Filtrlangan</span>
                            <button className="btn btn-secondary" onClick={onOffFilter}>
                                O'chirish
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-borderless table-hover">
                    <thead>
                    <tr>
                        <th className="col">Sana</th>
                        <th className="col">Kolonka</th>
                        <th className="col">Avtopilot</th>
                        <th className="col">Yo'qotish</th>
                        <th className="col">Realizasiya</th>
                        <th className="col">Kolonka Summa</th>
                        <th className="col">Avtopilot Summa</th>
                        <th className="col">Fakt</th>
                        <th className="col">inKassator</th>
                        <th className="col">Terminal</th>
                        <th className="col">Pul o'tkazma</th>
                        <th className="col">Jami</th>
                        <th className="col">Qarz</th>
                        <th className="col">Xarajat</th>
                        <th className="col">Naqd</th>
                        <th className="col">Qoldiq</th>
                        <th className="col">Bonus</th>
                        <th className="col">To'langan ballar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!loading2 ? (
                        shifts.length ? (
                            shifts.map((obj, index) => (
                                <tr key={obj.id}>
                                    <td className="col">
                                        {(currentPage - 1) * 20 + index + 1}.{" "}
                                        {new Date(obj.date).getDate() +
                                            "-" +
                                            (new Date(obj.date).getMonth() + 1) +
                                            "-" +
                                            new Date(obj.date).getFullYear()}{" "}
                                    </td>
                                    <td className="col">{obj.amountOfGasColumn.toLocaleString().replaceAll(',', ' ')}</td>
                                    <td className="col">{obj.autopilot.toLocaleString().replaceAll(',', ' ')}</td>
                                    <td className="col">{obj.loss}</td>
                                    <td
                                        className="col"
                                        style={{color: "#FB8C00", fontWeight: 600}}
                                    >
                                        {obj.realization.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td
                                        className="col"
                                        style={{color: "#F4511E", fontWeight: 600}}
                                    >
                                        {obj.gasColumnSumm.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td
                                        className="col"
                                        style={{color: "#7CB342", fontWeight: 600}}
                                    >
                                        {obj.autopilotSumm.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td className="col">{obj.fact.toLocaleString().replaceAll(',', ' ')}</td>

                                    <td className="col">{obj.inKassator.toLocaleString().replaceAll(',', ' ')}</td>

                                    <td className="col">{obj.byCard.toLocaleString().replaceAll(',', ' ')}</td>
                                    <td
                                        className="col"
                                        style={{color: "#F4511E", fontWeight: 600}}
                                    >
                                        {obj.transfers.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td className="col">{obj.total.toLocaleString().replaceAll(',', ' ')}</td>
                                    <td className="col">{obj.debts.toLocaleString().replaceAll(',', ' ')}</td>
                                    <td className="col">{obj.expenses.toLocaleString().replaceAll(',', ' ')}</td>
                                    <td
                                        className="col"
                                        style={{color: "#7CB342", fontWeight: 600}}
                                    >
                                        {obj.byCash.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td
                                        className="col"
                                        style={{color: "#FB8C00", fontWeight: 600}}
                                    >
                                        {obj.pnl.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td
                                        className="col"
                                        style={{color: "#F4511E", fontWeight: 600}}
                                    >
                                        {obj.bonus.toLocaleString().replaceAll(',', ' ')}
                                    </td>
                                    <td
                                        className="col"
                                        style={{color: "#7CB342", fontWeight: 600}}
                                    >
                                        {obj.paidPoints.toLocaleString().replaceAll(',', ' ')}
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
                                    Smenalar mavjud emas!
                                </h3>
                            </div>
                        )
                    ) : (
                        <MinLoader/>
                    )}
                    </tbody>
                </table>
            </div>
            <Pagination
                onChange={onChange}
                current={currentPage}
                total={totalElements}
                pageSize={20}
            />
        </ShiftsTableWrapper>
    );
};

export default ShiftsTable;
