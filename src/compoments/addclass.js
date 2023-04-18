import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';



function AddClass() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [size, setSize] = useState('');
  const [ecole_id, setEcoleId] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); // empêche la page de se recharger
    const data = [{
      name: name,
      level: level,
      size: size,
      ecole_id: ecole_id
    }];

    console.log(data)
    axios.post('http://localhost:8090/classroms/'+id, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        window.location.replace('/ecole/'+id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  
    return (
        
    < Container className='corps'>
        <div>
            <h1>Ajouter des classes</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className='formulaire-group' controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control name='name' type="text" placeholder="Entrez votre nom" value={name} onChange={(event) => setName(event.target.value)}  />
        </Form.Group>

        <Form.Group className='formulaire-group' controlId="formAddress">
          <Form.Label>Niveau</Form.Label>
          <Form.Control name='level' type="text" placeholder="Entrez votre adresse" value={level} onChange={(event) => setLevel(event.target.value)} />
        </Form.Group>

        <Form.Group className='formulaire-group'controlId="formContact">
          <Form.Label>Effectif</Form.Label>
          <Form.Control name='size' type="text" placeholder="Entrez votre contact" value={size} onChange={(event) => setSize(event.target.value)} />
        </Form.Group>
        <Form.Control name='ecole_id' type="hidden" placeholder="Entrez votre contact" value={ecole_id} onChange={(event) => setEcoleId(event.target.value)}/>
        <Button className="space" variant="outline-dark"  type="submit">
          Soumettre
        </Button>
      </Form>
    </div>
    </Container>
    );
  }
  
  
  export default AddClass;