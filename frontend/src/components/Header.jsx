import React from 'react'
import { AppBar, Toolbar, Typography} from '@mui/material'

function Header() {
  return (
    <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            Wellness Map
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header