import { delBasePath } from "next/dist/shared/lib/router/router";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function CurrentSwell({ data }) {
  const { spot } = data;

  return (
    <>
      <Row className="current-swell__head-row">
        <Container
          style={{
            backgroundImage: `url(${spot.thumbnail}),`,
          }}
          className="current-swell__head-cont shadow-sm rounded"
        >
          <p className="current-swell__head">{spot.name}</p>
        </Container>
      </Row>
      <Row className="current-swell__cont">
        <Col md={6} classname="current-swell__report">
          <Container className="current-swell__report-cont">hello</Container>
        </Col>
        <Col md={6} classname="current-swell__swell">
          <Container className="current-swell__swell-cont">hello</Container>
        </Col>
      </Row>
    </>
  );
}

export default CurrentSwell;
