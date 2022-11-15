import logo from './logo.svg';
import './App.css';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, MenuIcon } from '@mui/material'

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wellness Map
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Container>
      
    </div>
  );
}

export default App;
