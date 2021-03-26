
import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Grid, makeStyles, Button, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Formulario() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }));

    const classes = useStyles();


    // Detectar los cambios realizados en los input 

    const valorInputs = (event) => {
        setDatoForm({
            ...datosForm,
            [event.target.name]: event.target.value
        })
    }

    const agregarAcceso = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <Typography variant="h3" gutterBottom>
                Control de Acceso
            </Typography>
            <Grid container spacing={3} direction="row">
                <Form onSubmit={agregarAcceso}>

                    <Grid item xs={6} >
                        <FormControl>
                            <InputLabel htmlFor="rut">Rut</InputLabel>
                            <Input id="rut" aria-describedby="my-helper-rut" />
                            {/* <FormHelperText id="my-helper-rut">Si el rut termina en (K), reemplácelo por un cero (0)</FormHelperText> */}
                        </FormControl>

                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="nombre">Nombre</InputLabel>
                            <Input id="nombre" onChange={valorInputs} />
                        </FormControl>
                    </Grid>


                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="vehiculo">Vehículo</InputLabel>
                            <Input id="vehiculo" onChange={valorInputs} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="temperatura">Temperatura</InputLabel>
                            <Input id="temperatura" onChange={valorInputs} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="patente">Patente</InputLabel>
                            <Input id="patente" onChange={valorInputs} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel htmlFor="observaciones">Observaciones</InputLabel>
                            <Input
                                id="observaciones"
                                multiline
                                rows={4} onChange={valorInputs} />
                        </FormControl>


                    </Grid>

                    <Button variant="contained" color="primary">
                        <SearchIcon />   BUSCAR

</Button>


                </Form>

            </Grid>


        </>
    )


}

export default Formulario;