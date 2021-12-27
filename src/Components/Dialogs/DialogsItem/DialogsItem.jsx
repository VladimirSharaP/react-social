import React from "react";
import { NavLink } from "react-router-dom";
import dia from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs" + props.id;
  return (
    <div className={dia.dialog}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

export default DialogsItem;
