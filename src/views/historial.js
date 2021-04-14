import React, { useState, useCallback } from 'react';
import { Grid, makeStyles, Button, Typography, Paper, TextField } from '@material-ui/core';

function Historial() {

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

    return (
        <Typography variant="h3" gutterBottom className={classes.titulo}>
            Historial
        </Typography>
    )
}

export default Historial;