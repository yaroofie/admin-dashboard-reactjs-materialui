import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function FAQ ()
{
   useEffect( () => { document.title = "FAQ Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      </Box>
   );
}
