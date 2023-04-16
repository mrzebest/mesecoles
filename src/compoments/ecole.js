import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



function Ecole() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8090/ecoles')
        .then(response => {
          setData(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    const cards = [
      {
        id: 1,
        title: 'Card 1',
        text: 'Description de la carte 1',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1606/1606814.png',
        buttonLabel: 'Voir plus'
      },
      {
        id: 2,
        title: 'Card 2',
        text: 'Description de la carte 2',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1606/1606814.png',
        buttonLabel: 'Voir plus'
      },
      {
        id: 3,
        title: 'Card 3',
        text: 'Description de la carte 3',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1606/1606814.png',
        buttonLabel: 'Voir plus'
      }
    ];
  
    return (
        

       
      <Container>
      <Row>
        {data.map((item) => (
          <Col md={4} key={item.id}>
            <Card>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/1606/1606814.png" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.address}</Card.Text>
                <Card.Text>{item.contact}</Card.Text>
                <Button variant='primary'>Voir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
    );
  }
  
  
  export default Ecole;