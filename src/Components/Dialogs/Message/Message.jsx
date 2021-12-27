import React from "react";
import dia from "./Message.module.css";

const Message = (props) => {
  return <div className={dia.message}>{props.message}</div>;
};

export default Message;
