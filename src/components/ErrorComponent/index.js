import React from "react";
import PropTypes from "prop-types";

import InfoCard from "../InfoCard";

/**
 * @description - Error component.
 *
 * @param {Object} list - Error Object.
 *
 * @returns {ReactComponentElement} - Returns Error Component.
 */
const ErrorComponent = ({ error, info }) => {
  return (
    <InfoCard
      title="Something went wrong!"
      text="Please Refresh the page to continue."
    />
  );
};

ErrorComponent.defaultProps = {
  error: { message: "", stack: "" },
  info: { componentStack: "" },
};

ErrorComponent.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    stack: PropTypes.string,
  }),
  info: PropTypes.shape({ componentStack: PropTypes.string }),
};

export default ErrorComponent;
