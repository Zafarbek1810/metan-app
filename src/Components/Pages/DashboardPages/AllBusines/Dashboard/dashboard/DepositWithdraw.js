// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import {styled} from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'
import {useEffect, useState} from "react";
import OperationProvider from "../../../../../../Data/Providers/OperationProvider";
import ProjectsProvider from "../../../../../../Data/Providers/ProjectsProvider";
import MyLink from "../../../../../Common/MyLink";

// const depositData = [
//     {
//         amount: '+500,000',
//         subtitle: 'Biznesga kirgan pul',
//         title: 'Arenda kafe',
//     },
//     {
//         amount: '+100,000',
//         subtitle: 'Biznesga kirgan pul',
//         title: 'Moyka',
//     },
//     {
//         amount: '+1,000,000',
//         subtitle: 'Biznesga kirgan pul',
//         title: 'Parnik',
//     },
//     {
//         amount: '+600,000',
//         subtitle: 'Biznesga kirgan pul',
//         title: 'Arenda kafe',
//     },
//     {
//         amount: '+200,000',
//         subtitle: 'Biznesga kirgan pul',
//         title: 'Parnik',
//     }
// ]

const withdrawData = [
    {
        logoWidth: 29,
        logoHeight: 30,
        amount: '-5,000,000',
        title: 'Metan',
        subtitle: 'Arenda',
        logo: '/img/expenses.png'
    },
    {
        logoWidth: 34,
        logoHeight: 34,
        amount: '-8,000,000',
        title: 'Metan',
        logo: '/img/expenses.png',
        subtitle: 'Kredit',
    },
    {
        logoWidth: 30,
        logoHeight: 30,
        amount: '-500,000',
        title: 'Parnik',
        subtitle: 'Boshqa harajatlar',
        logo: '/img/expenses.png'
    },
    {
        logoWidth: 30,
        logoHeight: 30,
        amount: '-1,500,000',
        title: 'Kafe',
        subtitle: 'Kredit',
        logo: '/img/expenses.png'
    },
    {
        logoWidth: 36,
        logoHeight: 21,
        amount: '-3,000,000',
        title: 'Moyka',
        subtitle: 'Kredit',
        logo: '/img/expenses.png',

    }
]

// Styled Divider component
const Divider = styled(MuiDivider)(({theme}) => ({
    margin: theme.spacing(5, 0),
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: {
        borderRight: 'none',
        margin: theme.spacing(0, 5),
        borderBottom: `1px solid ${theme.palette.divider}`
    }
}))

const DepositWithdraw = () => {
    const [incomesData, setIncomesData] = useState([])
    const [outcomesData, setOutcomesData] = useState([])

    useEffect(() => {
        ProjectsProvider.getRecentOperations()
            .then(res => {
                console.log("res", res.data.incomes)
                setIncomesData(res.data.incomes)
                setOutcomesData(res.data.outcomes)
            }, err => {
                console.log(err);
            })
    }, [])

    return (
        <Card sx={{display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row']}}>
            <Box sx={{width: '100%'}}>
                <CardHeader
                    title='Kirim'
                    sx={{pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': {mt: 0.6}}}
                    action={<Typography variant='caption'><MyLink to="/dashboard/operation">Hammasi</MyLink></Typography>}
                    titleTypographyProps={{
                        variant: 'h6',
                        sx: {lineHeight: '1.6 !important', letterSpacing: '0.15px !important'}
                    }}
                />
                    <CardContent sx={{pb: theme => `${theme.spacing(5.5)} !important`}}>
                        {incomesData.map((item, index) => {
                            return (
                                <Box
                                    key={item?.article?.title}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: index !== incomesData.length - 1 ? 3 : 0
                                    }}
                                >
                                    <Box sx={{minWidth: 38, display: 'flex', justifyContent: 'center'}}>
                                        <img src="/img/cash.png" alt={item.title} width="28px" height="29px"/>
                                    </Box>
                                    <Box
                                        sx={{
                                            ml: 1,
                                            width: '100%',
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box sx={{marginRight: 2, display: 'flex', flexDirection: 'column'}}>
                                            <Typography
                                                sx={{fontWeight: 600, fontSize: '0.875rem'}}>{item?.article?.title}</Typography>
                                            <Typography variant='caption'>{item?.description}</Typography>
                                        </Box>
                                        <Typography variant='subtitle2' sx={{fontWeight: 600, color: 'success.main'}}>
                                            +{(+item?.amount).toLocaleString()} {item?.currency}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </CardContent>
            </Box>

            <Divider flexItem/>

            <Box sx={{width: '100%'}}>
                <CardHeader
                    title='Chiqim'
                    sx={{pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': {mt: 0.6}}}
                    action={<Typography variant='caption'><MyLink to="/dashboard/operation">Hammasi</MyLink></Typography>}
                    titleTypographyProps={{
                        variant: 'h6',
                        sx: {lineHeight: '1.6 !important', letterSpacing: '0.15px !important'}
                    }}
                />
                <CardContent sx={{pb: theme => `${theme.spacing(5.5)} !important`}}>
                    {outcomesData.map((item, index) => {
                        return (
                            <Box
                                key={item?.article?.title}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: index !== outcomesData.length - 1 ? 3 : 0
                                }}
                            >
                                <Box sx={{minWidth: 36, display: 'flex', justifyContent: 'center'}}>
                                    <img src="/img/expenses.png" alt={item?.article?.title} width="29px"
                                         height="30px"/>
                                </Box>
                                <Box
                                    sx={{
                                        ml: 1,
                                        width: '100%',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box sx={{marginRight: 2, display: 'flex', flexDirection: 'column'}}>
                                        <Typography
                                            sx={{fontWeight: 600, fontSize: '0.875rem'}}>{item?.article?.title}</Typography>
                                        <Typography variant='caption'>{item?.description}</Typography>
                                    </Box>
                                    <Typography variant='subtitle2' sx={{fontWeight: 600, color: 'error.main'}}>
                                        {(+item?.amount).toLocaleString()} {item.currency}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </CardContent>
            </Box>
        </Card>
    )
}

export default DepositWithdraw
