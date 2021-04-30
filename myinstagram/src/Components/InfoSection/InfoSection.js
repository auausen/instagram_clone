import { Avatar } from "@material-ui/core";
import React from "react";
import "./InfoSection.css";
import imagesrc from "../../images/pp1.png";

const InfoSection = () => {
  return (
    <div>
      <div className="info__container">
        <Avatar src={imagesrc} className="info__image" />
        <div className="info__content">
          <div>anidya_bunny</div>
          <div>Description</div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
