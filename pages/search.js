import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Container, Row, Col } from "react-bootstrap";
import SearchSpot from "../components/SearchSpots";

function Search() {
  const { user } = useUser();

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col sm={12} md={6} className="dash__search-col">
          <SearchSpot />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Search;
