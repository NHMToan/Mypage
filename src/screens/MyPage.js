import React, { useEffect } from "react";
import backgroundGraphich from "../assets/img/bg_pattern.png";
import Profile from "../components/Profile";
MyPage.propTypes = {};

function MyPage(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "grayscale(100%)";
    // document.body.style.backgroundImage = "url(" + backgroundGraphich + ")";
  }, []);
  const childrenWrapper = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    transition: "all .2s",
  };
  return (
    <div className="container">
      <div style={childrenWrapper}>
        <Profile />
      </div>
    </div>
  );
}

export default MyPage;
