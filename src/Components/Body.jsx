import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react";
import { RiNumber2 } from "react-icons/ri";

function Body() {
  const [Num,setNum]=useState("");

    return (      
      <div className="place-self-center"  style={{
        margin:'0 auto',
        maxWidth:700
      }}>
        <h1 style={{fontSize:20,color:'#4f5665',
          fontWeight:'bold',marginTop:100,marginBottom:20}}>
            Track your shipment</h1>
        <form className='flex text-sm search-box justify-center	'>
            <input 
                className='border p-4 rounded-l-md border-#4f5665 focus:outline-none focus:ring-2 focus:ring-#1dabb3  w-6/12'
                type='search' 
                value={Num}
                onChange={(e)=>setNum(e.target.value)}
                name='search-tracking-No' 
                placeholder='Tracking No.'
               sx={{padding:0}}
            />
           <Link to={`/${Num}`}> <IconButton type="submit" aria-label="search"  sx={{padding:0}}>
                <SearchIcon className="border p-4 rounded-r-md" sx={{ fill: "white" , backgroundColor:"#e30613",width:60,height:60}} />         
              </IconButton>
              </Link>
        </form>
        </div> 

      );
}

export default Body