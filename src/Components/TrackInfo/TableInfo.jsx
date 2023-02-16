import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableInfo({transitenvents}) {

      
  return (
    
    <Paper sx={{overflow: 'hidden',tableLayout: "auto", border:1,borderColor:'#EEEEEE'
    , width: "max-content",marginLeft:13}} >
    <TableContainer sx={{ maxHeight: 250,tableLayout: "auto"}} >
    <Table sx={{ maxWidth: 650}} size="small" aria-label="a dense table" >
      <TableHead  style={{ backgroundColor: '#EEEEEE',color:'#B2B2B2' }}>
        <TableRow > 
          <TableCell align="left">Hub</TableCell>
          <TableCell align="left">Date</TableCell>
          <TableCell align="left">Time</TableCell>
          <TableCell align="left">Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transitenvents.map((row,i) => (
          <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">{row.hub ? row.hub : '___' }</TableCell>
            <TableCell align="left">{row.timestamp.slice(0,10)}</TableCell>
            <TableCell align="left">{row.timestamp.slice(11,16)}</TableCell>
            <TableCell align="left">{row.state}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Paper>


  );
}
export default TableInfo