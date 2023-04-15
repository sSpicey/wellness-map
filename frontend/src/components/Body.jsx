import React from 'react'
import { useEffect, useState } from 'react';

import imgSaude from '../img/saude.png';
import imgSeguranca from '../img/seguranca.png';
import imgCultura from '../img/cultura.png'; 

import axios from 'axios';

import { Grid, Paper, Button, ListItem, Slider, Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

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

function Body() {
  const [statefulRows, setStatefulRows] = useState([]);

  var securityWeigth = 5;
  var cultureWeigth = 5;
  var healthWeigth = 5;
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
        value = cultureWeigth;
      }
      else if(provider.tema === 'SAUDE'){
        value = healthWeigth;
      }
      if(provider.tema === 'EDUCACAO'){
        value = securityWeigth;
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
    healthWeigth = value.target.value;
  }

  function segurancaHandler(value){
    securityWeigth = value.target.value;
  }

  function culturaHandler(value){
    cultureWeigth = value.target.value;
  }

  function setDataSent(){
    isDataSent = true;
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/providers').then(response =>  setProviders(response.data));
  }, []);

  return (
    <div>
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
  )
}

export default Body