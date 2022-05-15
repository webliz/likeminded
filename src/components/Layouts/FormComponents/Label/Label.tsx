/** React */
import React from 'react';

/** Form label field  */
const Label:React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
  return <label className={className}>{children}</label>
}

export default Label;