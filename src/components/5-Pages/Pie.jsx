import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Pie ()
{
   useEffect( () => { document.title = "Pie Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      </Box>
   );
}
