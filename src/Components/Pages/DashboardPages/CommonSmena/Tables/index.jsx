import React, {useEffect, useState} from 'react';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment/moment";
import Chip from "@mui/material/Chip";
import Card from '@mui/material/Card'
import TableContainer from "@mui/material/TableContainer";
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";
import {TableWrapper} from "../../Projects/Table/Table.style";

const Tables = () => {
    const [rows, setRows] = useState([]);

    function getRows() {
        ProjectsProvider.getShifts(null, null, 10, 0).then(
            (res) => {
                // console.log("shifts",res.data.data);
                const temp = [];

                if (res.data.data) {
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
                ;setRows(temp);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    useEffect(() => {
        getRows();
    }, []);

    return (
        <>
            <TableWrapper>
            <h3 className="title">Umumiy smena</h3>
                <table className="table table-borderless table-hover">
                    <thead>
                    <tr>
                        <th style={{minWidth: "5%"}}>ID</th>
                        <th style={{minWidth: "20%"}}>Sana</th>
                        <th style={{minWidth: "20%"}}>Proyekt</th>
                        <th style={{minWidth: "15%"}}>Kirim</th>
                        <th style={{minWidth: "15%"}}>Chiqim</th>
                        <th style={{minWidth: "15%"}}>Foyda</th>
                        <th style={{minWidth: "10%"}}>Valyuta</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map(row => (
                        <tr key={row.id}>
                            <td style={{minWidth: "5%"}} >{row.id}</td>
                            <td style={{minWidth: "20%"}} >{moment(new Date(row.date)).format('DD.MM.YYYY')}</td>
                            <td style={{minWidth: "20%"}} >{row.projectTitle}</td>
                            <td style={{minWidth: "15%"}} >{row.totalIncome}</td>
                            <td style={{minWidth: "15%"}} >{row.totalOutcome}</td>
                            <td style={{minWidth: "15%"}} >{row.pnl}</td>
                            <td style={{minWidth: "10%"}} >
                                <Chip
                                    label={row.currency}
                                    color={row.currency === "UZS" ? "primary" : "warning"}
                                    sx={{
                                        height: 24,
                                        fontSize: '0.75rem',
                                        textTransform: 'capitalize',
                                        '& .MuiChip-label': {fontWeight: 500}
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </TableWrapper>
        </>
    );
};

export default Tables;