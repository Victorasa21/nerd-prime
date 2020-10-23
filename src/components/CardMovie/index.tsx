import React from 'react';

import { Card, Button } from 'react-bootstrap';
//Importa o CSS
import './styles.css'
//componente do card
const CardMovie: React.FC = () => {
  return (
    <Card className="movie-card">
      <Card.Link>
        <Card.Img
          className="fadeIn animated card-img-top"
          variant="top"
          src="https://avatars2.githubusercontent.com/u/42000522?s=460&u=5dfefd38b0a639067fa46dea2036b8bd6acc4790&v=4" />
      </Card.Link>
      <Card.Body className="card-body">
        <Card.Link>
          <Card.Text className="card-rating">5.0</Card.Text>
          <Card.Title className="mb-1 mr-4 card-title">Card Title</Card.Title>
          <Card.Text className="small mb-0">Genrer</Card.Text>
        </Card.Link>
      </Card.Body>

    </Card>
  );
};

export default CardMovie;
