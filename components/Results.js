import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SpotResults from "./SpotResults";

function Results({ data }) {
  return (
    <div className="spot__results-cont">
      <SpotResults data={data} />
    </div>
  );
}

export default Results;
