import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

function Formulario() {


    return (
        <>
            <h1>Control de Acceso</h1>

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
                <InputLabel htmlFor="rut">Rut</InputLabel>
                <Input id="rut" aria-describedby="my-helper-rut" />
                <FormHelperText id="my-helper-rut">Si el rut termina en (K), reemplácelo por un cero (0)</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="rut">Rut</InputLabel>
                <Input id="rut" aria-describedby="my-helper-rut" />
                <FormHelperText id="my-helper-rut">Si el rut termina en (K), reemplácelo por un cero (0)</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="rut">Rut</InputLabel>
                <Input id="rut" aria-describedby="my-helper-rut" />
                <FormHelperText id="my-helper-rut">Si el rut termina en (K), reemplácelo por un cero (0)</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="rut">Rut</InputLabel>
                <Input id="rut" aria-describedby="my-helper-rut" />
                <FormHelperText id="my-helper-rut">Si el rut termina en (K), reemplácelo por un cero (0)</FormHelperText>
            </FormControl>
            
        </>
    )


}

export default Formulario;