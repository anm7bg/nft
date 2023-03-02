import * as React from 'react';
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { Box, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import styles from "./ProductTabs.module.scss";
import User from '../user/User';
import { parseISO, formatDistance } from "date-fns";

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

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const parse = require('date-fns/parse');


    return(
        <div className={styles["product-tabs"]}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}  aria-label="basic tabs example">
                        <Tab label="Details" value="1" className={styles["tab-details"]} />
                        <Tab label="Bids" value="2" className={styles["tab-bids"]} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    Details
                </TabPanel>
                <TabPanel value="2">
                    <TableContainer component="div">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bids.map((row, i) => (
                                    <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={styles[`table-row-${i}`]}
                                    // className={`table-row-${i} ${styles["table-row"]}`}
                                    >
                                        <TableCell component="th" scope="row">
                                            <User {...row.user} />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.amount}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {formatDistance(parseISO(row.date), Date.now())}
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </TabContext>
        </div>
    );
}