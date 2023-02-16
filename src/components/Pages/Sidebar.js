import React from "react";
import vector from "../../assets/vector.png";
import addPatient from "../../assets/addPatient.png";
import patient from "../../assets/patient.png";
import folder from "../../assets/folder.png";
import upload from "../../assets/upload.png";
import report from "../../assets/report.png";
import setting from "../../assets/setting.png";
import logout from "../../assets/logout.png";

const Sidebar = () => {
  const data = [
    {
      key: 1,
      name: "new",
      image: addPatient,
    },
    {
      key: 2,
      name: "patient",
      image: patient,
    },
    {
      key: 3,
      name: "folder",
      image: folder,
    },
    {
      key: 4,
      name: "upload",
      image: upload,
    },
    {
      key: 5,
      name: "report",
      image: report,
    },
    {
      key: 6,
      name: "setting",
      image: setting,
    },
    {
      key: 7,
      name: "logout",
      image: logout,
    },
  ];

  return (
    <div className="border">
      <div className="vector_icon ">
        <img className="vector" src={vector} alt="vector image" />
      </div>
      {data.map((element) => {
        return (
          <div className="iconBox" key={element.key}>
            <img src={element.image} alt={element.name} />
            <p className="iconText">{element.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
