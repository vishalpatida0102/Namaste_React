import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
       <h1>OoopSSS</h1>
    <h1>Erroooooo</h1>
    <h2>{err.status}:{err.statusText}</h2>


    </div>
  )
}

export default Error