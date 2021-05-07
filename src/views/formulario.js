import React, { useState, useCallback } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, makeStyles, Button, Typography, Paper, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import axios from 'axios';

function Formulario({ setValue, open, setOpen, handleClickSuccess }) {

    const [rut, guardarRut] = useState('');
    const [rutDisabled, setRutDisabled] = useState(false);

    const [nombre, guardarNombre] = useState('');
    const [nombreDisabled, setNombreDisabled] = useState(false);
    const [temperatura, guardarTemperatura] = useState('');
    const [vehiculo, guardarVehiculo] = useState('');
    const [patente, guardarPatente] = useState('');
    const [observacion, guardarObservacion] = useState('');

    const [mensaje, setMensaje] = useState('');



    const [openError, setOpenError] = useState(false);


    const handleClickError = () => {
        setOpenError(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenError(false);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };

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
        }
    }));

    const classes = useStyles();



    const { validarRUT } = require('validar-rut');



    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const escaneoRut = (rutString) => {
        if (rutString.length > 20) {
            const string = rutString.split('=', 2)[1];
            const rut = string.split('&', 1)[0];
            guardarRut(rut);
            getUsuario(rut);

        } else {
            guardarRut(rutString);
        }
    }

    // const handleOnChange = useCallback(event => {
    //     const { name, value } = event.target;
    //     guardarRut({ ...rut, [name]: value });
    //     escaneoRut({ ...rut, [name]: value });
    // });

    const buscarRut = () => {
        getUsuario(rut);
    }

    const getUsuario = (rut) => {
        console.log(rut)
        if (rut != '' && rut != 0 && validarRUT(rut)) {

            axios.get('https://grupohexxa.cl/controlacceso/APP/encontrarUsuario.php?run=' + rut)
                .then(response => {
                    console.log("RESPUESTA SERVER  " + JSON.stringify(response.data));
                    setMostrarFormulario(true);
                    setRutDisabled(true);
                    // setCargado(false);
                    var nombre = response.data.nombre;
                    var vehiculo = response.data.vehiculo;
                    var patente = response.data.patente;


                    guardarVehiculo(vehiculo);
                    guardarPatente(patente);
                    guardarNombre(nombre);
                    if (nombre != '') setNombreDisabled(true);
                })
                .catch(function (error) {
                    console.log(error);
                    setMensaje('Error de conexión');
                    handleClickError();
                });

        } else {
            setMensaje('Rut inválido');
            handleClickError();
        }
    }

    const enviarFormulario = () => {
        // console.log(nombre + rut + observacion + patente + vehiculo + temperatura);
        let data = new FormData();
        data.append('run', rut);
        data.append('nombre', nombre);
        data.append('temperatura', temperatura);
        data.append('obra', 1);
        data.append('vehiculo', vehiculo);
        data.append('patente', patente);
        data.append('patente', patente);
        data.append('observaciones', observacion);
        axios.post('https://grupohexxa.cl/controlacceso/APP/registroAcceso.php', data)
            .then(function (response) {


                // route.params.getControlAcceso(obraSelected, fechaRuta);
                // navigation.navigate("Historial");
                // route.params.mostrarSnackbar();
                // setEstadoBoton(false);
                console.log(response);
                handleClickSuccess();
                setValue(0);
            })
            .catch(function (error) {
                console.log(error);
                setMensaje('Error de conexión');
                handleClickError();
                // setEstadoBoton(false);
                // guardarAlerta({ mostrar: true, titulo: "Error de Conexión" });
            });
    }
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            buscarRut();
        }
    }

    return (
        <>
            <Typography variant="h3" gutterBottom className={classes.titulo}>
                Control de Acceso
            </Typography>

            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={6}>

                        <FormControl fullWidth>

                            <TextField

                                label="RUN"
                                defaultValue=""
                                name="run"
                                helperText="Si el run termina en (K), reemplácelo por un cero (0)"
                                variant="outlined"
                                value={rut}
                                onChange={
                                    event => {
                                        let run = event.target.value
                                        escaneoRut(run)
                                    }
                                }
                                autoFocus={true}
                                disabled={rutDisabled}
                                onKeyDown={handleKeyDown}
                            />
                        </FormControl>

                    </Grid>
                    {mostrarFormulario ?
                        <>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField
                                        type="text"
                                        label="Nombre"
                                        value={nombre}
                                        disabled={rutDisabled}
                                        name="nombre"
                                        variant="outlined"
                                        onChange={
                                            event => {
                                                let nombre = event.target.value
                                                guardarNombre(nombre)
                                            }
                                        }

                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth>
                                    <TextField

                                        label="Vehículo"
                                        value={vehiculo}
                                        name="vehiculo"
                                        variant="outlined"
                                        onChange={
                                            event => {
                                                let vehiculo = event.target.value
                                                guardarVehiculo(vehiculo)
                                            }
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField

                                        label="Temperatura"
                                        defaultValue=""
                                        name="temperatura"
                                        variant="outlined"
                                        onChange={
                                            event => {
                                                let temperatura = event.target.value
                                                guardarTemperatura(temperatura)
                                            }
                                        }
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField

                                        label="Patente"
                                        value={patente}
                                        name="patente"
                                        variant="outlined"
                                        onChange={
                                            event => {
                                                let patente = event.target.value
                                                guardarPatente(patente)
                                            }
                                        }
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField

                                        label="Observacion"
                                        defaultValue=""
                                        name="observacion"
                                        variant="outlined"
                                        onChange={
                                            event => {
                                                let observacion = event.target.value
                                                guardarObservacion(observacion)
                                            }
                                        }
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <FormControl fullWidth >
                                        <Button type="submit" variant="contained" color="primary" onClick={() => enviarFormulario()}>
                                            <DoneIcon />
                                            LISTO
                                        </Button>
                                    </FormControl>
                                </Paper>
                            </Grid>


                        </>
                        : <Grid item xs={6}>

                            <FormControl fullWidth >
                                <Button type="submit" variant="contained" color="primary" onClick={() => buscarRut()}>
                                    <SearchIcon />
                                    BUSCAR
                                </Button>
                            </FormControl>

                        </Grid>}

                </Grid>

            </div>


            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error">
                    {mensaje}
                </Alert>
            </Snackbar>

        </>
    )


}

export default Formulario;