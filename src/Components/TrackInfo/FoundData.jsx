import React from 'react'
import TableInfo from './TableInfo';
import { fontSize } from '@mui/system';
import StepperContainer from './StepperContainer';

function FoundData({transitenvents,CurrentStatus,PromisedDate,TrackingNumber,provider}) {
  return (
    <>
    <StepperContainer CurrentStatus={CurrentStatus} PromisedDate={PromisedDate}  TrackingNumber={TrackingNumber} provider={provider}/>
      <h2 style={{fontSize:18, fontWeight:'bold', padding:25,marginLeft:80}}>Transits Details</h2>
    <TableInfo transitenvents={transitenvents} />
    </>
  )
}

export default FoundData