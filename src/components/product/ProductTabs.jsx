// import * as React from 'react';
import { TabPanel, TabContext, TabList } from "@mui/lab";
import {Tab, Table, TableBody, TableCell, TableRow } from "@mui/material";
import styles from "./ProductTabs.module.scss";
import User from '../user/User';
import { parseISO, formatDistance } from "date-fns";
import { useState } from "react";

export default function ProductTabs({ text, bids=[] }) {

    bids = [
        {
        user: {
            avatar: "/images/avatar.png",
            name: "Cupcat NFT 1",
            verified: true,
        },
        amount: 300,
        date: "2023-03-22T05:29:23.382Z",
        },
        {
        user: {
            avatar: "/images/avatar.png",
            name: "Cupcat NFT 2",
            verified: true,
        },
        amount: 1050,
        date: "2023-03-22T06:29:23.382Z",
        },
        {
        user: {
            avatar: "/images/avatar.png",
            name: "Cupcat NFT 3",
            verified: true,
        },
        amount: 530,
        date: "2023-03-22T08:29:23.382Z",
        },
        {
        user: {
            avatar: "/images/avatar.png",
            name: "Cupcat NFT 4",
            verified: true,
        },
        amount: 15000,
        date: "2023-03-22T09:29:23.382Z",
        },
    ]

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <div className={styles["product-tabs"]}>
            <TabContext value={value}>
                <TabList onChange={handleChange}  aria-label="basic tabs example">
                    <Tab label={"Details"} value="1" className={styles["tab-details"]} />
                    <Tab label={"Bids"} value="2" className={styles["tab-bids"]} />
                </TabList>
                <TabPanel value="1">
                    {text}
                </TabPanel>
                <TabPanel value="2">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                {bids.map((row, i) => (
                                    <TableRow
                                    key={i}
                                    className={`styles[table-row-${i}] ${styles["table-row"]}`}
                                    >
                                        <TableCell>
                                            <User {...row.user} />
                                        </TableCell>
                                        <TableCell>
                                            {row.amount}
                                        </TableCell>
                                        <TableCell>
                                            {formatDistance(parseISO(row.date), Date.now())}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                </TabPanel>
            </TabContext>
        </div>
    );
}