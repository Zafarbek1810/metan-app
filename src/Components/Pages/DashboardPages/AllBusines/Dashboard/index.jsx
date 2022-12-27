// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from './dashboard/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from './dashboard/react-apexcharts'

// ** Demo Components Imports
import Table from './dashboard/Table'
import TotalEarning from './dashboard/TotalEarning'
import StatisticsCard from './dashboard/StatisticsCard'
import WeeklyOverview from './dashboard/WeeklyOverview'
import DepositWithdraw from './dashboard/DepositWithdraw'
import SalesByCountries from './dashboard/SalesByCountries'
import Trophy from "./dashboard/Trophy";
import {Wrapper} from "../../Home/style";
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {Card, Col, Progress, Row, Statistic} from 'antd';

const Dashboard = () => {
    return (
        <Wrapper>
            <ApexChartWrapper>
                <div className="site-statistic-demo-card mb-4">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    style={{marginBottom:20}}
                                    title="Kirimlar"
                                    value={"129 000 000"}
                                    precision={2}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="UZS"
                                />
                                <Progress
                                    percent={69}
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    style={{marginBottom:20}}
                                    title="Chiqimlar"
                                    value={"11 500 000"}
                                    precision={2}
                                    valueStyle={{
                                        color: '#cf1322',
                                    }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="UZS"
                                />
                                <Progress
                                    percent={36}
                                    strokeColor={{
                                        '0%': '#899FD4',
                                        '100%': '#899FD4',
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic
                                    style={{marginBottom:20}}
                                    title="Hisobdagi pullar"
                                    value={"24 000 000"}
                                    precision={2}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="UZS"
                                />
                                <Progress
                                    percent={69}
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
                    <Grid item xs={12} md={4}>
                        <Trophy />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <StatisticsCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <WeeklyOverview />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TotalEarning />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <CardStatisticsVerticalComponent
                                    stats='235M'
                                    icon={<Poll />}
                                    color='success'
                                    trendNumber='+42%'
                                    title='Qoldiq'
                                    subtitle='Oxirgi oy'
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CardStatisticsVerticalComponent
                                    stats='100M'
                                    title='Xarajatlar'
                                    trend='negative'
                                    color='secondary'
                                    trendNumber='-15%'
                                    subtitle="O'tgan oy"
                                    icon={<CurrencyUsd />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CardStatisticsVerticalComponent
                                    stats='24M'
                                    trend='negative'
                                    trendNumber='-18%'
                                    title='Qarzlar'
                                    subtitle="O'tgan oy"
                                    icon={<BriefcaseVariantOutline />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CardStatisticsVerticalComponent
                                    stats='345M'
                                    color='warning'
                                    trend='positive'
                                    trendNumber='+18%'
                                    subtitle='Oxirgi oy'
                                    title='Kirim'
                                    icon={<HelpCircleOutline />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SalesByCountries />
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
    )
}

export default Dashboard
