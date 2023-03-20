import React from "react";
import { Link } from "react-router-dom";
import MyCard from "../MyCard";
import serviceData from "../serviceData/servicedata";


function Services(){
  return (
    <section id="services" style={{ marginTop: "-45px" }}>
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="h1 section-heading">Our Services</div>
            <div className="col-lg-4 divider my-2" />
            <div className="text-center normal-text">
              A comprehensive and aesthetic Indian Sign Language toolkit. A
              minimalist yet informative interface. Wide range of features
              containing different functionalities that are necessary to work
              with ISL. What else do you need anyway! We have everything wrapped
              up here! <br /> Dive into our diverse services and let us know
              about your experience!
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between" style={{marginTop:"20px"}} >
            {serviceData.map((data, index) => {
              return <MyCard key={index} link={data.link} title={data.title} text={data.text} src={data.src} />
            })}
        </div>
      </div>
    </section>
  );
}

export default Services;
