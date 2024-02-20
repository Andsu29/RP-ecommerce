import React from "react";
import style from "./inputs.module.css";

const Inputs = ({ label, type, onChange, valor }) => {
  return (
    <div className={style.container}>
      <label className={style.label}>{label}</label>
      <input
        className={style.input}
        value={valor}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputs;
