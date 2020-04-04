import React, { useState } from "react";
import { Card } from "antd";

InfoCard.propTypes = {};
const infoTabsList = [
  {
    key: "career",
    tab: <span>Career Path</span>,
  },
  {
    key: "education",
    tab: <span>Education</span>,
  },
  {
    key: "skills",
    tab: <span>Skills</span>,
  },
];
function InfoCard(props) {
  const [tabKey, setTabkey] = useState("career");
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
    >
      {renderChildrenByTabKey(tabKey)}
    </Card>
  );
}

export default InfoCard;
