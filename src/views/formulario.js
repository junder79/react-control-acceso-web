
import React, { useState, useCallback } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, makeStyles, Button, Typography, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';


function Formulario() {

    const [rut, guardarRut] = useState('');

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
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
        if(rutInput.length > 20){
            const string = rutInput.split('=', 2)[1];
            const rut = string.split('&', 1)[0];
            guardarRut(rut);
            //getUsuario(rut);
        }else{
            guardarRut(rutInput);
        }
        console.log(rut)
    }

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        guardarRut({ ...rut, [name]: value });
        escaneoRut({ ...rut, [name]: value });
      });

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Control de Acceso
            </Typography>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    {/* <form onSubmit={agregarAcceso}> */}
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
                                        defaultValue=""
                                        name="nombre"
                                        variant="outlined"
                                        onChange={valorInputs}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6}>

                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Vehìculo"
                                        defaultValue=""
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
                                        defaultValue=""
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
                                <Button type="submit" variant="contained" color="primary">
                                    <SearchIcon />
                                    BUSCAR
                                </Button>
                            </FormControl>
                   
                    </Grid> }

                </Grid>

            </div>
        </>
    )


}

export default Formulario;