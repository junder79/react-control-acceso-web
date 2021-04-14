import React, { useState, useCallback } from 'react';
import { Grid, makeStyles, Button, Typography, Paper, TextField,Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function Historial({value,setValue}) {
   
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
        <>
            <Typography variant="h3" gutterBottom className={classes.titulo}>
                Historial
        </Typography>
            <Fab color="primary" aria-label="add" value={value} onClick={()=>setValue(1)}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default Historial;