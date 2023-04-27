import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";

function Homepage() {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate('/main');
  };

  const handleFormClick = () => {
    navigate('/form');
  };

  return (
    <div>
        <Header />
        <h1>Welcome to the Homepage!</h1>
        <button onClick={handleMainClick}>Go to Main Page</button>
        <br />
        <button onClick={handleFormClick}>Go to Form Page</button>
    </div>
  );
}

export default Homepage;
