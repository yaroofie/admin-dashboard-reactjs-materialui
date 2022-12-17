import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";
import BarChart from "../3-Organisms/BarChart";

export default function Bar ()
{
   useEffect( () => { document.title = "Bar Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="Bar Chart" subtitle="Simple Bar Chart" />
         <Box height="75vh">
            <BarChart />
         </Box>
      </Box>
   );
}
