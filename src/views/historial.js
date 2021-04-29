import React, { useState, useCallback, useEffect } from 'react';
import { Grid, makeStyles, Button, Typography, Paper, TextField, Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import AcUnitIcon from '@material-ui/icons/AcUnit';


function Historial({ value, setValue }) {

    useEffect(() => {

    });

    const getHistorial = () => {

    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        titulo: {
            marginTop: 8
        },
        table: {
            minWidth: 650,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" gutterBottom className={classes.titulo}>
                Historial
        </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><AccountCircleIcon/></TableCell>
                            <TableCell align="center"><PersonIcon/></TableCell>
                            <TableCell align="center"><AcUnitIcon/></TableCell>
                            <TableCell align="center"><QueryBuilderIcon/></TableCell>
                            <TableCell align="center"><DriveEtaIcon/></TableCell>
                            <TableCell align="center"><FeaturedPlayListIcon/></TableCell>
                            <TableCell align="center"><AssignmentLateIcon/></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Fab color="primary" aria-label="add" value={value} onClick={() => setValue(1)}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default Historial;