import React, { useState } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";

function SearchSpotResults({ data }) {
  const [swell, setSwell] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSwell = async (e) => {
    setLoading(true);
    setError(false);
    try {
      const body = {
        spotId: e.target.getAttribute("data-spotid"),
      };
      const { data } = await axios.post("/api/getswell/currentswell", body);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Col sm={12} md={12}>
      {data ? (
        data.map((spot) => {
          return (
            <p
              onClick={getSwell}
              className="spot__result-link"
              key={spot.spotId}
              data-spotid={spot.spotId}
              data-api={spot.href}
            >
              {spot.name}
            </p>
          );
        })
      ) : (
        <p>search a spot to get started </p>
      )}
    </Col>
  );
}

export default SearchSpotResults;
