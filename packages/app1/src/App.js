import React from "react";
import pkg from "../package.json";

const Button = React.lazy(() => import("components/Button"));
const Foobar = React.lazy(() => import("foobar/Foobar"));

export default () => (
  <div style={{ margin: "20px" }}>
    <h1>App Version is {pkg.version}</h1>

    <React.Suspense fallback="Loading button">
      <Button />
    </React.Suspense>

    <React.Suspense fallback="Loading foobar">
      <Foobar />
    </React.Suspense>
  </div>
);
