import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="d-flex justify-content-center align-item-center w-100">
    <Spinner size="lg" color="primary" children="" />
  </div>
);

export default Loader;
