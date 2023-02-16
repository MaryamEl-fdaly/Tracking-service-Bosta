import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useState,useEffect } from "react";
import LoadingSpinner from '../Spinner';
import Navbar from '../Navbar';
import FoundData from './FoundData';

function APIData() {
    const {id} =useParams();
    const [data,setData]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  //Function to fetch data on submit of form

useEffect(() => {
  setIsLoading(true)
  fetch(`https://tracking.bosta.co/shipments/track/${id}`)
    .then((res) => res.json())
    .then((data) => {
    setData(data)
      setIsLoading(false)
    }).catch(() => {
      setErrorMessage("Unable to fetch user list");
      setIsLoading(false);
    });
}, [id]);

const TrackInfo = data ? data : "";
const transitenvents = data ? TrackInfo.TransitEvents : "";
const CurrentStatus = data ? TrackInfo.CurrentStatus : "";
const PromisedDate = data ? TrackInfo.PromisedDate : "";
const TrackingNumber = data ? TrackInfo.TrackingNumber: "";
const provider= data ? TrackInfo.provider:" ";
console.log(TrackInfo.error);

if(isLoading) return ( <LoadingSpinner/>)
if(errorMessage) return (<div>{errorMessage}</div>)
if(data)
  return (
    <>
      <Navbar/>

    {TrackInfo.error ? <div style={{color:'red', fontWeight:'bold', border:2,textAlign:'center',width:500,marginTop:200,marginLeft:450}}> No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.
    </div> 
    :  <FoundData transitenvents={transitenvents} CurrentStatus={CurrentStatus} PromisedDate={PromisedDate}  TrackingNumber={TrackingNumber} provider={provider}/>
}
    </>
  )
}

export default APIData