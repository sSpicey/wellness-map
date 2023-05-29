import React from 'react'
import { AppBar, Toolbar, Input} from '@mui/material'
import imgLogo from "../img/logo-figma1.png"

function Header() {
  return (
    <div>
        <AppBar position="static" sx={{ backgroundColor: '#00534A', height: '50px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={imgLogo} alt="Logo" style={{margin: '5px',height: '28px', objectFit:'contain', marginBottom: '15px', marginLeft: '100px'}}/>
          <Input 
            placeholder="Search..." 
            sx={{ 
                borderRadius: '96px',
                fontSize: '0.7rem',
                lineHeight: '0.5rem',
                padding: '5px 12px',
                backgroundColor: '#EAEDDC',
                bottom: '5px',
                marginRight: '100px',
                width: '320px',
                height: '28px'
            }} 
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header