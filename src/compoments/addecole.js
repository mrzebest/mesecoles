import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


import '../App.css';



function AddEcole() {
  
    return (
        
    < Container className='corps'>
        <div>
            <h1>Ajouter des écoles</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center form">
      <Form>
        <Form.Group className='formulaire-group' controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre nom" />
        </Form.Group>

        <Form.Group className='formulaire-group' controlId="formAddress">
          <Form.Label>Adresse</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre adresse" />
        </Form.Group>

        <Form.Group className='formulaire-group'controlId="formContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre contact" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Soumettre
        </Button>
      </Form>
    </div>
    </Container>
    );
  }
  
  
  export default AddEcole;