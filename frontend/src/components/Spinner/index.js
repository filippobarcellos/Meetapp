import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ size, color }) {
  return <ClipLoader size={size} color={color} />;
}

export default Spinner;
