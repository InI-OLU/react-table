import React from "react";
import './Forminput.css'
const Forminput = ({label= '', name = '',placeholder = '',setValue, value}) => {
  return (
    <label className="form">
      {label}
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
    </label>
  );
};

export default Forminput;
