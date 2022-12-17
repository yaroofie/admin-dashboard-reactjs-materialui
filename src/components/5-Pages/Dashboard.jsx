import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header"

export default function Dashboard ()
{
   useEffect( () => { document.title = "Dashboard Page"; }, [] );

   return (
      <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
         </Box>
      </Box>
   );
}
