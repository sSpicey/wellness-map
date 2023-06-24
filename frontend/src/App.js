import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Body from "./components/Body";
import Homepage from './Homepage';
import FormPage from './FormPage';
import SearchPage from './SearchPage';
import { FormDataProvider } from './FormDataContext';

function App() {
  
  return (
    <div className="App" >
        <Router>
          <FormDataProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/form" element={<FormPage />} />
              <Route
                path="/main"
                element={
                  <>
                    <Header />
                    <Body />
                  </>
                }
              />
              <Route path='/search' element={<SearchPage/>}/>
            </Routes>
          </FormDataProvider>
        </Router>
      {/* <Header/>
      <Body/> */}
    </div>
  );
}

export default App;
