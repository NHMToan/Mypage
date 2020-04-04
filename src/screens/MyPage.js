import React, { useEffect } from "react";
import backgroundGraphich from "../assets/img/back4.png";
import Profile from "../components/Profile";

function MyPage(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "grayscale(100%)";
    document.body.style.backgroundImage = "url(" + backgroundGraphich + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
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
