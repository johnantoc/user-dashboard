import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

const TextInput = ({ name, label, size = "lg", value, onChangeHandler }) => {
  return (
    <FormGroup>
      <Label for={name} className="fw-bold">
        {label}
      </Label>
      <Input
        type="text"
        name={name}
        id={name}
        value={value}
        bsSize={size}
        onChange={onChangeHandler}
      />
    </FormGroup>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default TextInput;
