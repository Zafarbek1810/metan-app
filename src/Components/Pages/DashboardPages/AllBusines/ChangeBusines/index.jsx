import React, {useEffect, useState} from 'react';
import {ChangeBusinesWrapper, FilterWrapper} from "./ChangeBusines.style";
import {Button} from "@mui/material";
import {Settings} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {Controller, useForm} from "react-hook-form";
import OperationProvider from "../../../../../Data/Providers/OperationProvider";
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";
import ApexChartWrapper from "../Dashboard/dashboard/react-apexcharts";
import {Card, Col, Progress, Row, Statistic} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import Grid from "@mui/material/Grid";
import Trophy from "../Dashboard/dashboard/Trophy";
import StatisticsCard from "../Dashboard/dashboard/StatisticsCard";
import WeeklyOverview from "../Dashboard/dashboard/WeeklyOverview";
import TotalEarning from "../Dashboard/dashboard/TotalEarning";
import CardStatisticsVerticalComponent from "../Dashboard/dashboard/card-stats-vertical";
import Poll from "mdi-material-ui/Poll";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import BriefcaseVariantOutline from "mdi-material-ui/BriefcaseVariantOutline";
import HelpCircleOutline from "mdi-material-ui/HelpCircleOutline";
import SalesByCountries from "../Dashboard/dashboard/SalesByCountries";
import DepositWithdraw from "../Dashboard/dashboard/DepositWithdraw";
import Table from "../Dashboard/dashboard/Table";
import {Wrapper} from "../../Home/style";
import {StatistikaWrapper} from "../Dashboard/Statistika.style";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    paper: {
        background: "white",
        color: "#000",
        fontSize:18,
        fontFamily:"Inter",

    },
    input: {
        color: "#fff",
        fontSize:18,
        fontFamily:"Inter",
        borderColor:"#000",
        borderWidth:10,
        backgroundColor: "transparent",
        borderRadius: 40,
        "&:focus": {
            borderRadius: 40,
            borderColor: "#000",
            background: "rgba(0,0,0,0)"
        },
        '&:before': {
            borderColor: "red",
        },
        '&:after': {
            borderColor: "green",
        }
    }
}));

