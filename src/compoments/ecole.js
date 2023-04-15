import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';


function Ecole() {
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
        

       
        <div className='card-group'>
            {cards.map((card) => (
            <Card className='border-0' key={card.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card.imageUrl} />
                <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">{card.buttonLabel}</Button>
                </Card.Body>
            </Card>
            ))}
        </div>
    
    );
  }
  
  
  export default Ecole;