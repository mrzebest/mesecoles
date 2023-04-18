import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function AddEcole() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // empêche la page de se recharger
    const data = {
      name: name,
      address: address,
      contact: contact
    };

    console.log(data)
    axios.post('http://localhost:8090/ecoles', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        window.location.replace("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    // Ici, vous pouvez effectuer d'autres opérations lorsqu'un champ de formulaire change, par exemple :
    // if (name !== '') { ... }
    // if (address !== '') { ... }
    // if (contact !== '') { ... }
  }, [name, address, contact]);

  return (
    <Container className='corps'>
      <div>
        <h1>Ajouter des écoles</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className='formulaire-group' controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control name='name' type="text" placeholder="Entrez le nom " value={name} onChange={(event) => setName(event.target.value)} />
          </Form.Group>

          <Form.Group className='formulaire-group' controlId="formAddress">
            <Form.Label>Adresse</Form.Label>
            <Form.Control name='address' type="text" placeholder="Entrez l'adresse" value={address} onChange={(event) => setAddress(event.target.value)} />
          </Form.Group>

          <Form.Group className='formulaire-group' controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control name='contact' type="text" placeholder="Entrez le contact" value={contact} onChange={(event) => setContact(event.target.value)} />
          </Form.Group>

          <Button className="space" variant="outline-dark" type="submit">
            Soumettre
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default AddEcole;
