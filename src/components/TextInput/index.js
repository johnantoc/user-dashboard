import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

/**
 * @description - TextInput component.
 *
 * @param {String} name - Name String.
 * @param {String} label - Label alt String.
 * @param {String} size - Size String.
 * @param {String} value - Value String.
 * @param {func} onChangeHandler - Change Handler function.
 *
 * @returns {ReactComponentElement} - Returns TextInput.
 */
const TextInput = ({ name, label, size, value, onChangeHandler }) => {
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

TextInput.defaultProps = {
  size: "lg",
  name: "",
  label: "",
  value: "",
  onChangeHandler: () => null,
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default TextInput;
