import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import "./ListItem.css";

/**
 * @description - List Item component.
 *
 * @param {String} image - Image String.
 * @param {String} alt - Image alt String.
 * @param {String} name - Name String.
 * @param {String} username - Username String.
 * @param {String} email - Email String.
 * @param {String} bg - Background color String.
 *
 * @returns {ReactComponentElement} - Returns ListItem.
 */
const ListItem = ({ image, id, alt, name, username, email, onClick, bg }) => (
  <Container
    className="border border-bottom-0 border-secondary list-item"
    style={{ backgroundColor: bg }}
    role="button"
    tabIndex="0"
    onClick={() => onClick(id)}
  >
    <Row className="p-3 p-3 justify-content-start align-items-center">
      <Col xs={5} className="justify-content-center avatar rounded-circle">
        {image ? <img src={image} alt={alt} className="w-100 h-100" /> : null}
      </Col>
      <Col xs={7} className="ps-3 pe-3 flex-grow-1">
        <Row>
          <Col xs={12} sm={6}>
            <div>{name}</div>
            <div>{username}</div>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="ps-sm-3 pe-sm-3 align-self-center text-info text-start text-sm-end"
          >
            <a
              href={`mailto:${email}`}
              className="text-decoration-none"
              onClick={(ev) => {
                ev.stopPropagation();
                return true;
              }}
            >
              {email}
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

ListItem.defaultProps = {
  image: "",
  alt: "Avatar",
  bg: "#fff",
  onClick: () => null,
  id: null,
  name: "",
  username: "",
  email: "",
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ListItem;
