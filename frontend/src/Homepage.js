import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";
import RightSideWindow from "./components/RightSideWindow";
import AboutWindow from "./components/AboutWindow";
import HelpWindow from "./components/HelpWindow";

import imgMap from "./img/map-google.png"


function Homepage() {
  const navigate = useNavigate();

  const [showRightSideWindow, setShowRightSideWindow] = useState(false);

  const [showAboutWindow, setShowAboutWindow] = useState(false);
  const [showHelpWindow, setShowHelpWindow] = useState(false);

  const handleMainClick = () => {
    navigate('/main');
  };

  const handleFormClick = () => {
    navigate('/form');
  };

  const handleRightSideWindowClick = () => {
    setShowRightSideWindow(!showRightSideWindow);
  };

  const handleAboutWindowClick = () => {
    setShowAboutWindow(!showAboutWindow);
  };

  const handleHelpWindowClick = () => {
    setShowHelpWindow(!showHelpWindow);
  };

  return (
    <div style={{
      // backgroundImage: `url(${imgMap})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      // justifyContent: 'center',
      // alignItems: 'center'
    }}>
        <Header onAboutClick={handleAboutWindowClick} onHelpClick={handleHelpWindowClick} showAbout={showAboutWindow} showHelp={showHelpWindow} />
        {/* <h1>Welcome to the Homepage!</h1> */}
        {/* <button onClick={handleMainClick}>Go to Main Page</button>
        <br />
        <button onClick={handleFormClick}>Go to Form Page</button> */}

        <button 
          onClick={handleRightSideWindowClick} 
          style={{
            position: 'absolute', // Position it absolute...
            bottom: '80px', // ...at the bottom right corner
            right: '120px',
            borderRadius: '96px',
            paddingTop: '1px',
            paddingBottom: '1px',
            paddingRight: '16px',
            paddingLeft: '16px',
            border: '0px',
            backgroundColor: '#00534A',
          }}
        >
          <p style={{color: 'white', }}>busca personalizada</p>
        </button>
        

        {/* Conditional rendering of the right side window */}
        {showRightSideWindow && <RightSideWindow closeWindow={handleRightSideWindowClick}/>}
    </div>
  );
}

export default Homepage;
