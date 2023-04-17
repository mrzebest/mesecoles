import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function UpdateEcole() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      address: address,
      contact: contact
    };
    console.log(data)
    axios.patch(`http://localhost:8090/ecoles/${id}`, JSON.stringify(data), {
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
    axios.get(`http://localhost:8090/ecoles/${id}`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container className='corps'>
      <div>
        <h1>Modifier des écoles</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className='formulaire-group' controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control name='name' type="text" placeholder={`${data.name}`} value={name} onChange={(event) => setName(event.target.value)} />
          </Form.Group>

          <Form.Group className='formulaire-group' controlId="formAddress">
            <Form.Label>Adresse</Form.Label>
            <Form.Control name='address' type="text" placeholder={`(${data.address})`} value={address} onChange={(event) => setAddress(event.target.value)} />
          </Form.Group>

          <Form.Group className='formulaire-group' controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control name='contact' type="text" placeholder={` (${data.contact})`} value={contact} onChange={(event) => setContact(event.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Soumettre
          </Button>
        </Form>
      </div>

    </Container>
  );
}

export default UpdateEcole;
