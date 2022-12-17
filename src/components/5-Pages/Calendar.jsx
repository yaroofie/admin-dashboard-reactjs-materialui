import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Calendar ()
{
   useEffect( () => { document.title = "Calendar Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      </Box>
   );
}
