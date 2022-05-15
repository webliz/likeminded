/** React */
import React from "react";

interface SelectField {
  name: string, 
  options: any,
  value: number,
  className?: string, 
  style?: React.CSSProperties, 
  onChange: any
}

/** Form select field  */
const Select:React.FC<SelectField> 
  = ({name, value, options, onChange, className, style}) => {

  return (
    <select
      name={name} 
      value={value} 
      onChange={onChange}
      className={className} 
      style={style} 
    >
      {(options || []).map(({ key, name }:{ key: number, name: string }) => {
        return <option key={key} value={key}>
          {name}
        </option>
      })}
    </select>
  )
}

export default Select;