import React, { useState, useCallback, useEffect } from 'react';
import { Grid, makeStyles, Button, Typography, Paper, TextField, Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Skeleton from '@material-ui/lab/Skeleton';
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

        const fechaFormato = formatDate(selectedDate);

        getHistorial(1, fechaFormato);

        console.log(datos);
    }, []);

    const getHistorial = (obra, fecha) => {
        console.log(fecha);
        setEstadoCarga(true);
        axios.get('https://grupohexxa.cl/controlacceso/APP/getControlAcceso.php?fecha=' + fecha + '&obra=' + obra)
            .then(function (response) {
                setDatos(response.data);
                setEstadoCarga(false);
                // setEstadoCargado(false);
                // setCantidadFilas(response.data.length);
            })
            .catch(function (error) {
                console.log(error);
                setEstadoCarga(false);
                // guardarAlerta({ mostrar: true, titulo: "Error de Conexión" });
                // setEstadoCargado(false);
            })
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,

        },
        rootEsqueleto: {
            width: '100%',
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

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        const fechaFormato = [year, month, day].join('-');

        return fechaFormato;
    }

    const classes = useStyles();
    const [obra, setObra] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datos, setDatos] = useState([]);
    const [estadoCarga, setEstadoCarga] = useState(false);
    const cambioChangeObra = (event) => {
        setObra(event.target.value);
    };

    const handleDateChange = (date) => {

        setSelectedDate(date);
        const fechaFormato = formatDate(date);

        getHistorial(1, fechaFormato);
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
                                format="dd/MM/yyyy"
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
            {
                estadoCarga ?
                    <div className={classes.rootEsqueleto}>
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div> : <TableContainer component={Paper}>
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
                                {datos.map((item) => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {item['nombre_usuario']}
                                        </TableCell>
                                        <TableCell align="center">{item['run']}</TableCell>
                                        <TableCell align="center">{item['temperatura'] + " °C"}</TableCell>
                                        <TableCell align="center">{item['hora']}</TableCell>
                                        <TableCell align="center">{item['vehiculo']}</TableCell>
                                        <TableCell align="center">{item['patente']}</TableCell>
                                        <TableCell align="center">{item['observacion']}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>


                        </Table>
                    </TableContainer>
            }


        </>
    )
}

export default Historial;