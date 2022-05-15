/** React */
import React from 'react';

interface InputField {
  id?: string,
  type: string, 
  name: string, 
  value: string, 
  placeholder?: string,
  disabled?: boolean, 
  className?: string, 
  style?: React.CSSProperties, 
  max?: number, 
  min?: number,
  onChange: any
}

/** Form input field  */
const Input:React.FC<InputField> 
  = ({id, type, name, value, placeholder, onChange, disabled, className, style, max, min}) => {
  return (
    <input 
      id={id}
      type={type} 
      name={name} 
      value={value} 
      placeholder={placeholder} 
      disabled={disabled} 
      className={className} 
      style={style} 
      maxLength={max} 
      minLength={min} 
      onChange={onChange}
      data-testid='form-input'
    />
  )
}

export default Input;