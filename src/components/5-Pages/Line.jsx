import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Line ()
{
   useEffect( () =>
   {
      document.title = "Line Page";
   }, [] );

   return (
      <Box m="20px">
         <Header title="Line Chart" subtitle="Simple Line Chart" />
      </Box>
   );
}
