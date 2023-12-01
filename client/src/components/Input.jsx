import React from 'react'

const Input = ({type, label, placeholder}) => {
  return (
    <div className="input-wrapper">
          <label htmlFor={type}>{label }</label>
          <input type={type} id={type} placeholder={ placeholder} required />
    </div>
  );
}

export default Input