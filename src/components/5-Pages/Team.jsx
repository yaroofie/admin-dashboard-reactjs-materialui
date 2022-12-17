import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header"

export default function Team ()
{
   useEffect( () =>
   {
      document.title = "Team Page";
   }, [] );

   return (
      <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="TEAM" subtitle="Managing the team members" />
         </Box>
      </Box>
   );
}
