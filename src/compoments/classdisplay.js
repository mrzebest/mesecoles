// Import des composants React
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import du style Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Import du style de l'application
import '../App.css';

// Déclaration du composant
function ClassDisplay(props) {
    // Vérification que `props.items` est bien un tableau
    if (!Array.isArray(props.classrooms)) {
        // Si ce n'est pas le cas, affichage d'un message d'erreur
        return <div>Erreur : la propriété items doit être un tableau.</div>;
      }

    // Récupération des données à afficher
    const data = props.classrooms;

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
              {props.classrooms.map((item) => (
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
