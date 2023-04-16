
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './compoments/header';
import Corps from './compoments/corps';
import AddEcole from './compoments/addecole';
import InfoEcole from './compoments/infoecole';
import AddClass from './compoments/addclass';
import Ecole from './compoments/ecole';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
    <Router>
      <Header/>
    <Routes>
     
      <Route path="/" element={<Corps />} />
      <Route path="/addecole" element={<AddEcole />} />
      <Route path="/addclass" element={<AddClass />} />
      <Route path="/ecole/:id" element={<InfoEcole/>} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
