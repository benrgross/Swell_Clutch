import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import Results from "./Results";
import SearchSpotResults from "./SpotResults";

function SearchSpot() {
  const spotName = useRef();
  const [spot, setSpot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchSpot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(
        `/api/searchspots/${spotName.current.value}`
      );
      if (data.length < 1) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setSpot(data);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  return (
    <Container>
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
      <Results data={spot} />
    </Container>
  );
}

export default SearchSpot;
