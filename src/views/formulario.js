import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Grid, makeStyles , Button , Typography } from '@material-ui/core';

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
    return (
        <>
            <h1>Control de Acceso</h1>
            <Grid container spacing={3} direction="row">
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
                        <Input id="nombre"  />
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel htmlFor="vehiculo">Vehículo</InputLabel>
                        <Input id="vehiculo" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel htmlFor="temperatura">Temperatura</InputLabel>
                        <Input id="temperatura" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel htmlFor="patente">Patente</InputLabel>
                        <Input id="patente" />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel htmlFor="observaciones">Observaciones</InputLabel>
                        <Input
                            id="observaciones"
                            multiline
                            rows={4} />
                    </FormControl>
                    <Button variant="contained" color="primary">
                        BUSCAR
            </Button>
                </Grid>
            </Grid>

        </>
    )


}

export default Formulario;