/** React */
import React from "react";

/** Central required field validation error message  */
const RequiredField:React.FC<{className?: string}> = ({className}) => {
  return <label className={className}>{`Required field cannot be left blank`}</label>
}

export default RequiredField;
