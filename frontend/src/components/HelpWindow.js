import React from 'react';

function HelpWindow({ closeWindow }) {
  return (
    <div style={{ 
      position: 'absolute', 
      top: '10%', 
      left: '10%', 
      width: '50%',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#EAEDDC',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 32,
      borderStyle: 'solid' ,
      padding: '20px', 
      boxSizing: 'border-box', 
      zIndex: '2' }}>
      <button onClick={closeWindow} 
      style={{
        position: 'absolute',
        right: '10px', 
        top: '10px' ,
        backgroundColor: '#EAEDDC',
        borderWidth: 0,
        }}>X</button>
      <span style={{fontSize: 24, textAlign: 'start', fontFamily: 'RobotoBold'}}>ajuda</span>
      <span style={{fontSize: 16, textAlign: 'start', marginTop: '32px', fontFamily: 'RobotoRegular'}}>
      Como faço para escolher o melhor bairro para morar?
      </span>
      <span style={{fontSize: 16, textAlign: 'start', marginTop: '32px', fontFamily: 'RobotoRegular'}}>
      A plataforma utiliza algoritmos avançados que influenciam os indivíduos dos usuários. Ela permite que usuários forneçam informações sobre seus interesses, necessidades e estilo de vida. Com base nesses dados, a plataforma compara e analisa diversas variáveis como infraestrutura, segurança, transporte comércio local, lazer, educação, entre outras, para recomendar os bairros mais adequados.
      </span>
    </div>
  )
}

export default HelpWindow;
