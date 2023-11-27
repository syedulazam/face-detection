import "tachyons";
import React from "react";
import "./navigation.css";

const Navigation = ({ isSigned, onRouteChange, onRoute }) => {
  if (onRoute === "home") {
    // No need to use this.state or this.setState since we are taking this prop from the parent js file where everything is happening
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <nav
          onClick={() => onRouteChange("signin")} // We have written () => onRouteChange("signin") instead of onRouteChange("signin") because we have used arrow
          // function in the App.js. And as i explained before, we need to use arrow functions in the rendering js file over the inline function (except in the case of
          // react life cycles) because "this" (which in our case is the App) will represent the function it is inside of and not the main function (App).
          className="underline f4 dim pa3 b pointer"
        >
          <p> Sign out </p>
        </nav>
      </div>
    );
  } else {
    return (
      <div
        className="margin"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <nav>
          <a
            onClick={() => onRouteChange("register")}
            className="underline f4 dim pa3 b pointer"
          >
            <p className="margin"> Register </p>
          </a>
        </nav>
        <nav>
          <a
            onClick={() => onRouteChange("signin")}
            className="underline f4 dim pa3 b pointer"
          >
            <p> Signin </p>
          </a>
        </nav>
      </div>
    );
  }
};

export default Navigation;
