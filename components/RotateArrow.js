import React from "react";
import { FaArrowDown } from "react-icons/fa";

function RotateArrow({ deg }) {
  console.log(deg);
  return <FaArrowDown style={{ transform: `rotate(${deg.direction}deg)` }} />;
}

export default RotateArrow;