const ChangeBusines = () => {
    const classes = useStyles();
    const [project, setProject] = React.useState('');
    const [davr, setDavr] = React.useState('');

    const handleChangeProject = (event) => {
        setProject(event.target.value);
    };

    const handleChangeDavr = (event) => {
        setDavr(event.target.value);
    };

    //filter
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterState, setFilterState] = useState({});
    const [statistic, setStatistic] = useState({})
    const filterForm = useForm();
    const toggleFilter = () => {
        setIsFilterOpen(p => !p);
    }

    const onFilterClear = () => {
        if (Object.keys(filterState).length) {
            setFilterState({});
        }
        filterForm.setValue("startDate", "");
        filterForm.setValue("endDate", "");
        setIsFilterOpen(false);
    };

    const onFilterSubmit = filterForm.handleSubmit((values) => {
        const obj = {
            startDate: values.startDate?.split("-").reverse().join("-"),
            endDate: values.endDate?.split("-").reverse().join("-")
        }
        setFilterState(obj);
        setIsFilterOpen(false);
    })

    function getAllIncomeOutcomes(){
        ProjectsProvider.getAllIncomeOutcomes(filterState).then(res => {
            setStatistic(res.data);
            console.log(res.data)
        }, err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAllIncomeOutcomes();
    }, [filterState])




    return (
        <ChangeBusinesWrapper>
            <div className="wrap">
                <h3>Olimjon</h3>
                <div className="selects">
                    <FormControl variant="filled" fullWidth className={classes.formControl}>
                        <InputLabel style={{color:"#fff"}} id="demo-simple-select-label1">Proyektlar</InputLabel>
                        <Select
                            MenuProps={{
                                classes: {
                                    paper: classes.paper
                                }
                            }}
                            inputProps={{
                                classes: {
                                    root: classes.input
                                }
                            }}
                            labelId="demo-simple-select-label1"
                            id="demo-simple-select1"
                            value={project}
                            label="Proyekt"
                            onChange={handleChangeProject}
                        >
                            <MenuItem value={1}>Metan</MenuItem>
                            <MenuItem value={2}>Propan</MenuItem>
                            <MenuItem value={3}>Benzin</MenuItem>
                            <MenuItem value={4}>Kafe</MenuItem>
                            <MenuItem value={5}>Issiqxona</MenuItem>
                            <MenuItem value={6}>Moyka</MenuItem>
                            <MenuItem value={7}>Arenda</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" fullWidth className={classes.formControl}>
                        <FilterWrapper>
                            <Button onClick={toggleFilter}  className="selec" style={{color:"#fff", height:"60px"}} variant="contained" startIcon={<Settings />}>
                                Filterlash
                            </Button>
                            <form className="filter-content" style={{visibility: isFilterOpen ? "visible" : "hidden"}} onSubmit={onFilterSubmit}>
                                <div className="row">
                                    <div className="mb-3 col-6">
                                        <div>Boshlanish sana</div>
                                        <input className="form-control" type="date" {...filterForm.register("startDate")}/>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <div>Oxirgi sana</div>
                                        <input className="form-control" type="date" {...filterForm.register("endDate")}/>
                                    </div>
                                </div>


                                <div className="d-flex gap-2">
                                    <button className="btn btn-secondary" type="button" onClick={onFilterClear}>Bekor qilish</button>
                                    <button className="btn btn-success" type="submit">Qo'llash</button>
                                </div>
                            </form>
                        </FilterWrapper>
                    </FormControl>
                </div>
            </div>
            <StatistikaWrapper>
                <Wrapper>
                    <ApexChartWrapper>
                        <div className="site-statistic-demo-card mb-4">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card>
                                        <div className="head">
                                            <h4 className="title" style={{fontSize:14, color:"rgba(0,0,0,0.4)", fontWeight:400}}>
                                                Kirimlar
                                            </h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <ArrowUpOutlined style={{color: '#3f8600', fontSize:30, marginRight:20}}/>
                                            <div className="textCard">
                                                <p style={{color: '#3f8600', fontSize:24 }}>{(statistic?.totalIncomes?.toLocaleString())} UZS</p>
                                                <p style={{color: '#3f8600', fontSize:24 }}>{statistic?.totalIncomesInUSD?.toLocaleString()} USD</p>
                                            </div>
                                        </div>
                                        <Progress
                                            percent={109}
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card>
                                        <div className="head">
                                            <h4 className="title" style={{fontSize:14, color:"rgba(0,0,0,0.4)", fontWeight:400}}>
                                                Chiqimlar
                                            </h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <ArrowDownOutlined style={{color: '#cf1322', fontSize:30, marginRight:20}}/>
                                            <div className="textCard">
                                                <p style={{color: '#cf1322', fontSize:24 }}>{(statistic?.totalOutcomes?.toLocaleString())} UZS</p>
                                                <p style={{color: '#cf1322', fontSize:24 }}>{statistic?.totalOutcomesInUSD?.toLocaleString()} USD</p>
                                            </div>
                                        </div>
                                        <Progress
                                            percent={106}
                                            strokeColor={{
                                                '0%': '#899FD4',
                                                '100%': '#899FD4',
                                            }}
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card>
                                        <div className="head">
                                            <h4 className="title" style={{fontSize:14, color:"rgba(0,0,0,0.4)", fontWeight:400}}>
                                                Qoldiq
                                            </h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <ArrowUpOutlined style={{color: '#3f8600', fontSize:30, marginRight:20}}/>
                                            <div className="textCard">
                                                <p style={{color: '#3f8600', fontSize:24 }}>{(statistic?.totalPnl?.toLocaleString())} UZS</p>
                                                <p style={{color: '#3f8600', fontSize:24 }}>{(statistic?.totalIncomesInUSD+statistic?.totalOutcomesInUSD).toLocaleString()} USD</p>
                                            </div>
                                        </div>
                                        <Progress
                                            percent={109}
                                            strokeColor={{
                                                '0%': '#1de9b6',
                                                '100%': '#1dc4e9',
                                            }}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <StatisticsCard />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Trophy/>
                                <br/>
                                <SalesByCountries />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <TotalEarning />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <CardStatisticsVerticalComponent
                                            stats='$25.6k'
                                            icon={<Poll />}
                                            color='success'
                                            trendNumber='+42%'
                                            title='Total Profit'
                                            subtitle='Weekly Profit'
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CardStatisticsVerticalComponent
                                            stats='$78'
                                            title='Refunds'
                                            trend='negative'
                                            color='secondary'
                                            trendNumber='-15%'
                                            subtitle='Past Month'
                                            icon={<CurrencyUsd />}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CardStatisticsVerticalComponent
                                            stats='862'
                                            trend='negative'
                                            trendNumber='-18%'
                                            title='New Project'
                                            subtitle='Yearly Project'
                                            icon={<BriefcaseVariantOutline />}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CardStatisticsVerticalComponent
                                            stats='15'
                                            color='warning'
                                            trend='negative'
                                            trendNumber='-18%'
                                            subtitle='Last Week'
                                            title='Sales Queries'
                                            icon={<HelpCircleOutline />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={8}>
                                <DepositWithdraw />
                            </Grid>
                            <Grid item xs={12}>
                                <Table />
                            </Grid>
                        </Grid>
                    </ApexChartWrapper>
                </Wrapper>
            </StatistikaWrapper>
        </ChangeBusinesWrapper>
    );
};

export default ChangeBusines;