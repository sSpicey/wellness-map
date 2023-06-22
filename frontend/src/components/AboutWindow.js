import React from 'react';

function AboutWindow({ closeWindow }) {
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
      <span style={{fontSize: 24, textAlign: 'start', fontFamily: 'RobotoBold'}}>sobre</span>
      <span style={{fontSize: 16, textAlign: 'start', marginTop: '32px', fontFamily: 'RobotoRegular'}}>
      o site se trata de uma ferramenta que agrega e apresenta dados que, processados, se tornam indicadores de qualidade de vida e bem-estar nas diferentes regiões da cidade de Curitiba. O mapa do bem-estar visa mapear e disponibilizar informações sobre as diferentes dimensões do bem-estar em uma cidade, tais como acessibilidade a serviços públicos e privados, qualidade ambiental (do ar e da água), conservação ambiental (presença, estado de conservação e tamanho de áreas verdes), segurança, lazer e cultura, dentre outros aspectos. A ferramenta busca, então, fornecer aos usuários dados possivelmente úteis para auxiliar nas tomadas de decisão relacionadas às escolhas de moradia, localização de empreendimentos, localização 
de investimentos em políticas públicas e privadas, e demais tomadas de decisão que busquem aumentar o nível de bem-estar da população. 
      </span>
    </div>
  )
}

export default AboutWindow;
