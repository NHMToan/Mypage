import React, { useState } from "react";
import { Card } from "antd";
import Language from "./Language";
import { useTranslation } from "react-i18next";

InfoCard.propTypes = {};

function InfoCard(props) {
  const { t, i18n } = useTranslation();
  const [tabKey, setTabkey] = useState("career");
  const infoTabsList = [
    {
      key: "career",
      tab: <span>{t("info_tab_career_path")}</span>,
    },
    {
      key: "education",
      tab: <span>{t("info_tab_education")}</span>,
    },
    {
      key: "skills",
      tab: <span>{t("info_tab_skill")}</span>,
    },
  ];
  const renderChildrenByTabKey = (key) => {
    switch (key) {
      case "career":
        return "Career";
      case "education":
        return "education";
      case "skills":
        return "skills";
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
      {renderChildrenByTabKey(tabKey)}
    </Card>
  );
}

export default InfoCard;
