import React from 'react'

const Input = ({type, label, placeholder, name, value, onChange}) => {
  return (
    <div className="input-wrapper">
          <label htmlFor={name}>{label }</label>
          <input type={type} id={name} placeholder={ placeholder} name={name} required value={value || ''} onChange={onChange}  />
    </div>
  );
}

export default Input