import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from '../3-Organisms/Header';

export default function Form ()
{
   useEffect( () => { document.title = "Form Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="CREATE USER" subtitle="Create a New User Profile" />
      </Box>
   );
}
