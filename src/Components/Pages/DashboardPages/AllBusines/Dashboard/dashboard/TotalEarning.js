// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

// ** Icons Imports
import MenuUp from "mdi-material-ui/MenuUp";
import DotsVertical from "mdi-material-ui/DotsVertical";
import { useEffect, useState } from "react";
import ProjectsProvider from "../../../../../../Data/Providers/ProjectsProvider";

function getRandomIcon() {
  const colors = Array(
    "/img/cards/logo-zipcar.png",
    "/img/cards/logo-bitbank.png",
    "/img/cards/logo-aviato.png"
  );
  return colors[Math.floor(Math.random() * colors.length)];
}


function getRandomNumber(){
  return Math.floor(Math.random() * (13 - 2 + 1) + 2)
}

function getRandomProgress(){
  return Math.floor(Math.random() * (100 - 0 + 1) + 0)
}

const TotalEarning = () => {
  const [totalPnl, setTotalPnl] = useState(0);

  const [data, setData] = useState([]);
  function getStats() {
    
    ProjectsProvider.getProjectsWithPnl().then(
      (res) => {
        console.log(res.data.data);
        const temp = [];
        let tempPnl = 0;
        res.data.data.forEach(element => {
          tempPnl += +(element.projectPnl ?? 0);
          temp.push({
              progress: getRandomProgress(),
              imgHeight: 20,
              title: element.projectTitle ?? "null",
              color: 'primary',
              amount: 'UZS ' + (element.projectPnl ?? -1).toLocaleString(),
              subtitle: 'Rentabellik: ' + getRandomNumber() + " %",
              imgSrc: getRandomIcon()
          })

        });

        setData(temp);
        setTotalPnl(tempPnl);
        // console.log("todos",res.data.data);
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
    getStats();
  }, []);

  return (
    <Card>
      <CardHeader
        title="Bizneslardan qoldiq"
        titleTypographyProps={{
          sx: {
            lineHeight: "1.6 !important",
            letterSpacing: "0.15px !important",
          },
        }}
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
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(2.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, fontSize: "2.125rem !important" }}
          >
            UZS {totalPnl.toLocaleString()}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "success.main",
            }}
          >
            <MenuUp sx={{ fontSize: "1.875rem", verticalAlign: "middle" }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "success.main" }}
            >
              10%
            </Typography>
          </Box>
        </Box>

        <Typography component="p" variant="caption" sx={{ mb: 10 }}>
          *Jami bizneslardagi qoldiq ko'rsatilgan
        </Typography>

        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                alignItems: "center",
                ...(index !== data.length - 1 ? { mb: 4.5 } : {}),
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: (theme) => `rgba(58, 53, 65, 0.04)`,
                }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  height={item.imgHeight}
                />
              </Avatar>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    marginRight: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ mb: 0.5, fontWeight: 600, color: "text.primary" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{
                          fontWeight: 600,
                          lineHeight: 1.5,
                          color:'green'
                        }} >{item.subtitle}</Typography>
                </Box>

                <Box
                  sx={{
                    minWidth: 85,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
                  >
                    {item.amount}
                  </Typography>
                  <LinearProgress
                    color={item.color}
                    value={item.progress}
                    variant="determinate"
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TotalEarning;
