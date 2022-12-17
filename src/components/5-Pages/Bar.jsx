import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Bar ()
{
   useEffect( () => { document.title = "Bar Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      </Box>
   );
}
