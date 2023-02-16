import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


function StepperContainer({CurrentStatus,PromisedDate,TrackingNumber,provider}) {
    
const steps = [
    'Shipment Created',
    'The shipment has been received from the provider ',
    'The shipment is out for Delivery',
    'Delivered'
  ];
  const state = ()=>{
    if(CurrentStatus.state === 'DELIVERED')
        return 4;
    if (CurrentStatus.state === 'Out for Delivery')
    return 3;
    if(CurrentStatus.state === 'received')
    return 2;
    if(CurrentStatus.state === 'created')
    return 1;
  }

  return (
   <>
    <div className="grid-rows-2 grid-flow-col border-2 rounded-md" style={{marginLeft:100,marginRight:200, paddingTop:20,paddingLeft:10,paddingBottom:10,marginTop:30}}>
    <div className="grid grid-cols-4 gap-1"  style={{color:'#B2B2B2'}}>
    <div>Tracking Number{TrackingNumber}</div>
    <div>Last Update </div>
    <div>Provider Name </div>
    <div>Delivery Date</div>
  </div>
  <div className="grid grid-cols-4 gap-1"  style={{fontWeight:'bold'}}>
    <div style={{color:'red'}}>{CurrentStatus.state}</div>
    <div>{CurrentStatus.timestamp.slice(0,10)} - {CurrentStatus.timestamp.slice(11,16)}</div>
    <div>{provider}</div>
    <div>{PromisedDate.slice(0,10)} - {PromisedDate.slice(11,16)}</div>
  </div>
</div>
<div className='border-2 rounded-md border-t-0' style={{marginLeft:100,marginRight:200, paddingTop:20,paddingLeft:10}}>
    <Box sx={{ width: '100%', color:'red' , fontWeight:'bold',fontSize:16}}>
        <Stepper activeStep={state()} alternativeLabel>
          {steps.map((label) => (
            <Step key={label} >
              <StepLabel sx={{color:'green'}}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      </div>
</>
  )
}

export default StepperContainer