import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import TideDirection from "./TideDirection";
import RotateArrow from "./RotateArrow";

function CurrentSwell({ data }) {
  const { spot } = data;
  console.log(spot.tide.current.type);

  function tideDirection(tide) {
    if (tide) {
      if (tide.current.type === "NORMAL" && tide.next.type === "LOW")
        return <FaArrowDown />;

      if (tide.current.type === "NORMAL" && tide.next.type === "HIGH")
        return <FaArrowUp />;

      if (tide.current.type === "HIGH") return <FaArrowDown />;
      if (tide.current.type === "LOW") return <FaArrowUp />;
    } else return "";
  }

  return (
    <>
      <Row className="current-swell__head-row">
        <Container
          style={{ backgroundImage: `url(${spot.thumbnail})` }}
          className="current-swell__head-cont shadow-sm rounded"
        >
          <p className="current-swell__head">{spot.name}</p>
        </Container>
      </Row>
      <Row className="current-swell__cont">
        <Col md={6} className="current-swell__report">
          <Container className="current-swell__report-cont rounded">
            <Row>
              <div className="d-flex justify-content-center current-swell__report-header-cont">
                <h4 className="current-swell__report-header">
                  Surfline Report{" "}
                </h4>
              </div>
            </Row>
            <Row>
              <div className="d-flex justify-content-center">
                <h6>{spot.conditions.value}</h6>
              </div>
            </Row>
            <Row>
              <Col md={4} className="current-swell__waveHeight-col">
                <Row>
                  <div className="current-swell__waveHeight-desc">
                    Wave Height
                  </div>
                </Row>
                <Row>
                  <div className="current-swell__waveHeight">
                    {spot.waveHeight.min} - {spot.waveHeight.max}ft{" "}
                    {spot.waveHeight.occasional > 0
                      ? `w/ occ ${spot.waveHeight.occasional}ft`
                      : ""}
                  </div>
                </Row>
                <Row>
                  <div className="current-swell__humanRelation">
                    {spot.waveHeight.humanRelation}{" "}
                  </div>
                </Row>
              </Col>
              <Col md={4} className="current-swell__waveHeight-col">
                <Row>
                  <div className="current-swell__waveHeight-desc">Tide</div>
                </Row>
                <Row>
                  <div className="current-swell__waveHeight">
                    {spot.tide.current.height.toFixed(1)} ft{" "}
                    <TideDirection tide={spot.tide} />
                  </div>
                </Row>
              </Col>
              <Col md={4}>
                <RotateArrow deg={spot.wind} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={6} className="current-swell__swell">
          <Container className="current-swell__swell-cont">hello</Container>
        </Col>
      </Row>
    </>
  );
}

export default CurrentSwell;
