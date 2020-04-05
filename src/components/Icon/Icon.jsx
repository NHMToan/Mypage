import React from "react";
import PropTypes from "prop-types";

Icon.propTypes = {
  weight: PropTypes.oneOf(["Solid", "Light"]),
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default function Icon(props) {
  const { weight, className, color, style } = props;

  const iconProps = { ...props };
  delete iconProps.weight;

  switch (weight) {
    case "Solid": {
      return (
        <i
          {...iconProps}
          className={`fas ${className}`}
          aria-hidden="true"
          style={{ color: color, ...style }}
        >
          {" "}
        </i>
      );
    }

    case "Light": {
      return (
        <i
          {...iconProps}
          className={`fal ${className}`}
          aria-hidden="true"
          style={{ color: color, ...style }}
        >
          {" "}
        </i>
      );
    }

    default: {
      return (
        <i
          {...iconProps}
          className={`far ${className}`}
          aria-hidden="true"
          style={{ color: color, ...style }}
        >
          {" "}
        </i>
      );
    }
  }
}
