import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = (props) => {
  return (
    <div className="sidebarOptions">
      {props.Icon && <props.Icon className="sidebarOption__icon" />}
      {props.Icon ? <h4>{props.title}</h4> : <p>{props.title}</p>}
    </div>
  );
};

export default SidebarOptions;
