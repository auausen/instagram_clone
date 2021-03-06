import { Avatar } from "@material-ui/core";
import React from "react";
import "./StatusBar.css";
import statusimg from "../../images/pp1.png";
import { useState, useEffect } from "react";
import uploadimage from "../../images/statusadd.png";

const StatusBar = () => {
  const [statusList, setstatusList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data = [
      {
        username: "abcd",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
    ];
    setstatusList(data);
  };

  return (
    <div className="statusbar__container">
      <img src={uploadimage} className="statusbar__upload" width="55px" height="55px" />
      {statusList.map((item, index) => (
        <div className="status">
          <Avatar className="statusbar__status" src={statusimg} />
          <div className="statusbar__text">{item.username}</div>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
