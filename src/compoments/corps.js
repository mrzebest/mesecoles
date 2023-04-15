import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import Ecole from './ecole';


function Corps() {
  
    return (
        
    < Container className='corps'>
        <div>
            <h1>Liste des écoles</h1>
        </div>
        < Ecole/>
    </Container>
    );
  }
  
  
  export default Corps;