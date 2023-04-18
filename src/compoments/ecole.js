import React, { useState, useEffect } from 'react'; // Importation de React, useState et useEffect
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Importation des composants React-Bootstrap
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Importation d'axios pour la communication avec l'API
import 'bootstrap/dist/css/bootstrap.css'; 
import imgSchool from '../assets/iconschool.jpg'; 

function Ecole() {

  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search); // Get the value of a specific query parameter
  const paramValue = 1

    const [data, setData] = useState([]); // Création d'un état local data initialisé à un tableau vide avec useState()
    const [page, setPage] = useState ([]); // Aller à la page suivante

    useEffect(() => { // Utilisation de useEffect pour effectuer une action après le rendu de la page
      axios.get('http://localhost:8090/ecoles?page='+paramValue) // Envoi d'une requête GET vers l'URL de l'API pour récupérer les données des écoles
        .then(response => {
          setData(response.data.content); // Mise à jour de l'état local data avec les données récupérées
          setPage(response.data.totalPages)
          console.log(response.data) // Affichage des données dans la console pour déboguer
        })
        .catch(error => {
          console.log(error); // Affichage de l'erreur dans la console en cas d'échec
        });
    }, []); // Le tableau vide en second argument de useEffect() permet de n'exécuter le code qu'une seule fois au chargement de la page
    

    return (
      <Container> 
      <Row> 
        {data.map((item) => ( // Utilisation de la méthode map() pour parcourir le tableau data et créer un composant Col pour chaque élément
        // Utilisation du composant Col pour créer une colonne de largeur moyenne (md=4) et avec une clé unique (key) égale à l'ID de l'école
          <Col md={4} key={item.id}> 
            <Card className='img-fluid'> 
              <Card.Img variant="top" src={imgSchool} style={{width: '40%', margin:'auto'}} /> 
              <Card.Body> 
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.address}</Card.Text>
                <Card.Text>{item.contact}</Card.Text> 
                <a className='btn btn-outline-dark space' href={"/ecole/"+item.id}>Voir plus</a> {/* Utilisation d'un lien pour afficher plus d'informations sur l'école au clic sur le bouton */}
              </Card.Body>
            </Card>
          </Col>
        ))}

        <a className='space' href={'/?page='+page}>Page suivante {'>>'} </a>
      </Row>
    </Container>
    );
  }

export default Ecole; 
