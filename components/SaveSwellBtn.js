import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function SaveSwellBtn({ spot }) {
  const saveSwell = async () => {};
  return (
    <Row>
      <Col></Col>
      <Col md={4} sm={12} className="d-flex justify-content-center">
        <Button onClick={saveSwell} className="save-btn">
          Save Swell
        </Button>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default SaveSwellBtn;
