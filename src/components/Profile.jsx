import React from "react";
import "./index.scss";
import { Card, Avatar, Row, Col, Button, Divider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import mypic from "../assets/img/avatar.jpg";
import InfoCard from "./InfoCard";
import { useTranslation } from "react-i18next";

Profile.propTypes = {};

function Profile(props) {
  const { t, i18n } = useTranslation();
  const profileCard = () => {
    const groupActions = () => {
      return (
        <div className="group-actions">
          <ul>
            <li>
              <Button
                size="large"
                shape="circle"
                style={{ margin: "0 10px" }}
                href="https://www.facebook.com/toan.nguyenhuynhminh"
                target="blank"
              >
                <FacebookOutlined />
              </Button>
            </li>
            <li>
              <Button size="large" shape="circle" style={{ margin: "0 10px" }}>
                <InstagramOutlined />
              </Button>
            </li>
            <li>
              <Button size="large" shape="circle" style={{ margin: "0 10px" }}>
                <TwitterOutlined />
              </Button>
            </li>
          </ul>
        </div>
      );
    };
    return (
      <Card
        style={{
          marginBottom: 24,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          borderRadius: "4px",
        }}
      >
        <div>
          <div className="avatar-holder">
            <Avatar alt="" size={150} src={mypic} />
            <div className="name">Minh Toan</div>
            <div className="info">
              {t("profile_job_name_developer") + " "}
              <Button
                type="link"
                href="https://goo.gl/maps/xKsQZXvhck1adcKA6"
                target="blank"
              >
                {t("profile_living_address")}
              </Button>
            </div>
          </div>
          {/* {this.renderUserInfo(currentUser)} */}
          <Divider dashed />
        </div>
        {groupActions()}
      </Card>
    );
  };
  return (
    <div>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          {profileCard()}
        </Col>
        <Col lg={17} md={24}>
          <InfoCard />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
