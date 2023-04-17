import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // import des composants de Bootstrap
import axios from 'axios'; // import du module axios
import 'bootstrap/dist/css/bootstrap.css'; // import de la feuille de style de Bootstrap
import '../App.css'; // import de la feuille de style de l'application
import ClassDisplay from './classdisplay'; // import du composant ClassDisplay
import { useParams } from 'react-router-dom'; // import du hook useParams pour récupérer les paramètres de l'URL

function InfoEcole() {
  const [data, setData] = useState([]); // initialisation d'un state data avec un tableau vide pour stocker les données
  const { id } = useParams(); // récupération du paramètre "id" de l'URL avec le hook useParams
 
  useEffect(() => {
    axios.get('http://localhost:8090/ecoles/'+id) // appel de l'API avec l'identifiant de l'école
      .then(response => {
        setData(response.data); // mise à jour du state data avec les données de l'API
        console.log(response.data) // affichage des données dans la console
      })
      .catch(error => {
        console.log(error); // gestion des erreurs éventuelles
      });
  }, []); // appel de l'API au chargement du composant
  const deleteEcole = (data) => {
    axios.delete(` http://localhost:8090/ecoles/${data.id}`).then(response => {
      window.location.replace("/");
    })
    .catch(error => {
      console.log(error); // gestion des erreurs éventuelles
    });
}
  
  return (
    <Container className='corps'> {/* Container principal de l'application */}
      <Row>
        <div className="card mb-3 card-form col-sm-11"  key={data.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://cdn-icons-png.flaticon.com/512/1606/1606814.png" class="card-img" alt="..."/> {/* Image de l'école */}
            </div>
            <div className="col-md-8">
              <div className="card-body details">
                <h1 className="card-title">{data.name}</h1> {/* Titre de l'école */}
                <p className="card-text details-1"><b>Adresse :</b> {data.address}</p> {/* Adresse de l'école */}
                <p className="card-text details-1"><b>Contact :</b> {data.contact}</p> {/* Contact de l'école */}
              </div>
            </div>
            <div className='card-footer'>
              <a className='btn btn-warning space' >Modifier</a> {/* Bouton de modification */}
              <Button onClick={() => deleteEcole(data)} className='btn btn-danger space' >Supprimer</Button> {/* Bouton de suppression */}
            </div>
          </div>
        </div>

        <ClassDisplay classrooms={data.classrooms}/> {/* Affichage des classes de l'école avec le composant ClassDisplay */}
      </Row>
    </Container>
  );
}

export default InfoEcole; // Export du composant InfoEcole
