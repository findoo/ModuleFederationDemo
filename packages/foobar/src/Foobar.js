import React from "react";
import pkg from "../package.json";

export default () => (
  <div style={{ margin: "50px" }}>
    <h1>Foobar Version is {pkg.version}</h1>
  </div>
);
