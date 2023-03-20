import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import {serviceData} from './serviceData/servicedata';

export default function MyCard(props) {
  console.log(serviceData[0]);
  return (
    <div className="col-lg-4 mt-5">
      <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
        <img className="card-img-top" src={serviceData[0].src} alt="Convert Clipart" />
        <div className="card-body">
          <h5 className="card-title">Convert</h5>
          <p className="card-text">
            Want to convert audio or text into Indian Sign Language?
            Then, you are in the right place! Provide your audio by
            speaking into your mic or type the text that you want to
            convert into ISL and within a few clicks watch the magic
            happen!
          </p>
        </div>
        <div className="card-footer p-0 m-0" style={{ border: "none" }}>
          <Link
            to="/sanvaad/convert"
            className="btn btn-info w-100 p-3"
            style={{ fontSize: "large" }}
          >
            EXPLORE NOW!
          </Link>
        </div>
      </div>
    </div>
  );
}