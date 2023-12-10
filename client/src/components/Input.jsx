import React from 'react'

const Input = ({type, label, placeholder, name}) => {
  return (
    <div className="input-wrapper">
          <label htmlFor={type}>{label }</label>
          <input type={type} id={type} placeholder={ placeholder} name={name} required />
    </div>
  );
}

export default Input