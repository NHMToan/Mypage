import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import HeaderDropdown from "./HeaderDropdown";
import { GlobalOutlined } from "@ant-design/icons";
import i18n from "../i18n";

function Language(props) {
  const changeLang = ({ key }) => i18n.changeLanguage(key);
  const selectedLang = (key) => {
    console.log(key);
  };
  const locales = ["en", "vn"];
  const languageLabels = {
    en: "English",
    vn: "Vietnamese",
  };
  const languageIcons = {
    en: "🇺🇸",
    vn: "🇻🇳",
  };
  const langMenu = (
    <Menu className="menu" selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map((locale) => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{" "}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span className="language-dropdown">
        <GlobalOutlined title="Language" />
      </span>
    </HeaderDropdown>
  );
}

export default Language;
