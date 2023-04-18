import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import Ecole from './ecole';
import Banner from './slide';


function Corps() {
  
    return (
    
        <div className='full-width'>
        <Banner/>
        <Container className='corps'>
          <div>
              <h1>Liste des écoles</h1>
          </div>
          <Ecole/>
        </Container>
      </div>
    );
  }
  
  
  export default Corps;