import React, { useState } from "react";
import { Card } from "antd";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { FacebookOutlined } from "@ant-design/icons";
import Icon from "./Icon/Icon";
import Resume from "./Resume";
import Contact from "./Contact";
InfoCard.propTypes = {};

function InfoCard(props) {
  const { t, i18n } = useTranslation();
  const [tabKey, setTabkey] = useState("resume");
  const infoTabsList = [
    {
      key: "resume",
      tab: (
        <span>
          <Icon className="fa-address-card" style={{ marginRight: "10px" }} />
          {t("info_tab_resume")}
        </span>
      ),
    },
    {
      key: "skill",
      tab: (
        <span>
          <Icon className="fa-code" style={{ marginRight: "10px" }} />
          {t("info_tab_skill")}
        </span>
      ),
    },
    {
      key: "contact",
      tab: (
        <span>
          <Icon className="fa-map-marker-alt" style={{ marginRight: "10px" }} />
          {t("info_tab_contact")}
        </span>
      ),
    },
  ];
  const renderChildrenByTabKey = (key) => {
    switch (key) {
      case "resume":
        return <Resume />;
      case "skill":
        return "skill";
      case "contact":
        return <Contact />;
      default:
        return "";
    }
  };
  return (
    <Card
      className="tabs-card"
      style={{
        marginBottom: 24,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
      }}
      tabList={infoTabsList}
      onTabChange={(key) => setTabkey(key)}
      tabBarExtraContent={<Language />}
    >
      <div style={{ maxHeight: "500px", overflow: "auto" }}>
        {renderChildrenByTabKey(tabKey)}
      </div>
    </Card>
  );
}

export default InfoCard;
