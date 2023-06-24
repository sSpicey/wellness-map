import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";
import RightSideWindow from "./components/RightSideWindow";

function Homepage() {
  const navigate = useNavigate();

  const [showRightSideWindow, setShowRightSideWindow] = useState(true);

  const [showAboutWindow, setShowAboutWindow] = useState(false);
  const [showHelpWindow, setShowHelpWindow] = useState(false);

  const handleMainClick = () => {
    navigate('/main');
  };

  const handleFormClick = () => {
    navigate('/form');
  };

  const handleSearch = () => {
    navigate('/search');
  }

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
        <Header 
          onAboutClick={handleAboutWindowClick} 
          onHelpClick={handleHelpWindowClick} 
          onHamburgerClick={handleRightSideWindowClick}
          showAbout={showAboutWindow} 
          showHelp={showHelpWindow} />
        {showRightSideWindow && <RightSideWindow closeWindow={handleRightSideWindowClick} handleSearch={handleSearch}/>}
    </div>
  );
}

export default Homepage;
