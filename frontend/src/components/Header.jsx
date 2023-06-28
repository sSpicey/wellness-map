import {useState, React}  from 'react'
import { AppBar, Toolbar, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import imgLogo from "../img/logo-figma1.png"
import AboutWindow from "./AboutWindow";
import HelpWindow from "./HelpWindow";

function Header({onAboutClick, onHelpClick, onHamburgerClick, showAbout, showHelp}) {
  const navigate = useNavigate();

  const onImageClick = () => {
    navigate('/');
  }

  return (
    <div>
        <AppBar position="static" sx={{ backgroundColor: '#EAEDDC', height: '70px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={imgLogo} onClick={onImageClick} alt="Logo" style={{margin: '5px',height: '60px', objectFit:'contain', marginBottom: '5px', marginLeft: '40px'}}/>
            <div style={{justifyContent: 'space-evenly', display: 'flex', marginRight: '40px'}}>
              <button 
                onClick={onAboutClick} 
                variant="contained" 
                style={{
                  backgroundColor: '#EAEDDC',
                  borderWidth: 0,
                  fontFamily: 'RobotoBold',
                  fontSize: 20,
                  marginRight: '20px'
                  }}>
                  sobre
              </button>
              <button 
                onClick={onHelpClick} 
                variant="contained" 
                style={{
                  backgroundColor: '#EAEDDC',
                  borderWidth: 0,
                  fontFamily: 'RobotoBold',
                  fontSize: 20,
                  marginRight: '40px',
                  }}>
                  ajuda
              </button>
              <MenuIcon
                onClick={onHamburgerClick}
                variant="contained" 
                style={{
                  backgroundColor: '#EAEDDC',
                  borderWidth: 0,
                  marginRight: '0px',
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      {showAbout && <AboutWindow closeWindow={onAboutClick}/>}
      {showHelp && <HelpWindow closeWindow={onHelpClick}/>}
    </div>
  )
}

export default Header