import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Import des composants React
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios'; // Importation d'axios pour la communication avec l'API
// Import du style Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Import du style de l'application
import '../App.css';

// Déclaration du composant
function ClassDisplay(props) {


  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8090/ecoles/'+3+ '/classrooms') // appel de l'API avec l'identifiant de l'école
      .then(response => {
        setData(response.data); // mise à jour du state data avec les données de l'API
        console.log(response.data) // affichage des données dans la console
      })
      .catch(error => {
        console.log(error); // gestion des erreurs éventuelles
      });
  }, []);
    // Vérification que `props.items` est bien un tableau

    // Affichage des données dans un tableau
    return (
      <Container>
        <Row>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Niveau</th>
                <th scope="col">Effectif</th>
                <th scope="col"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Boucle pour afficher chaque élément du tableau */}
              {data.map((item) => (
                <tr>
                  <th scope="row" key={item.id}>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.level}</td>
                  <td>{item.size}</td>
                  <td>
                    <a className='btn btn-warning space' >Modifier</a>
                    <a className='btn btn-danger space' >Supprimer</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Row>
      </Container>
    );
  }
  
// Export du composant
export default  ClassDisplay;
