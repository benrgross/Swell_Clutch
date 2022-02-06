import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SpotResults from "./SpotResults";

function Results({ data }) {
  return (
    <Container className="spot__results-cont">
      <Row>
        <Col></Col>
        <Col sm={12} md={12}>
          <SpotResults data={data} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Results;
