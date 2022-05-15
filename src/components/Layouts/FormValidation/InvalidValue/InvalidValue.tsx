/** React */
import React from "react";

/** Invalid value component */
const InvalidValue:React.FC<{name: string, className?: string}> = ({name, className}) => {
  return <label className={className}>{`${name} is not valid`}</label>
}

export default InvalidValue;
