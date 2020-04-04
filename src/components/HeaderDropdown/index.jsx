import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "antd";
import "./index.scss";
HeaderDropdown.propTypes = {
  overlayClassName: PropTypes.string,
  overlay: PropTypes.any,
  placement: PropTypes.oneOf([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topCenter",
    "topRight",
    "bottomCenter",
  ]),
};

function HeaderDropdown({ overlayClassName: cls, ...restProps }) {
  return <Dropdown overlayClassName="dropdown-container" {...restProps} />;
}

export default HeaderDropdown;
