
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
import UpdateEcole from './compoments/updateecole';


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
      <Route path="/ecole/:id/addclasse/" element={<AddClass/>} />
      <Route path="/ecole/updateecole/:id" element={<UpdateEcole/>} />
  
    </Routes>
  </Router>
  </div>
  );
}

export default App;
