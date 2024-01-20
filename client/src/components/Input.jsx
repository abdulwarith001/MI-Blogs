import React from "react";

const FormInput = ({
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
  className,
  notRequired,
  description
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <em>{description }</em>
      {type === "file" ? (
        <input
          type={type}
          name={name}
          accept="image/x-png,image/gif,image/jpeg"
          id={name}
          placeholder={placeholder}
          defaultValue={value} // Use defaultValue for file inputs
          onChange={(e) => onChange(e)}
          className={className}
          required={notRequired ? false : true}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value || ""}
          onChange={(e) => onChange(e)}
          className={className}
          required={notRequired ? false : true}
        />
      )}
    </div>
  );
};

export default FormInput;
