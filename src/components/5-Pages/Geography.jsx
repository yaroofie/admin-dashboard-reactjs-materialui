import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Geography ()
{
   useEffect( () => { document.title = "Geography Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="Geography" subtitle="Simple Geography Chart" />
      </Box>
   );
}
