import logo from './logo.svg';
import './App.css';
import { AppBar, Container, Grid, Toolbar, Paper, Typography, Button, IconButton, MenuIcon } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import StyledPaper from "./components/StyledPaper";

function App() {
  const theme = useTheme();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            Wellness Map
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sx={{marginTop:'20px'}}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <StyledPaper title='Segurança'></StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper title='Esporte e Lazer'></StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper title='Educação'></StyledPaper>
          </Grid>
        </Grid>
      </Grid>
     
    </div>
  );
}

export default App;
