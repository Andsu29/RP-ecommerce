import React from "react";
import style from "./inputs.module.css";

const Inputs = ({ name, label, type, onChange, valor }) => {
  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={style.input}
        value={valor}
        type={type}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Inputs;
