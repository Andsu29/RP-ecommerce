import React from "react";
import style from "./button.module.css";

const Button = ({ title, onClick, children }) => {
  return (
    <>
      <button title={title} className={style.btn} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
