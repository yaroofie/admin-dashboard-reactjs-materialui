import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Contacts ()
{
   useEffect( () => { document.title = "Contacts Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      </Box>
   );
}
