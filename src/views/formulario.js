
import React, { useState, useCallback } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, makeStyles, Button, Typography, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import axios from 'axios';

function Formulario() {

    const [rut, guardarRut] = useState('');
    const [rutDisabled, setRutDisabled] = useState(false);

    const [nombre, guardarNombre] = useState('');
    const [nombreDisabled, setNombreDisabled] = useState(false);

    const [temperatura, guardarTemperatura] = useState('');
    const [vehiculo, guardarVehiculo] = useState('');
    const [patente, guardarPatente] = useState('');

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        titulo:{
            marginTop: 8
        }
    }));

    const classes = useStyles();

    const [datosForm, setDatosForm] = useState({
        run: '',
        nombre: '',
        vehiculo: '',
        temperatura: '',
        patente: '',
        observacion: ''
    })

    const { validarRUT } = require('validar-rut');

    // Detectar los cambios realizados en los input 

    const valorInputs = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name]: event.target.value
        })
    }

    const agregarAcceso = (event) => {
        event.preventDefault();
        console.log("DATOS" + JSON.stringify(datosForm));
    }

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const escaneoRut = (rutString) => {
        const rutInput = rutString.run;
        if (rutInput.length > 20) {
            const string = rutInput.split('=', 2)[1];
            const rut = string.split('&', 1)[0];
            guardarRut(rut);
            getUsuario(rut);
        } else {
            guardarRut(rutInput);
        }
    }

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        guardarRut({ ...rut, [name]: value });
        escaneoRut({ ...rut, [name]: value });
    });

    const buscarRut = () => {
        getUsuario(rut);
    }

    const getUsuario = (rut) => {
        console.log(rut)
        if (rut != '' && rut != 0 && validarRUT(rut)) {
            //setCargado(true);

            axios.get('https://grupohexxa.cl/controlacceso/APP/encontrarUsuario.php?run=' + rut)
                .then(response => {
                    console.log("RESPUESTA SERVER  " + JSON.stringify(response.data));
                    setMostrarFormulario(true);
                    setRutDisabled(true);
                    // setCargado(false);
                    var nombre = response.data.nombre;
                    var vehiculo = response.data.vehiculo;
                    var patente = response.data.patente;
                    guardarNombre(nombre);
                    guardarVehiculo(vehiculo);
                    guardarPatente(patente);

                    if (nombre != '') setNombreDisabled(true);
                })
                .catch(e => {
                    // Podemos mostrar los errores en la consola
                    console.log(e);
                    // guardarAlerta({ mostrar: true, titulo: "Error de Conexión" });
                    // setCargado(false);
                })
        } else {
            // guardarAlerta({ mostrar: true, titulo: "Rut Inválido" });
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
                                id="outlined-helperText"
                                label="RUN"
                                defaultValue=""
                                name="run"
                                helperText="Si el run termina en (K), reemplácelo por un cero (0)"
                                variant="outlined"
                                value={rut}
                                onChange={handleOnChange}
                                autoFocus={true}
                                disabled={rutDisabled}
                            />
                        </FormControl>

                    </Grid>
                    {mostrarFormulario ?
                        <>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField
                                        id="outlined-helperText"
                                        label="Nombre"
                                        value={nombre}
                                        name="nombre"
                                        variant="outlined"
                                        onChange={valorInputs}
                                        disabled={nombreDisabled}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Vehículo"
                                        value={vehiculo}
                                        name="vehiculo"
                                        variant="outlined"
                                        onChange={valorInputs}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField
                                        id="outlined-helperText"
                                        label="Temperatura"
                                        defaultValue=""
                                        name="temperatura"
                                        variant="outlined"
                                        onChange={valorInputs}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField
                                        id="outlined-helperText"
                                        label="Patente"
                                        value={patente}
                                        name="patente"
                                        variant="outlined"
                                        onChange={valorInputs}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth >
                                    <TextField
                                        id="outlined-helperText"
                                        label="Observacion"
                                        defaultValue=""
                                        name="observacion"
                                        variant="outlined"
                                        onChange={valorInputs}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <FormControl fullWidth >
                                        <Button type="submit" variant="contained" color="primary">
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

        </>
    )


}

export default Formulario;