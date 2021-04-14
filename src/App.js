import logo from './logo.svg';
import './App.css';
import Formulario from './views/formulario';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, makeStyles, Button, Typography, Paper, TextField } from '@material-ui/core';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Menú
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>

        <Formulario />

      </Container>
    </>
  );
}

export default App;
