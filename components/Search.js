import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Search() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Search Your Spot</Form.Label>
          <Form.Control type="search" placeholder="enter a surf spot" />
          <Form.Text className="text-muted">
            Only spots on surfline can be searched
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Search;
