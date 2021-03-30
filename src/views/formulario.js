
import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Grid, makeStyles, Button, Typography, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';


function Formulario() {

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
    return (
        <>
            <Typography variant="h3" gutterBottom>
                Control de Acceso
            </Typography>
            <Grid container spacing={3} direction="row">
                {/* <form onSubmit={agregarAcceso}>

                    <Grid item xs={6} >
                        <FormControl>
                            <InputLabel htmlFor="run">RUN</InputLabel>
                            <Input id="run" name="run" aria-describedby="my-helper-run" onChange={valorInputs} />
                            <FormHelperText id="my-helper-run">Si el run termina en (K), reemplácelo por un cero (0)</FormHelperText>
                        </FormControl>

                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="nombre">Nombre</InputLabel>
                            <Input id="nombre" name="nombre" onChange={valorInputs} />
                        </FormControl>
                    </Grid>


                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="vehiculo">Vehículo</InputLabel>
                            <Input id="vehiculo" name="vehiculo" onChange={valorInputs} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="temperatura">Temperatura</InputLabel>
                            <Input id="temperatura" name="temperatura" onChange={valorInputs} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="patente">Patente</InputLabel>
                            <Input id="patente" name="patente" onChange={valorInputs} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="observaciones">Observaciones</InputLabel>
                            <Input
                                id="observaciones"
                                multiline
                                rows={4} onChange={valorInputs} name="observacion" />
                        </FormControl>


                    </Grid>

                    <Button type="submit" variant="contained" color="primary">
                        <SearchIcon />   BUSCAR

</Button>
                    <Button variant="contained" color="primary">
                        <DoneIcon />
                LISTO
                </Button>

                </form> */}



            </Grid>

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
                                onChange={valorInputs}
                            />
                        </FormControl>

                    </Grid>
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

                    {/* </form> */}
                </Grid>

            </div>
        </>
    )


}

export default Formulario;