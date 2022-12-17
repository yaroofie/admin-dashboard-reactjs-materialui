import { Box } from "@mui/material";
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";

export default function Invoices ()
{
   useEffect( () => { document.title = "Invoices Page"; }, [] );

   return (
      <Box m="20px">
         <Header title="INVOICES" subtitle="List of Invoice Balances" />
      </Box>
   );
}
