import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import "./InfoCard.css";

const InfoCard = ({ title, text, children }) => {
  return (
    <Card className="h-100 border border-2 infocard">
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        {text ? <CardText>{text}</CardText> : children}
      </CardBody>
    </Card>
  );
};

InfoCard.defaultProps = {
  title: "",
  text: "",
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default InfoCard;
