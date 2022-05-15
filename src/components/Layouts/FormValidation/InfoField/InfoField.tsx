/** React */
import React from "react";

/** Form info field  */
const InfoField:React.FC<{message: string, className?: string, style?: React.CSSProperties, }> = ({message, className, style}) => {
  return <label className={className} style={style}>{message}</label>
}

export default InfoField;
