import React from "react";
import pkg from "../package.json";

export default () => (
  <div style={{ margin: "20px" }}>
    <h1>Button Version is {pkg.version}</h1>
  </div>
);
