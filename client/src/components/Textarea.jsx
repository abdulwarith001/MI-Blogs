import React from "react";

const Textarea = ({ label, row, col }) => {
  return (
    <div className="input-wrapper">
          <label htmlFor='textare'>{label}</label>
          <textarea name={label} id={label} cols={col} rows={row}></textarea>
    </div>
  );
};

export default Textarea;
