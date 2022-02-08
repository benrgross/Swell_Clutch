import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Container, Row, Col } from "react-bootstrap";
import SearchSpot from "../components/SearchSpots";

function Search() {
  const { user } = useUser();

  return (
    <Container>
      <SearchSpot />
    </Container>
  );
}

export default Search;
