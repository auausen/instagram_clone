import { Avatar } from "@material-ui/core";
import React from "react";
import "./StatusBar.css";
import statusimg from "../../images/pp1.png";
import { useState, useEffect } from "react";

const StatusBar = () => {
  const [statusList, setstatusList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data = [
      {
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },{
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },{
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },{
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },{
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },{
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },{
        username: "anindya_bunny",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "testing",
        imageURL: "../../images/pp1.png",
      },
    ];
    setstatusList(data);
  };

  return (
    <div className="statusbar__container">
      {statusList.map((item, index) => (
        <div className="status">
          <Avatar className="statusbar__status" src={statusimg} />
          <div className="statusbar__text">anidya_bunny</div>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
