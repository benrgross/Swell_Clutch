import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h1>Dashboard</h1>
        </Col>
        <Col></Col>
        <Col>
          {" "}
          <div> / add account details</div>{" "}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <Search />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
