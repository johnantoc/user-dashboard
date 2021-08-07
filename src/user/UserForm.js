import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form } from "reactstrap";

import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import { sortByOptions } from "../utils/constants";

/**
 * @description - User Form component.
 *
 * @param {String} search - Search String.
 * @param {func} onChangeHandler - Change Handler function.
 * @param {String} sortBy - Sort By String.
 * @param {func} onDropDownSelect - Select Handler function.
 *
 * @returns {ReactComponentElement} - Returns User Form.
 */
const UserForm = ({ search, onChangeHandler, sortBy, onDropDownSelect }) => (
  <Form>
    <Container>
      <Row>
        <Col
          xs={12}
          sm={4}
          md={6}
          className="justify-content-center align-item-center"
        >
          <div className="h-100 ps-0 d-flex align-items-center">
            <span className="fs-2 fw-bold">Users</span>
          </div>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <TextInput
            name="search"
            label="Search"
            value={search}
            onChangeHandler={onChangeHandler}
          />
        </Col>
        <Col xs={12} sm={4} md={3}>
          <SelectInput
            name="sortby"
            label="Sort By"
            value={sortBy}
            options={sortByOptions}
            onChangeHandler={onDropDownSelect}
          />
        </Col>
      </Row>
    </Container>
  </Form>
);

UserForm.defaultProps = {
  search: "",
  sortBy: "Name",
};

UserForm.propTypes = {
  search: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onDropDownSelect: PropTypes.func.isRequired,
};

export default UserForm;
