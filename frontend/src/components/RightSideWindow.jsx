import React from 'react'

function RightSideWindow({ closeWindow }) {
  return (
    <div style={{
      position: 'fixed', 
      right: '0', 
      top: '0',
      width: '25%',
      height: '100vh',
      backgroundColor: '#009988',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      transition: '1s', // Adjust as needed
    }}>
      <input type="text" placeholder="Input 1" style={{ margin: '10px', width: '80%' }}/>
      <input type="text" placeholder="Input 2" style={{ margin: '10px', width: '80%' }}/>
      <button 
        onClick={closeWindow} 
        style={{ 
          margin: '10px',
          alignSelf: 'flex-end',
          borderRadius: '96px',
          paddingTop: '5px',
          paddingBottom: '5px',
          paddingRight: '20px',
          paddingLeft: '20px',
          border: '0px',
          backgroundColor: '#B3D7D5',
         }}
      >
        Fechar
      </button>
      
    </div>
  );
}

export default RightSideWindow