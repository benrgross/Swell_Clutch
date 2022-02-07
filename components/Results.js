import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SpotResults from "./SpotResults";

function Results({ data }) {
  return (
    <div className="spot__results-cont">
      <Row>
        <SpotResults data={data} />
      </Row>
    </div>
  );
}

export default Results;
