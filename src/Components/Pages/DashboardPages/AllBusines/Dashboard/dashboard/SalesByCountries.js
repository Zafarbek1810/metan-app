import React, { useEffect, useState } from "react";

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import TodoProvider from '../../../../../../Data/Providers/TodoProvider'
import moment from "moment";


function getRandomColor(){
  const colors = Array('error', 'warning', 'success', 'secondary');
  return colors[Math.floor(Math.random()*colors.length)];

}

const data = [
  {
    sales: '15 kun',
    subtitle: '14.01.2002',
    title: 'Ishlarni qilish',
    avatarText: 'Reja',

    avatarColor: 'success',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '15 kun',
    subtitle: '14.01.2002',
    title: 'Ishlarni qilish',
    avatarText: 'Reja',
    avatarColor: 'error',
    trend: <ChevronDown sx={{ color: 'error.main', fontWeight: 600 }} />
  },
  {
    sales: '15 kun',
    subtitle: '14.01.2002',
    title: 'Ishlarni qilish',
    avatarText: 'Reja',
    avatarColor: 'warning',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  },
  {
    sales: '15 kun',
    subtitle: '14.01.2002',
    title: 'Ishlarni qilish',
    avatarText: 'Reja',
    avatarColor: 'secondary',
    trend: <ChevronDown sx={{ color: 'error.main', fontWeight: 600 }} />
  },
  {
    sales: '15 kun',
    subtitle: '14.01.2002',
    title: 'Ishlarni qilish',
    avatarText: 'Reja',
    avatarColor: 'error',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  }
]

const SalesByCountries = () => {

  const [todos, setTodos] = useState([]);

  function getTodos(){
    TodoProvider.getTodoForDashboard(0, 5).then(res => {
        console.log("todos",res.data.data);
        setTodos(res.data.data);
    }, err => {
        console.log(err);
    })
  }

  useEffect(() => {
    getTodos();
}, [])

  return (
    <Card>
      <CardHeader
        title='Rejalar'
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        {todos.map((item, index) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 2.875 } : {})
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  marginRight: 3,
                  fontSize: '1rem',
                  color: 'common.white',
                  backgroundColor: `${getRandomColor()}.main`
                }}
              >
                {"Reja"}
              </Avatar>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px', lineHeight: 2, color: (new Date() > new Date(item.dueDate))?'red': 'green'   }}>{item.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                      <Typography
                        variant='caption'
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.5,
                          color: item.trendDir === 'down' ? 'error.main' : 'success.main'
                        }}
                      >
                        {/* {item.trendNumber | "Jamshid Yoqubov"} */}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                        variant='caption'
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.5,
                          color: item.trendDir === 'down' ? 'error.main' : 'success.main'
                        }}
                      >
                        Kontragent: {item.admin?.fullName ?? "Yo'q"}
                      </Typography>
                  <Typography variant='caption' sx={{ lineHeight: 1.5,fontWeight: 400}}>
                    {"Oxirgi muddat: " +moment(new Date(item.dueDate)).format('DD.MM.YYYY')}
                  </Typography> 
                </Box>

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                  
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px',
                    color: (new Date() > new Date(item.dueDate))?'red': 'green' }}>
                    { Math.abs(moment(item.dueDate).diff(moment(new Date()), 'days'))  + " kun"}
                  </Typography>
                  <Typography variant='caption' sx={{ lineHeight: 1.5, color: (new Date() > new Date(item.dueDate))?'red': 'green'  }}>
                    {(new Date() > new Date(item.dueDate))?"o'tib ketgan": 'qoldi'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default SalesByCountries
