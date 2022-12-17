import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";
import PieChart from "../3-Organisms/PieChart";

export default function Pie ()
{
   useEffect( () => { document.title = "Pie Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="Pie Chart" subtitle="Simple Pie Chart" />
         <Box height="75vh">
            <PieChart />
         </Box>
      </Box>
   );
}
