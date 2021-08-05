import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

const SelectInput = ({
  name,
  label,
  size = "lg",
  value,
  onChangeHandler,
  options,
}) => {
  return (
    <FormGroup>
      <Label for={name} className="fw-bold">
        {label}
      </Label>
      <Input
        type="select"
        name={name}
        id={name}
        value={value}
        bsSize={size}
        onChange={onChangeHandler}
      >
        {options &&
          options.length &&
          options.map((opt) => (
            <option key={`${opt.split(" ").join("")}`}>{opt}</option>
          ))}
      </Input>
    </FormGroup>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectInput;
