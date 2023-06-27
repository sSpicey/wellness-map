import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Map from './components/Map';

function SearchPage() {
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
    <div>
      <Header
        onAboutClick={handleAboutWindowClick}
        onHelpClick={handleHelpWindowClick}
        onHamburgerClick={handleRightSideWindowClick}
        showAbout={showAboutWindow}
        showHelp={showHelpWindow}
      />

      <Map />
    </div>
  );
}

export default SearchPage;
