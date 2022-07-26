import React from "react";

import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  return <div>Button</div>;
}

// Typechecking With PropTypes
Button.propTypes = {
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  type: propTypes.oneOf(["button"], ["link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
