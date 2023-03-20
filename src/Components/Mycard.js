import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';


const MyCard = (props) => {
  console.log(`./images/${props.title}.png`);
  return(
  <Card style={{width:"350px"}}>
    <CardImg top width="100%" src={require(`./images/${props.title}.png`)} alt='title' />
    <CardBody>
      <CardTitle tag="h5">{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardBody>
    <div className="card-footer p-0 m-0" style={{ border: "none" }}>
      <Link to={props.link} className="btn btn-info w-100 p-3" style={{ fontSize: "large" }}>
        EXPLORE NOW!
      </Link>
    </div>
  </Card>
  );
  };

export default MyCard;