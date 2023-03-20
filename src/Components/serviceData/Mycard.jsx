import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function MyCard(props) {
  return (
    <Link to={props.link} className="btn btn-primary" >
      <Card style={{backgroundColor:"red"}}>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <Button>explore</Button>
        </CardBody>
      </Card>
    </Link>
  );
}