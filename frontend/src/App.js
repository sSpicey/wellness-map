import logo from './logo.svg';
import './App.css';
import { AppBar, Container, Grid, Toolbar, Paper, Typography, Button, IconButton, MenuIcon } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import StyledPaper from "./components/StyledPaper";
import StyledTable from "./components/StyledTable";
import SearchIcon from '@mui/icons-material/Search';


function App() {
  function isDataSent(){
    return true;
  }

  const theme = useTheme();
  return (
    <div className="App" >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            Perfil Estratégico de Exemplo para o Projeto de Bem Estar
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sx={{marginTop:'20px'}}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <StyledPaper title='Segurança'></StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper title='Cultura'></StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper title='Educação'></StyledPaper>
          </Grid>
        </Grid>
      </Grid>

      <Button variant="contained" endIcon={<SearchIcon />} sx={{marginTop:'20px'}}>
        Procurar
      </Button>
      {isDataSent() ? <StyledTable />: <h2>Naris</h2>}
     
    </div>
  );
}

export default App;
