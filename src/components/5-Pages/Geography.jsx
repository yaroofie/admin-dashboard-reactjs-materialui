import { Box, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import Header from "../3-Organisms/Header";
import { tokens } from "../../scripts/theme";
import GeographyChart from "../3-Organisms/GeographyChart";

export default function Geography ()
{
   useEffect( () => { document.title = "Geography Page"; }, [] );
   const theme = useTheme();
   const colors = tokens( theme.palette.mode );

   return (
      <Box m="20px">
         <Header title="Geography" subtitle="Simple Geography Chart" />
         <Box
            height="75vh"
            border={`1px solid ${ colors.grey[ 100 ] }`}
            borderRadius="4px"
         >
            <GeographyChart />
         </Box>
      </Box>
   );
}
