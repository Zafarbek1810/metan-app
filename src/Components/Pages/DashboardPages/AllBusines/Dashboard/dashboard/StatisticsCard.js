// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import TrendingUp from "mdi-material-ui/TrendingUp";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CellphoneLink from "mdi-material-ui/CellphoneLink";
import AccountOutline from "mdi-material-ui/AccountOutline";
import UserProvider from "../../../../../../Data/Providers/UserProvider";
import { useEffect, useState } from "react";

const renderStats = () => {
  const [salesData, setSalesData] = useState([
    {
      stats: "-1",
      title: "Rejalar",
      color: "primary",
      icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "-1",
      title: "Mijozlar",
      color: "success",
      icon: <AccountOutline sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "6 ta",
      color: "warning",
      title: "Bizneslar",
      icon: <CellphoneLink sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "16 ta",
      color: "info",
      title: "Budjetlar",
      icon: <CurrencyUsd sx={{ fontSize: "1.75rem" }} />,
    },{
      stats: "-1",
      title: "Operatsiyalar",
      color: "primary",
      icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "-1",
      title: "Kontragentlar",
      color: "success",
      icon: <AccountOutline sx={{ fontSize: "1.75rem" }} />,
    },
  ]);

  const [stats, setStats] = useState({
    totalClients: -1,
    totalProjects: -1,
    totalBudgets: -1,
    totalOperations: -1,
    totalTodos: -1,
    totalCounterparties: -1,
  });

  function getStats() {
    UserProvider.getDashboardCounterStatistics().then(
      (res) => {
        // console.log("todos",res.data.data);
        console.log("counter statistics", res.data);
        const temp = [...salesData];
        temp[0].stats = res.data.totalTodos;
        temp[1].stats = res.data.totalClients;
        temp[2].stats = res.data.totalProjects;
        temp[3].stats = res.data.totalBudgets;
        temp[4].stats = res.data.totalOperations;
        temp[5].stats = res.data.totalCounterparties;
        setSalesData(temp);
        // setStats(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  useEffect(() => {
    getStats();
  }, []);

  return salesData.map((item, index) => (
    <Grid item xs={12} sm={2} key={index}>
      <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 1,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}.main`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const StatisticsCard = () => {
  

  return (
    <Card>
      <CardHeader
        title="Barcha bizneslarning statistikasi"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Oxirgi oylik o'sish: 12%
            </Box>{" "}
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
