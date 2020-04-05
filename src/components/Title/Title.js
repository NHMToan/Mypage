import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./index.scss";
import { useTranslation } from "react-i18next";
Title.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.oneOf(["default", "underline"]),
};

function Title(props) {
  const { text, icon, type } = props;
  const { t, i18n } = useTranslation();
  if (type === "underline")
    return (
      <h2 className="title-resume-underline">
        <Icon className={icon} style={{ margin: "0 10px" }} />
        {"  "}
        {t(text)}
      </h2>
    );
  return (
    <h2 className="title-resume">
      <Icon className={icon} style={{ margin: "0 10px" }} />
      {"  "}
      {t(text)}
    </h2>
  );
}

export default Title;
