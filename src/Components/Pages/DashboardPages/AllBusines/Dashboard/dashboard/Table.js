// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { useEffect, useState } from 'react'
import ProjectsProvider from '../../../../../../Data/Providers/ProjectsProvider'
import moment from 'moment'
function getRandomColor(){
  const colors = Array('error', 'warning', 'success', 'secondary');
  return colors[Math.floor(Math.random()*colors.length)];

}

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {

  const [rows, setRows] = useState([]);

  function getRows() {
    ProjectsProvider.getShifts(null, null, 10, 0).then(
      (res) => {
        // console.log("shifts",res.data.data);
        const temp = [];

        if(res.data.data){
          res.data.data.forEach(element => {
            temp.push({
              id: element.id,
              date: element.date,
              projectTitle: element.project.title,
              totalIncome: element.totalIncome,
              totalOutcome: element.totalOutcome,
              pnl: element.pnl,
              currency: element.currency
            })
          });
        }
        console.log("shifts all", temp)
;        setRows(temp);
        // console.log("counter statistics", res.data);
        // const temp = [...salesData];
        // temp[0].stats = res.data.totalTodos;
        // temp[1].stats = res.data.totalClients;
        // temp[2].stats = res.data.totalProjects;
        // temp[3].stats = res.data.totalBudgets;
        // temp[4].stats = res.data.totalOperations;
        // temp[5].stats = res.data.totalCounterparties;
        // setSalesData(temp);
        // setStats(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  useEffect(() => {
    getRows();
  }, []);

  // age: 22,
  //     date: '12/03/2017',
  //     salary: '$12336.17',
  //     name: 'Rodney Sharp',
  //     status: 'professional',
  //     designation: 'Cost Accountant',
  //     email: 'dcrossman3@google.co.jp'



  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Sana</TableCell>
              <TableCell>Proyekt</TableCell>
              <TableCell>Kirim</TableCell>
              <TableCell>Chiqim</TableCell>
              <TableCell>Foyda</TableCell>
              <TableCell>Valyuta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.id}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{moment(new Date(row.date)).format('DD.MM.YYYY')}</TableCell>
                <TableCell>{row.projectTitle}</TableCell>
                <TableCell>{row.totalIncome}</TableCell>
                <TableCell>{row.totalOutcome}</TableCell>
                <TableCell>{row.pnl}</TableCell>
                <TableCell>
                  <Chip
                    label={row.currency}
                    color={row.currency==="UZS"?"primary":"warning"} 
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
