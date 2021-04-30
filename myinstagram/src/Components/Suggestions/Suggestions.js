import { Avatar } from "@material-ui/core";
import React from "react";
import "./Suggestions.css";
import imageSrc from "../../images/pp1.png";

const Suggestions = () => {
  return (
    <div>
      <div className="suggestions__container">
        <div className="suggestions__header">
          <div>Suggestions For You</div>
        </div>
        <div className="suggestions__body">
          <div className="suggestions__friends">
            <Avatar src={imageSrc} className="suggestions__image" />
            <div className="suggestions__username">Friend 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
