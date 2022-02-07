import { delBasePath } from "next/dist/shared/lib/router/router";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function CurrentSwell({ data }) {
  const { spot } = data;

  return (
    <>
      <Row>
        <Container className="current-swell__head-cont">
          <h1>{spot.name}</h1>
        </Container>
      </Row>
      <Row className="current-swell__cont">
        <Col md={6} classname="current-swell__report">
          <Container className="current-swell__report-cont"></Container>
        </Col>
        <Col md={6} classname="current-swell__swell">
          <Container className="current-swell__swell-cont"></Container>
        </Col>
      </Row>
      ;
    </>
  );
}

export default CurrentSwell;
