import React, { useState, useCallback } from 'react';
import { Grid, InputLabel, MenuItem, makeStyles, FormControl, Select, TextField, Paper,Button } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';
import InputIcon from '@material-ui/icons/Input';
function Login() {
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
            marginTop:10

        },
        botonLogin:{
            marginTop:10
        },
        iconLogin:{
            marginRight:4
        },
        titulo: {
            marginTop: 8
        },
        table: {
            minWidth: 650,
            marginTop: 20
        },
        formControl: {
            // margin: theme.spacing(1),
            // minWidth: 120,
            width: '100%'
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const [obra, setObra] = useState('');
    const cambioChangeObra = (event) => {
        setObra(event.target.value);
    };
    const [password, guardarPassword] = useState('');

    const iniciarSesion = () => {
        let data = new FormData();
        data.append('obra', obra);
        data.append('password', password);
        axios.post('https://grupohexxa.cl/controlacceso/APP/validarLogin.php', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <> <h1>Iniciar Sesión</h1>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
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
                <Grid item xs={12} lg={6}>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        name="password"
                        className={classes.formControl}
                        onChange={
                            event => {
                                let password = event.target.value
                                guardarPassword(password)
                            }
                        }
                    />
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Paper className={classes.paper}>
                    <FormControl fullWidth >
                        <Button variant="contained" className={classes.botonLogin} color="primary" onClick={() => iniciarSesion()}>
                            <InputIcon  className={classes.iconLogin}  />
                            ENTRAR
</Button>
                    </FormControl>
                </Paper>
            </Grid>
        </>

    )
}

export default Login;