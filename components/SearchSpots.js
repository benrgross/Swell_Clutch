import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

function SearchSpot() {
  const spotName = useRef();
  const [spot, setSpot] = useState();

  const searchSpot = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `/api/searchspots/${spotName.current.value}`
    );

    console.log(data);
  };
  return (
    <Container className="search__cont">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label className="search__spot-label">
            Search Your Spot
          </Form.Label>
          <Form.Control
            ref={spotName}
            type="search"
            placeholder="enter a surf spot"
          />
          <Form.Text className="text-muted">
            Only spots on surfline can be searched
          </Form.Text>
        </Form.Group>
        <Button
          onClick={searchSpot}
          className="search__spot-btn"
          variant="primary"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchSpot;
