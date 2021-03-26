import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

function Formulario() {


    return (
        <>
            <Typography variant="h3" gutterBottom>
                Control de Acceso
            </Typography>

            <FormControl>
                <InputLabel htmlFor="rut">Rut</InputLabel>
                <Input id="rut" aria-describedby="my-helper-rut" />
                <FormHelperText id="my-helper-rut">Si el rut termina en (K), reemplácelo por un cero (0)</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="nombre">Nombre</InputLabel>
                <Input id="nombre" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="vehiculo">Vehículo</InputLabel>
                <Input id="vehiculo" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="temperatura">Temperatura</InputLabel>
                <Input id="temperatura" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="patente">Patente</InputLabel>
                <Input id="patente" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="observaciones">Observaciones</InputLabel>
                <Input
                    id="observaciones"
                    multiline
                    rows={4} />
            </FormControl>

            <Button variant="contained" color="primary">
                <SearchIcon />
                BUSCAR
            </Button>
        </>
    )


}

export default Formulario;