import React from "react";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import { Card } from "antd";
import { useTranslation } from "react-i18next";
import "./index.scss";
Resume.propTypes = {};

function Resume(props) {
  const { t, i18n } = useTranslation();
  const CardItem = ({ title, time, content }) => {
    return (
      <Card
        hoverable
        className="card-item"
        style={{
          border: "4px double #ccc",
          marginBottom: "15px",
          marginRight: "15px",
        }}
      >
        <p className="title">{t(title)}</p>
        <p className="time">{t(time)}</p>
        <p className="content">{t(content)}</p>
      </Card>
    );
  };
  const CardItemLine = ({ name, title, time, content }) => {
    return (
      <div className="card-item-line">
        <div className="time">
          <div>
            <h5>{time}</h5>
            <span className="name">@{name}</span>
          </div>
        </div>
        <p className="title">{t(title)}</p>
        <p className="content">{t(content)}</p>
      </div>
    );
  };
  return (
    <div>
      <Title text="info_resume_tile_education" icon="fa-university" />
      <CardItem
        title="info_resume_education_item_1_title"
        time="info_resume_education_item_1_time"
        content="info_resume_education_item_1_content"
      />
      <CardItem
        title="info_resume_education_item_1_title"
        time="info_resume_education_item_1_time"
        content="info_resume_education_item_1_content"
      />
      <Title text="info_resume_tile_work_experience" icon="fa-briefcase" />
      <CardItemLine
        time="2014-2015"
        name="servicenode"
        title="info_resume_education_item_1_title"
        content="info_resume_education_item_1_content"
      />
      <CardItemLine
        time="2014-2015"
        name="servicenode"
        title="info_resume_education_item_1_title"
        content="info_resume_education_item_1_content"
      />
    </div>
  );
}

export default Resume;
