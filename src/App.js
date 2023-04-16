
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './compoments/header';
import Corps from './compoments/corps';
import AddEcole from './compoments/addecole';


function App() {
  return (
    <div className="App">
       <Header />
       <AddEcole/>
    </div>
  );
}

export default App;
