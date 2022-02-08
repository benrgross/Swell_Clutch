import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TideDirection from "./TideDirection";
import RotateArrow from "./RotateArrow";
import ConvertTimeStamp from "./ConvertTimeStamp";
import BuoySwells from "./BuoySwells";
import SpotHeader from "./SpotHeader";
import CurrentSwellCont from "./CurrentSwellCont";
import SaveSwellBtn from "./SaveSwellBtn";

function CurrentSwell({ data }) {
  const { spot } = data;
  console.log(spot.tide.current.type);

  return (
    <>
      <SpotHeader spot={spot} />
      <CurrentSwellCont spot={spot} />
      <SaveSwellBtn spot={spot} />
    </>
  );
}

export default CurrentSwell;
