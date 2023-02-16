import React from "react";
import spinner from '../Images/spinner.gif'

export default function LoadingSpinner() {
  return (

        <img style={{  width: 100, height: 100, margin:'auto',marginTop:250}} src={spinner} alt="loading"/>
  );
} 