import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Results from "./Results";
import { server } from "../config";
import SearchSpotResults from "./SpotResults";

function SearchSpot() {
  const spotName = useRef();
  const [spot, setSpot] = useState([]);
  const [viewSearch, setSearch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchSpot = async (e) => {
    e.preventDefault();
    const body = {
      spot: spotName.current.value,
    };
    setLoading(true);
    setError(false);
    console.log("spot out of try", spotName.current.value);
    try {
      console.log("spot", spotName.current.value);
      const { data } = await axios.post(`${server}/api/searchspots/spot`, body);
      console.log("data", data);
      if (data.length < 1) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setSpot(data);
        console.log(data);
        setSearch(false);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  return (
    <div>
      {viewSearch ? (
        <Row>
          <Col></Col>
          <Col md={6} sm={12}>
            <Container className="search__cont shadow-sm ">
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
          </Col>
          <Col></Col>
        </Row>
      ) : (
        ""
      )}

      <Results data={spot} />
    </div>
  );
}

export default SearchSpot;
