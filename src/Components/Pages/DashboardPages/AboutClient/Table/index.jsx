import React, {useEffect, useState} from 'react';
import Link from "next/link";
import MinLoader from "../../../../Common/MinLoader";
import {TableWrapper} from "./Table.style";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";

const Table = ({id}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        UserProvider.getOneClient(id)
            .then(({data}) => {
                console.log("data", data.cheques)
                setData(data.cheques)
            })
            .catch(err => {
                console.log(err);
                Message.serverError();
            }).finally(()=>{
                setLoading(false)
        })
    }, [])


    return (
        <TableWrapper>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th style={{
                        width: "15%",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        textAlign: "start"
                    }}
                        className="col">Sana
                    </th>
                    <th style={{width: "10%"}} className="col">Chek summa</th>
                    <th style={{width: "10%"}} className="col">To'langan ballar</th>
                    <th style={{width: "10%"}} className="col">Bonus</th>
                    <th style={{width: "15%"}} className="col">Kassir</th>
                    <th style={{width: "15%"}} className="col">Savdo nuqtasi</th>
                    <th style={{width: "10%"}} className="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    !loading ?
                        data.length
                            ?
                            data.map((obj, index) => (
                                <tr key={obj.id} className="edit_row">
                                    <td
                                        style={{
                                            width: "15%",
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            textAlign: "start",
                                            fontWeight: 500,
                                            fontFamily: "Inter"
                                        }}
                                        className="col">
                                        {index + 1}. {new Date(obj.date).toLocaleString("en-GB")}
                                    </td>
                                    <td style={{width: "10%", color: "#43A047", fontWeight: 600}} className="col">
                                        {obj.amount}
                                    </td>
                                    <td style={{width: "10%"}} className="col">{obj.paidPoints}</td>
                                    <td style={{width: "10%"}} className="col">{obj.giftedPoints}</td>
                                    <td style={{width: "15%", fontWeight: 600}} className="col">
                                        Telmonov Timur
                                    </td>
                                    <td style={{width: "15%", fontWeight: 600}} className="col">Zarangari Metan</td>
                                    {/*                <td style={{width: "10%"}} className="col">*/}
                                    {/*<span style={{background: "#43A047", color: "white", borderRadius: 5, padding: 10}}>*/}
                                    {/*  Muvaffaqiyatli*/}
                                    {/*</span>*/}
                                    {/*                </td>*/}
                                    {obj.type === "PAID_BY_MONEY" ?
                                        <td style={{width: "10%"}} className="col">
                    <span style={{background: "#43A047", color: "white", borderRadius: 5, padding: 10}}>
                      To'langan
                    </span>
                                        </td>
                                        : obj.type === "PAID_BY_POINTS" ?
                                            <td style={{width: "10%"}} className="col">
                    <span style={{background: "#FB8C00", color: "white", borderRadius: 5, padding: 10}}>
                      Ballar orqali
                    </span>
                                            </td>
                                            : obj.type === "PAID_POINTS" ?
                                                <td style={{width: "10%"}} className="col">
                    <span style={{background: "#3949AB", color: "white", borderRadius: 5, padding: 10}}>
                      Ballar chiqarilgan
                    </span>
                                                </td>
                                                : <td style={{width: "10%"}} className="col">
                    <span style={{background: "#E53935", color: "white", borderRadius: 5, padding: 10}}>
                      Qarzga
                    </span>
                                                </td>
                                    }
                                </tr>
                            )) : <div style={
                                {
                                    textAlign: "center",
                                    padding: 30,
                                }
                            }><h3>Ma'lumot mavjud emas!</h3></div>
                        : <MinLoader/>
                }
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default Table;