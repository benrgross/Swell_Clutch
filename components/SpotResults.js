import React, { useState } from "react";
import { Col } from "react-bootstrap";

function SearchSpotResults({ data }) {
  const [swell, setSwell] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSwell = async (e) => {
    setLoading(true);
    setError(false);
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
              data-spotId={spot.spotId}
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
