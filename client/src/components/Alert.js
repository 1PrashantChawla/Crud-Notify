import React, { useState } from 'react'

const Alert = (props) => {
  const [alert,setAlert]=useState("default")
  return (
    <div>
      <div className="alert alert-primary" role="alert">
  {props.message} 
</div>
    </div>
  )
}

export default Alert
