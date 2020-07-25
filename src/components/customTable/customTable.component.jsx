

/*
Currently using Material UI component
Will be updating this once I receive the API and
will be making this a reusuable component like the button
in the Component Folder.
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CustomButton from "../CustomButton/customButton.component";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(name, itemName, Quantity, chef, status, action,price) {
    return {
        name,
        itemName,
        Quantity,
        chef,
        status,
        action,
        price,
        history: [
            { date: 'SubORD0001', customerId: '1', amount: 'Complete', chef: 'Monica' },
            { date: 'SubORD0002', customerId: '2', amount: 'WIP' },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.itemName}</TableCell>
                <TableCell align="right">{row.Quantity}</TableCell>
                <TableCell align="right">{row.chef}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.action}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h5" gutterBottom component="div">
                                Items
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Sub-Orders</strong></TableCell>
                                        <TableCell><strong>Quantity</strong></TableCell>
                                        <TableCell align="right"><strong>Status</strong></TableCell>
                                        <TableCell align="right"><strong>Chef</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">{historyRow.chef}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        itemName: PropTypes.string.isRequired,
        chef: PropTypes.string.isRequired,
        Quantity: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.any.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.any.isRequired,
    }).isRequired,
};


const orderButton = <h4 style={{cursor:'pointer'}} onClick={console.log('Marked as Complete')}>Done</h4>


const rows = [
    createData('ORD072501', 'Chicken Pizza', 1, 'Ross', 'WIP',orderButton),
    createData('ORD072502', 'Veg Pizza', 2, 'Joey', 'Complete', orderButton),
    createData('ORD072503', 'Sandwich', 4,  'Rachel', 'Complete', orderButton),
    createData('ORD072504', 'Chicken Pizza', 3, 'Ross', 'WIP', orderButton),
    createData('ORD072505', 'Soda', 6, 'Rachel', 'Complete', orderButton),
];

export default function CustomTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell><strong>OrderId</strong></TableCell>
                        <TableCell align="right"><strong>Item Name</strong></TableCell>
                        <TableCell align="right"><strong>Quantity</strong></TableCell>
                        <TableCell align="right"><strong>Chef&nbsp;</strong></TableCell>
                        <TableCell align="right"><strong>Status&nbsp;</strong></TableCell>
                        <TableCell align='right'><strong>Action</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
