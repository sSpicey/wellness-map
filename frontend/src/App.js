import logo from './logo.svg';
import './App.css';
import { AppBar, Container, Grid, Toolbar, Paper, Typography, Button, IconButton, MenuIcon, ListItem, Slider, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import StyledPaper from "./components/StyledPaper";
import StyledTable from "./components/StyledTable";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import imgSaude from './components/img/saude.png'; // with import
import imgSeguranca from './components/img/seguranca.png'; // with import
import imgCultura from './components/img/cultura.png'; // with import


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'bairro',
    headerName: 'Bairro',
    width: 200,
    editable: false,
  },
  {
    field: 'score',
    headerName: 'Score',
    type: Number,
    width: 150,
    editable: false,
  },
];

function App() {

  const rows = [
    { id: 1, bairro: 'Snow', score: 'Jon'}
  ];
  const [statefulRows, setStatefulRows] = useState([]);
  const theme = useTheme();

  var pesoSeguranca = 5;
  var pesoCultura = 5;
  var pesoSaude = 5;
  var isDataSent = true;

  const providers = [];
  
  function setProviders(data){
    data.forEach(object => {
      providers.push(object);
    });
  }

  function buttonHandler(){
    let bairros = [];
    
    var scores = new Array(47).fill(0);
    
    providers.forEach(provider => {
      const bairro = provider.bairro;
      if(!bairros.includes(bairro)){
        bairros.push(bairro);
      }
    });

    providers.forEach(provider =>{
      const bairro = provider.bairro;
      let value = 0;
      let index = 0;

      index = bairros.indexOf(bairro);

      if(provider.tema === 'CULTURA'){
        value = pesoCultura;
      }
      else if(provider.tema === 'SAUDE'){
        value = pesoSaude;
      }
      if(provider.tema === 'EDUCACAO'){
        value = pesoSeguranca;
      }
      
      scores[index] += value;
    });

    updateTable(bairros, scores);
  }

  function updateTable(bairros, scores){
    const rows = [];

    bairros.forEach((b, index) =>{
      let obj = {
        id: index,
        bairro: b,
        score: scores[index]
      };


      rows.push(JSON.parse(JSON.stringify(obj)));
    });

    setStatefulRows(statefulRows.concat(rows));
    setDataSent();
    
  }
  function saudeHandler(value){
    pesoSaude = value.target.value;
  }
  function segurancaHandler(value){
    pesoSeguranca = value.target.value;
  }
  function culturaHandler(value){
    pesoCultura = value.target.value;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function setDataSent(){
    isDataSent = true;
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/providers').then(response =>  setProviders(response.data));
  }, []);

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
            <Paper elevation={7}
              sx={{
              height: 300,
              width: 250}}>
              <ListItem divider align-items='center' sx={{backgroundColor:'#7ccfde', height:40}}>Educação</ListItem>
              <ListItem divider sx={{height:220}}> <img src={imgSeguranca} alt="logo" /></ListItem>
              <ListItem divider sx={{backgroundColor:'#7ccfde', height:40}}>
              <Slider
                  aria-label="Educacao"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={segurancaHandler}
                  min={1}
                  color='secondary'
                  max={10}
              />
              </ListItem>
            </Paper> 
          </Grid>
          <Grid item>
          <Paper elevation={7}
              sx={{
              height: 300,
              width: 250}}>
              <ListItem divider align-items='center' sx={{backgroundColor:'#7ccfde', height:40}}>Cultura</ListItem>
              <ListItem divider sx={{height:220}}> <img src={imgCultura} alt="logo" /></ListItem>
              <ListItem divider sx={{backgroundColor:'#7ccfde', height:40}}>
              <Slider
                  aria-label="Cultura"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  onChange={value => culturaHandler(value)}
                  step={1}
                  marks
                  min={1}
                  color='secondary'
                  max={10}
              />
              </ListItem>
            </Paper> 
          </Grid>
          <Grid item>
          <Paper elevation={7}
              sx={{
              height: 300,
              width: 250}}>
              <ListItem divider align-items='center' sx={{backgroundColor:'#7ccfde', height:40}}>Saúde</ListItem>
              <ListItem divider sx={{height:220}}> <img src={imgSaude} alt="logo" /></ListItem>
              <ListItem divider sx={{backgroundColor:'#7ccfde', height:40}}>
              <Slider
                  aria-label="Saude"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  step={1}
                  onChange={saudeHandler}
                  marks
                  min={1}
                  color='secondary'
                  max={10}
              />
              </ListItem>
            </Paper> 
          </Grid>
        </Grid>
      </Grid>

      <Button variant="contained" endIcon={<SearchIcon />} sx={{marginTop:'20px'}} onClick={buttonHandler}>
        Procurar
      </Button>

      {isDataSent ? <Box sx={{ height: 400, margin:'20px' }}>
      <DataGrid
        rows={statefulRows}
        columns={columns}
        pageSize={100}
        autoHeight={true}
        disableColumnFilter={true}
        hideFooter={true}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box> : <h2></h2>};
      
     
    </div>
  );
}

export default App;
