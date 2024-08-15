import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import Cat1 from './pages/Cat1';
import Cat2 from './pages/Cat2';

import './App.css';
import Cat3 from "./pages/Cat3";


function App() {
  return (
      <Router>
        <div className="App">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cat1" element={<Cat1 />} />
              <Route path="/cat2" element={<Cat2 />} />
              <Route path="/cat3" element={<Cat3 />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
