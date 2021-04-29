import React, { useState, useCallback, useEffect } from 'react';
import { Grid, makeStyles, Button, Typography, Paper, TextField, Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

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
            marginTop: 20
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
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
    const [obra, setObra] = useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const cambioChangeObra = (event) => {
        setObra(event.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <Typography variant="h3" gutterBottom className={classes.titulo}>
                Historial
        </Typography>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Obra</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={obra}
                            onChange={cambioChangeObra}
                            label="Obra"
                        >
                            <MenuItem value="">- SELECCIONE OBRA -</MenuItem>
                            <MenuItem value={2}>ALTOS DE RUMIÉ</MenuItem>
                            <MenuItem value={1}>MAR DEL ESTE</MenuItem>

                        </Select>

                    </FormControl>
                </Grid>
                <Grid item xs={9}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container >

                            <KeyboardDatePicker

                                margin="normal"
                                id="date-picker-dialog"
                                label="Fecha"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                        </Grid>
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={1}>
                <Fab color="primary" aria-label="add" value={value} onClick={() => setValue(1)}>
                <AddIcon />
            </Fab>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><AccountCircleIcon /></TableCell>
                            <TableCell align="center"><PersonIcon /></TableCell>
                            <TableCell align="center"><AcUnitIcon /></TableCell>
                            <TableCell align="center"><QueryBuilderIcon /></TableCell>
                            <TableCell align="center"><DriveEtaIcon /></TableCell>
                            <TableCell align="center"><FeaturedPlayListIcon /></TableCell>
                            <TableCell align="center"><AssignmentLateIcon /></TableCell>
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
            
        </>
    )
}

export default Historial;